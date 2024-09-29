/*
  Refactor


*/

import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
  // 1.
  const getComponents = () => {
    render(<TermsAndConditions />)
    const heading = screen.getByRole('heading')
    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')
    return { heading, checkbox, button }
  }

  it('should render with correct text and initial state', () => {
    const { heading, checkbox, button } = getComponents() // 2.

    expect(heading).toHaveTextContent('Terms & Conditions')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/submit/i)
    expect(button).toBeDisabled()
  })

  it('should enable the button when the checkbox is checked', async () => {
    const { checkbox, button } = getComponents() // 3.

    // check the checkbox
    const user = userEvent.setup()
    await user.click(checkbox)

    expect(button).toBeEnabled()
  })
})
