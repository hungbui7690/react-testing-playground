import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
  it('should render Hello with the name when name is provided', () => {
    render(<Greet name='John' />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/John/i)
  })

  it('should render Login button', () => {
    render(<Greet name='' />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Login/i)
  })
})
