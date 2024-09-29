/*
  Exercise - Simplifying Code


*/

import { render, screen } from '@testing-library/react'
import OrderStatusSelector from '../../src/components/OrderStatusSelector'
import { Theme } from '@radix-ui/themes'
import userEvent from '@testing-library/user-event'

window.HTMLElement.prototype.scrollIntoView = vi.fn()
window.HTMLElement.prototype.hasPointerCapture = vi.fn()
window.HTMLElement.prototype.releasePointerCapture = vi.fn()

describe('OrderStatusSelector', () => {
  const getComponent = () => {
    const onChange = vi.fn()
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    )

    return {
      combobox: screen.getByRole('combobox'),
      getOptions: () => screen.findAllByRole('option'), // # since this is async function -> need to convert into function
    }
  }

  it('should render New as the default value', () => {
    const { combobox } = getComponent()
    expect(combobox).toHaveTextContent(/new/i)
  })

  it('should render correct statuses', async () => {
    const { combobox, getOptions } = getComponent()
    const user = userEvent.setup()
    await user.click(combobox)
    const options = await getOptions() // #
    expect(options).toHaveLength(3)
    const labels = options.map((option) => option.textContent)
    expect(labels).toEqual(['New', 'Processed', 'Fulfilled'])
  })
})
