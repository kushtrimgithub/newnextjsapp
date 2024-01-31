import Link from 'next/link'
import Image from 'next/image'
import { createClient } from "@/prismicio";
import { PrismicLink, PrismicText } from "@prismicio/react";



export default async function Header() {
  const client = createClient();
  const menu = await client.getSingle('menu')

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