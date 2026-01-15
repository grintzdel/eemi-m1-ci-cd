'use client'

import Link from 'next/dist/client/link'
import Image from 'next/image'
import React, { useState } from 'react'

const SignUpBanner: React.FC = (): React.JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 bg-black px-25 py-2.25">
      <div></div>
      <div className="flex flex-col justify-center gap-1 text-center text-sm text-white md:flex-row">
        <p>Sign up and get 20% off to your first order.</p>
        <Link href={'/'} className="font-bold capitalize underline">
          Sign Up Now
        </Link>
      </div>
      <button onClick={() => setIsVisible(false)} className="cursor-pointer justify-self-end" aria-label="Close banner">
        <Image src="/icon-cross.svg" alt="Close" width={14} height={14} />
      </button>
    </div>
  )
}

type LinkItemProps = {
  href: string
  children: Readonly<React.ReactNode>
}

const LinkItem: React.FC<LinkItemProps> = ({ href, children }: LinkItemProps): React.JSX.Element => {
  return (
    <li>
      <Link href={href} className="cursor-pointer capitalize">
        {children}
      </Link>
    </li>
  )
}

type LinkItemDetailsProps = {
  title: string
  children: Readonly<React.ReactNode>
}

const LinkItemDetails: React.FC<LinkItemDetailsProps> = ({
  title,
  children,
}: LinkItemDetailsProps): React.JSX.Element => {
  return (
    <li className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden">
          {title}
          <Image
            src="/icon-dropdown.svg"
            alt=""
            width={12}
            height={7}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <ul className="absolute top-full left-0 mt-3 flex flex-col gap-2 rounded-lg bg-white p-3 shadow-2xl">
          {children}
        </ul>
      </details>
    </li>
  )
}

const Logo: React.FC = (): React.JSX.Element => {
  return <Image src="/header-logo.svg" alt="Shop.co logo" width={160} height={22} />
}

const Menu: React.FC = (): React.JSX.Element => {
  return (
    <nav>
      <ul className="flex flex-row gap-6">
        <LinkItemDetails title="Shop">
          <LinkItem href="/men">Men</LinkItem>
          <LinkItem href="/women">Women</LinkItem>
          <LinkItem href="/kids">Kids</LinkItem>
        </LinkItemDetails>
        <LinkItem href="/on-sale">On Sale</LinkItem>
        <LinkItem href="/new-arrivals">New Arrivals</LinkItem>
        <LinkItem href="/brands">Brands</LinkItem>
      </ul>
    </nav>
  )
}

const NavBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-row justify-between gap-10 bg-white px-25 py-6">
      <Logo />
      <Menu />
    </div>
  )
}

export const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="flex flex-col">
      <SignUpBanner />
      <NavBar />
    </header>
  )
}
