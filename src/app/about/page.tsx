import Link from 'next/link'
import Image from 'next/image'
import { createClient } from "@/prismicio";

export default async function About() {
const client = createClient();
const cta = await client.getSingle("cta");
const settings = await client.getSingle("settings");
  
  return (
    <div>
      <h1>{cta.data.headline}</h1>
      <h1>{settings.data.headline}</h1>
    </div>
  )
}