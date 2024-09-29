/*
  Testing User Interactions
  ~~ npm i -D @testing-library/user-event
    -> docs -> User Interactions


  - TermsAndConditions component has a checkbox and a button
    -> click on the checkbox -> button should be enabled
  - PlaygroundPage -> attach TermAndConditions component here to see in UI 

  
  1. pages/PlaygroundPage.tsx
    -> attach TermsAndConditions component here
  2. index.css
    .btn:disabled {
      background: #ccc;
    }


*/

import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
  it('should render with correct text and initial state', () => {
    render(<TermsAndConditions />)
    const heading = screen.getByRole('heading')
    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    expect(heading).toHaveTextContent('Terms & Conditions')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/submit/i)
    expect(button).toBeDisabled()
  })

  it('should enable the button when the checkbox is checked', async () => {
    render(<TermsAndConditions />)
    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    // check the checkbox
    const user = userEvent.setup()
    await user.click(checkbox)

    expect(button).toBeEnabled()
  })
})
