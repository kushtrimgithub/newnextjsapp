import Link from 'next/link'
import Image from 'next/image'
import { createClient } from "@/prismicio";

export default async function About() {
const client = createClient();
const cta = await client.getSingle("cta");
  
  return (
    <div>
      <h1>{cta.data.headline}</h1>
    </div>
  )
}