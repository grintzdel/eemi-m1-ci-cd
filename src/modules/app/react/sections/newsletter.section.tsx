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
    <section className="relative z-10 mx-4 -mb-20 rounded-[12px] bg-black px-4 py-6 md:mx-25 md:-mb-21.75 md:rounded-[20px] md:px-16 md:py-9">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        <h3 className="text-center text-xl leading-tight font-bold text-white uppercase md:max-w-137.5 md:text-left md:text-[40px] md:leading-11.25">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="flex w-full flex-col gap-3 md:w-87.5 md:gap-3.5">
          <NewsletterInput />
          <Button href="#" text="Subscribe to Newsletter" variant="secondary" fullWidth />
        </div>
      </div>
    </section>
  )
}
