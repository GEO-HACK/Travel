"use client"

import React from 'react'
import Link  from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar