/*
  Exercise - Testing SearchBox
  - https://testing-library.com/docs/user-event/utility#type
  - get the input field
    -> screen.getByPlaceholderText(/search/i)
    -> screen.getByRole('textbox')
    -> screen.getByLabelText('Your Input Label'); 
    -> const input = screen.getByTestId('your-input-id') -> data-testid attribute


****************************

  onChange 
  - vitest -> const onChange = vi.fn()
  - jest -> const onChange = jest.fn()


****************************

  Flows: 
  - render input filed at initial state
  - call onChange when Enter is pressed


*/

import { render, screen } from '@testing-library/react'
import SearchBox from '../../src/components/SearchBox'
import userEvent from '@testing-library/user-event'

describe('SearchBox', () => {
  const renderSearchBox = () => {
    const onChange = vi.fn()
    render(<SearchBox onChange={onChange} />)

    return {
      input: screen.getByPlaceholderText(/search/i),
      user: userEvent.setup(),
      onChange,
    }
  }

  it('should render an input field for searching', () => {
    const { input } = renderSearchBox()
    expect(input).toBeInTheDocument()
  })

  it('should call onChange when Enter is pressed', async () => {
    const { input, onChange, user } = renderSearchBox()
    const searchTerm = 'SearchTerm'
    await user.type(input, searchTerm + '{enter}')
    expect(onChange).toHaveBeenCalledWith(searchTerm) // # input has value -> onChange is called
  })

  it('should not call onChange if input field is empty', async () => {
    const { input, onChange, user } = renderSearchBox()
    await user.type(input, '{enter}')
    expect(onChange).not.toHaveBeenCalled() // # input has no value -> onChange is not called
  })
})
