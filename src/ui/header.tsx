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
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 bg-black px-4 py-2 md:gap-4 md:px-25 md:py-2.25">
      <div></div>
      <div className="flex flex-col justify-center gap-1 text-center text-xs text-white md:flex-row md:text-sm">
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
      <Link href={href} className="cursor-pointer whitespace-nowrap capitalize">
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
  return (
    <div className="shrink-0 content-center">
      <Image src="/header-logo.svg" alt="Shop.co logo" width={160} height={22} />
    </div>
  )
}

const Menu: React.FC = (): React.JSX.Element => {
  return (
    <nav className="hidden shrink-0 content-center lg:block">
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

const SearchBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="hidden flex-1 flex-row items-center gap-3 rounded-full bg-[#F0F0F0] px-4 py-3 lg:flex">
      <Image src="/icon-search.svg" alt="Search something" width={24} height={24} />
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-transparent outline-none focus:ring-0 focus:outline-none"
      />
    </div>
  )
}

const MobileMenuButton: React.FC = (): React.JSX.Element => {
  return (
    <button className="flex items-center justify-center lg:hidden" aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}

const MobileSearchButton: React.FC = (): React.JSX.Element => {
  return (
    <button className="flex items-center justify-center lg:hidden" aria-label="Search">
      <Image src="/icon-search.svg" alt="Search" width={24} height={24} />
    </button>
  )
}

const NavActions: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex shrink-0 flex-row items-center gap-3">
      <MobileSearchButton />
      <Link href="/cart">
        <Image src="/icon-cart.svg" alt="Cart" width={24} height={24} className="cursor-pointer" />
      </Link>
      <Link href="/account">
        <Image src="/icon-account.svg" alt="Account" width={24} height={24} className="cursor-pointer" />
      </Link>
    </div>
  )
}

const NavBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 bg-white px-4 py-4 md:px-25 md:py-6 lg:gap-10">
      <MobileMenuButton />
      <Logo />
      <Menu />
      <SearchBar />
      <NavActions />
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
