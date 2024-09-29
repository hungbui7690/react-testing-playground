/*
  Exercise - Testing OrderStatusSelector


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
      getOptions: () => screen.findAllByRole('option'), // find all options

      // #
      user: userEvent.setup(),
      onChange,
    }
  }

  it('should render New as the default value', () => {
    const { combobox } = getComponent()
    expect(combobox).toHaveTextContent(/new/i)
  })

  it('should render correct statuses', async () => {
    const { combobox, getOptions, user } = getComponent()
    await user.click(combobox)
    const options = await getOptions()
    expect(options).toHaveLength(3)
    const labels = options.map((option) => option.textContent)
    expect(labels).toEqual(['New', 'Processed', 'Fulfilled'])
  })

  // Step 1
  // it("should call onChange with 'processed' when the Processed option is selected", async () => {
  //   const { combobox, user, onChange } = getComponent()
  //   await user.click(combobox)

  //   // find specific option
  //   const processedOption = await screen.findByRole('option', {
  //     name: /processed/i,
  //   })
  //   await user.click(processedOption)
  //   expect(onChange).toHaveBeenCalledWith('processed')
  // })

  // Step 2: convert step 1 to be dynamic using it.each() -> then place these in the callback function params below
  it.each([
    { label: /processed/i, value: 'processed' }, // 1.
    { label: /fulfilled/i, value: 'fulfilled' },
    // { label: /new/i, value: 'new' }, // for this one, we need to create a new test case
  ])(
    'should call onChange with $value when the $label option is selected',
    // 2.
    async ({ label, value }) => {
      const { combobox, user, onChange } = getComponent()
      await user.click(combobox)

      // find specific option
      const option = await screen.findByRole('option', { name: label }) // 3.
      await user.click(option)
      expect(onChange).toHaveBeenCalledWith(value) // 4.
    }
  )

  it("should call onChange with 'new' when the New option is selected", async () => {
    const { combobox, user, onChange } = getComponent()

    // for "new" option to work, we first need to select the other option -> then select "new"
    await user.click(combobox)
    const processedOption = await screen.findByRole('option', {
      name: /processed/i,
    })
    await user.click(processedOption)

    await user.click(combobox)
    const newOption = await screen.findByRole('option', { name: /new/i })
    await user.click(newOption)

    expect(onChange).toHaveBeenCalledWith('new')
  })
})
