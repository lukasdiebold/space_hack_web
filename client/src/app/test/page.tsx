'use client'
import { Dashboard } from "@/components/robot_dashboard/dashboard"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SelectTrigger, Select, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Page() {


  const formSchema = z.object({
    prompt: z.string(),
    agent: z.custom((value) => {

    })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",

    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return <section className="w-full h-full min-h-screen bg-black text-white p-5 flex flex-col justify-between">
    <h1 className="text-3xl">Good Afternoon, Mr. Hwang</h1>
    <section className="image">

    </section>
    <form className="w-full grid grid-cols-10 grid-rows-2 gap-x-5 gap-y-3 items-end">
      <Label htmlFor="prompt" className="w-full row-start-1 row-end-1 col-start-1 col-end-7 self-end h-fit">Prompt</Label>
      <Label htmlFor="agent" className="w-full row-span-1 col-start-7 col-end-10 self-end h-fit">Agent</Label>
      <Input name="prompt" placeholder="Enter your Prompt here" className="row-start-2 row-end-2 col-start-1 col-end-7 "/>
      <div className="row-start-2 row-end-2 col-start-7 col-end-10 ">
        <Select name="agent">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Agent" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="row-start-2 row-end-2 col-start-10 col-end-10">
        <Button type="submit" className="w-full">Submit</Button>
      </div>
    </form>
  </section>
}