import { render, screen } from '@testing-library/react'
import { Navbar } from '../../ui/Navbar'
import { vi } from 'vitest'

// Mock mocks
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

// Mock framer-motion since it uses window/scroll events
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, className }: { children: React.ReactNode; className: string }) => (
      <nav className={className}>{children}</nav>
    ),
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: () => 'transform-value',
}))

describe('Navbar Component', () => {
  it('renders the branding logo', () => {
    render(<Navbar />)
    expect(screen.getByText('RB')).toBeDefined()
    expect(screen.getByText('RigBuilders')).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Guides')).toBeDefined()
    expect(screen.getByText('Builder')).toBeDefined()
    expect(screen.getByText('Showcase')).toBeDefined()
  })

  it('renders action buttons', () => {
    render(<Navbar />)
    expect(screen.getByText('Start Build')).toBeDefined()
  })

  it('renders cart icon with count', () => {
    render(<Navbar />)
    expect(screen.getByText('0')).toBeDefined()
  })
})
