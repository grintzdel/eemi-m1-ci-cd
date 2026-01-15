import { Header } from '@/ui/header'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => <img src={src} alt={alt} {...props} />,
}))

vi.mock('next/dist/client/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}))

describe('Header', () => {
  it('should render without crashing', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render the logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Shop.co logo')).toBeInTheDocument()
  })

  it('should render the sign up banner', () => {
    render(<Header />)
    expect(screen.getByText('Sign up and get 20% off to your first order.')).toBeInTheDocument()
  })

  it('should render the Sign Up Now link', () => {
    render(<Header />)
    expect(screen.getByText('Sign Up Now')).toBeInTheDocument()
  })

  it('should hide banner when close button is clicked', () => {
    render(<Header />)
    const closeButton = screen.getByLabelText('Close banner')
    fireEvent.click(closeButton)
    expect(screen.queryByText('Sign up and get 20% off to your first order.')).not.toBeInTheDocument()
  })
})

describe('Navigation', () => {
  it('should render the Shop dropdown', () => {
    render(<Header />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Header />)
    expect(screen.getByText('On Sale')).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Brands')).toBeInTheDocument()
  })

  it('should render shop categories in dropdown', () => {
    render(<Header />)
    expect(screen.getByText('Men')).toBeInTheDocument()
    expect(screen.getByText('Women')).toBeInTheDocument()
    expect(screen.getByText('Kids')).toBeInTheDocument()
  })
})

describe('SearchBar', () => {
  it('should render search input', () => {
    render(<Header />)
    expect(screen.getByPlaceholderText('Search for products...')).toBeInTheDocument()
  })

  it('should render search icon', () => {
    render(<Header />)
    expect(screen.getByAltText('Search something')).toBeInTheDocument()
  })
})

describe('NavActions', () => {
  it('should render cart link', () => {
    render(<Header />)
    const cartIcon = screen.getByAltText('Cart')
    expect(cartIcon).toBeInTheDocument()
    expect(cartIcon.closest('a')).toHaveAttribute('href', '/cart')
  })

  it('should render account link', () => {
    render(<Header />)
    const accountIcon = screen.getByAltText('Account')
    expect(accountIcon).toBeInTheDocument()
    expect(accountIcon.closest('a')).toHaveAttribute('href', '/account')
  })
})
