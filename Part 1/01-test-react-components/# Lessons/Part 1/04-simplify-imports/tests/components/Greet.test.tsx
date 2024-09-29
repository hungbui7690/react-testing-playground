/*
  Simplifying Test Setup
  1. vitest.config.ts
    -> globals: true
  2. tsconfig.json
    -> types: ["vitest/globals"]

  3. tests/setup.ts
  4. vitest.config.ts
    -> setupFiles: ['<rootDir>/tests/setup.ts']

  5. extension: testing library snippets -> itr -> import { render, screen } from '@testing-library/react'


*/

// import { it, expect, describe } from 'vitest' // 1. globals: true
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

// 2. tsconfig.json -> types: ["vitest/globals"]
describe('Greet', () => {
  it('should render Hello with the name when name is provided', () => {
    render(<Greet name='John' />)

    // screen.debug()

    // getByLabelText(), getByRole()...
    const heading = screen.getByRole('heading') // if we comment the heading line in Greet component -> err
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
