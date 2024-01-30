import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/PostCard";


export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blog");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}