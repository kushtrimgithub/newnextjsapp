import Link from 'next/link'
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("startpage");


  return (
    <div>
      <h1>{page.data.headline}</h1>
      <SliceZone slices={page.data.slices} components={components} />      
    </div>
  );
}



export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("startpage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}