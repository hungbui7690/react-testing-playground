/*
  What to Test
  - how the components render
  - how they respond to user actions
  - test the behaviors (what app does), not the implementation
  - DON'T test <styles>


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Testing Rendering
  - https://testing-library.com/docs/queries/about/


*/

import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
import '@testing-library/jest-dom/vitest' // to use custom matchers: e.g. toBeInTheDocument, toBeEmptyDOMElement...

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
