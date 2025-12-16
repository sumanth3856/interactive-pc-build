import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import { vi } from 'vitest'

// Mock dependencies
vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))

vi.mock('../GlobeAnimation', () => ({
  GlobeAnimation: () => <div data-testid="globe-animation">Globe Animation</div>
}))

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/BUILD YOUR/i)).toBeDefined()
    expect(screen.getByText(/DREAM RIG/i)).toBeDefined()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/In the age of/i)).toBeDefined()
  })

  it('renders call to action buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Start Building/i)).toBeDefined()
    expect(screen.getByText(/View Guides/i)).toBeDefined()
  })

  it('renders the GlobeAnimation component', () => {
    render(<Hero />)
    expect(screen.getByTestId('globe-animation')).toBeDefined()
  })

  it('renders social proof statistics', () => {
    render(<Hero />)
    expect(screen.getByText(/15,000\+/i)).toBeDefined()
    expect(screen.getByText(/Builds Created/i)).toBeDefined()
  })
})
