import Link from 'next/link'
import Image from 'next/image'
import { createClient } from "@/prismicio";


export default async function Header() {
  const client = createClient();
  const call = await client.getSingle("cta");
  const settings = await client.getSingle("settings");

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          Logo
        </Link>
      </div>
      <div className="menu">
        <Link href="/">
          About
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/services">
          Services
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}