'use client'
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectTrigger, Select, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FormEvent, useEffect, useRef, useState } from "react"
import { addDoc, collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { appFirestore } from "@/lib/firebase/db"
import { keyframes } from "motion/react"

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState<number>(-1);
  const [agents, setAgents] = useState<{
    robotId: string,
    task_name: string
  }[]>([]);
  const api = "https://aris.innovation-sg.ch"

  const valueChanged = (e: string) => {
    setSelectedAgentIndex(parseInt(e));
    (async () => {
          const remoteStream = new MediaStream();
          const pc = new RTCPeerConnection();
      
          console.log("value changed");
          pc.ontrack = event => {
            event.streams[0].getTracks().forEach(track => {
              console.log("adding track ");
              remoteStream.addTrack(track);
            })
          }
    
          videoRef.current.srcObject = remoteStream

          console.log(videoRef.current.srcObject);

          const callDoc = doc(collection(appFirestore, "calls"), e);
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
    })();
  }

  useEffect(() => {
    (async () => {
      const robots = await fetch(`${api}/v1/robots`);
      const robotList = await robots.json();
      console.log(robotList);
      setAgents(robotList);
    })()
  }, [])

  const submitPrompt = (e: FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    if (selectedAgentIndex == -1) return;
    const prompt = inputRef.current.value;
    inputRef.current.value = "";
    const robotId = agents[selectedAgentIndex].robotId;
    fetch(`${api}/v1/robots/Test/task`, {
      method: "POST",
      body: JSON.stringify({
        robot_id: robotId,
        task: prompt  
      })
    })

  }


  return <section className="w-full h-full min-h-screen bg-black text-white p-5 flex flex-col justify-between">
    <h1 className="text-3xl">Good Afternoon, Mr. Hwang</h1>
    <section className="w-full my-5 h-[800px] overflow-hidden"  style={{
      borderRadius: "10px",
      objectFit: "cover"
    }}>
      <video ref={videoRef} autoPlay playsInline className="w-full"/>
    </section>
    <form className="w-full grid grid-cols-10 grid-rows-2 gap-x-5 gap-y-3 items-end" onSubmit={submitPrompt}>
      <Label htmlFor="prompt" className="w-full row-start-1 row-end-1 col-start-1 col-end-7 self-end h-fit">Prompt</Label>
      <Label htmlFor="agent" className="w-full row-span-1 col-start-7 col-end-10 self-end h-fit">Agent</Label>
      <Input ref={inputRef} name="prompt" placeholder="Enter your Prompt here" className="row-start-2 row-end-2 col-start-1 col-end-7 "/>
      <div className="row-start-2 row-end-2 col-start-7 col-end-10 ">
        <Select name="agent" onValueChange={(e) => valueChanged(e)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Agent" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            {
              agents.map((agent, idx) => {
                return <SelectItem key={idx} value={idx.toString()}>Agent {agent.robotId}</SelectItem>
              })
            }
          </SelectContent>
        </Select>
      </div>
      <div className="row-start-2 row-end-2 col-start-10 col-end-10">
        <Button type="submit" className="w-full">Submit</Button>
      </div>
    </form>
  </section>
}