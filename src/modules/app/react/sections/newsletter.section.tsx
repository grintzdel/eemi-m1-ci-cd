import { Button } from '@/ui/button'
import React from 'react'

const EmailIcon: React.FC = (): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-black/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

const NewsletterInput: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex w-full items-center gap-3 rounded-full bg-white px-4 py-3">
      <EmailIcon />
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 bg-transparent text-black outline-none placeholder:text-black/40"
      />
    </div>
  )
}

export const NewsletterSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="relative z-10 mx-25 -mb-21.75 rounded-[20px] bg-black px-16 py-9">
      <div className="flex items-center justify-between">
        <h3 className="max-w-137.5 text-[40px] leading-11.25 font-bold text-white uppercase">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="flex w-87.5 flex-col gap-3.5">
          <NewsletterInput />
          <Button href="#" text="Subscribe to Newsletter" variant="secondary" fullWidth />
        </div>
      </div>
    </section>
  )
}
