import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {
  // test the string tag
  it('should render username', () => {
    const user: User = { id: 1, name: 'John' }
    render(<UserAccount user={user} />)
    expect(screen.getByText(user.name)).toBeInTheDocument()
  })

  // test the button
  it('should render edit button if user is admin', () => {
    const user: User = { id: 1, name: 'John', isAdmin: true }
    render(<UserAccount user={user} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/edit/i)
  })

  it('should not render edit button if user is admin', () => {
    // # isAdmin = false
    const user: User = { id: 1, name: 'John' }
    render(<UserAccount user={user} />)

    // # need to use queryByRole() instead of getByRole() -> since button does not exist in the DOm
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
