/*
  Exercise - Testing ToastDemo
  - to test ToastDemo component -> we need <Toaster /> from <react-hot-toast>


**********************
  - TypeError: matchMedia is not a function
    -> reason: our test is not running in the browser environment -> does not have "window.matchMedia"

  - Solution: setup.ts
  import { vi } from 'vitest';

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  });


*/

import { render, screen } from '@testing-library/react'
import ToastDemo from '../../src/components/ToastDemo'
import { Toaster } from 'react-hot-toast'
import userEvent from '@testing-library/user-event'

describe('ToastDemo', () => {
  it('should render a toast', async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    )

    const button = screen.getByRole('button')
    const user = userEvent.setup()
    await user.click(button)

    // need to use <await>
    const toast = await screen.findByText(/success/i)
    expect(toast).toBeInTheDocument()
  })
})
