'use client'
import {  useRef } from 'react';
import { addDoc, collection, doc, getDoc,  onSnapshot, updateDoc } from 'firebase/firestore';
import { appFirestore } from '@/lib/firebase/db';

export default function ViewerPage() {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleViewing = (async () => {
      const remoteStream = new MediaStream();
      const pc = new RTCPeerConnection();

      pc.ontrack = event => {
        event.streams[0].getTracks().forEach(track => {
          remoteStream.addTrack(track);
        })
      }

      videoRef.current.srcObject = remoteStream

      const callDoc = doc(collection(appFirestore, "calls"), inputRef.current.value);
      const offerCandidates = collection(callDoc, "offerCandidates");
      const answerCandidates = collection(callDoc, "answerCandidates");

      pc.onicecandidate = event => {
        if (event.candidate) {
          addDoc(answerCandidates, event.candidate.toJSON())
        }
      }

      const callData = (await getDoc(callDoc)).data();
      if (!callData) return;
      const offerDescription = callData.offer;
      await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));
      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp
      }

      await updateDoc(callDoc, { answer });

      onSnapshot(offerCandidates, snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        })
      })

    })

  return (
    <div>
      <h1>Viewer Page</h1>
      <input type="text" ref={inputRef} /> <button onClick={handleViewing}>start streaming</button>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
    </div>
  );
}
