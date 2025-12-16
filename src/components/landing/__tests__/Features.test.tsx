import { render, screen } from '@testing-library/react'
import { Features } from '../Features'
import { vi } from 'vitest'

// Mock Lucide icons to avoid rendering issues if any
vi.mock('lucide-react', () => ({
  Cpu: () => <div data-testid="icon-cpu" />,
  IndianRupee: () => <div data-testid="icon-rupee" />,
  ShieldCheck: () => <div data-testid="icon-shield" />,
  Zap: () => <div data-testid="icon-zap" />,
  Cloud: () => <div data-testid="icon-cloud" />,
}))

describe('Features Component', () => {
  it('renders the main section title', () => {
    render(<Features />)
    expect(screen.getByText(/Why Build with/i)).toBeDefined()
    expect(screen.getByText(/RigBuilders\?/i)).toBeDefined()
  })

  it('renders the Visual Builder Wizard feature', () => {
    render(<Features />)
    expect(screen.getByText('Visual Builder Wizard')).toBeDefined()
    expect(screen.getByText(/Drag, drop, and visualize/i)).toBeDefined()
  })

  it('renders the Amazon India Sync feature', () => {
    render(<Features />)
    expect(screen.getByText('Amazon India Sync')).toBeDefined()
    expect(screen.getByText(/Live pricing from Amazon.in/i)).toBeDefined()
  })

  it('renders the Compatibility Engine feature', () => {
    render(<Features />)
    expect(screen.getByText('Compatibility Engine')).toBeDefined()
    expect(screen.getByText(/AI-powered checks/i)).toBeDefined()
  })

  it('renders the Cloud Saved feature', () => {
    render(<Features />)
    expect(screen.getByText('Cloud Saved & Shareable')).toBeDefined()
    expect(screen.getByText(/Save your progress/i)).toBeDefined()
  })
})
