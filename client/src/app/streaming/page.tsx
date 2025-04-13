'use client'
import { useContext, useEffect, useRef } from 'react';
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore"
import { appFirestore } from '@/lib/firebase/db';

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleStreaming = async () => {

      const pc = new RTCPeerConnection();
      const localStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });

      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      })

      const callDoc = doc(collection(appFirestore, "calls"), inputRef.current.value);
      const offerCandidates = collection(callDoc, "offerCandidates");
      const answerCandidates = collection(callDoc, "answerCandidates")

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type
      }


      console.log("offering shit");
      await setDoc(callDoc, { offer })

    
      onSnapshot(callDoc, (snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      })

      onSnapshot(answerCandidates, snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate)
          }
        })
      })

    }

  return (
    <div>
      <h1>Camera Page</h1>
      <input type="text" ref={inputRef} /> <button onClick={handleStreaming}>start streaming</button>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
    </div>
  );
}
