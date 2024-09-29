/*
  Working with Component Libraries
  - OrderStatusSelector -> use radix-ui component


***********************

  Inspect the component
  - <button type="button" role="combobox">...</button>
    -> we cannot select with the role of "button"
    -> this has a special role of "combobox"


  - to find the role -> inspect the component -> but sometimes, we cannot find the role -> we need to pass any role there -> const options = screen.getAllByRole('xyz') -> then error will appear, and we can find the role -> pic
      <div role="option" >
        <span id="radix-:rc:">
          Processed
        </span>
      </div>


***********************

  - [ReferenceError: ResizeObserver is not defined]

  Solution 1:
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

  Solution 2: 
    npm i -D resize-observer-polyfill
    import ResizeObserver from 'resize-observer-polyfill'
    global.ResizeObserver = ResizeObserver


***********************
  [TypeError: target.hasPointerCapture is not a function]

    window.PointerEvent = class PointerEvent extends Event {};
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
    window.HTMLElement.prototype.hasPointerCapture = vi.fn();
    window.HTMLElement.prototype.releasePointerCapture = vi.fn();


*/

import { render, screen } from '@testing-library/react'
import OrderStatusSelector from '../../src/components/OrderStatusSelector'
import { Theme } from '@radix-ui/themes' // #
import userEvent from '@testing-library/user-event'

// check console tab in test:ui
window.HTMLElement.prototype.scrollIntoView = vi.fn()
window.HTMLElement.prototype.hasPointerCapture = vi.fn()
window.HTMLElement.prototype.releasePointerCapture = vi.fn()

describe('OrderStatusSelector', () => {
  it('should render New as the default value', () => {
    const onChange = vi.fn()

    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    )

    const combobox = screen.getByRole('combobox')
    expect(combobox).toHaveTextContent(/new/i)
  })

  it('should render correct statuses', async () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    )

    // # role = combobox
    const combobox = screen.getByRole('combobox')

    const user = userEvent.setup()
    await user.click(combobox)

    // we don't have the options already -> need to find them asynchronously
    const options = screen.getAllByRole('option') // # solution 1
    // const options = await screen.findAllByRole('option') // # solution 2:
    expect(options).toHaveLength(3)

    const labels = options.map((option) => option.textContent)
    expect(labels).toEqual(['New', 'Processed', 'Fulfilled'])
  })
})
