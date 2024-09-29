import { render, screen, waitFor } from '@testing-library/react'
import TagList from '../../src/components/TagList'

describe('TagList', () => {
  // async
  it('should render tags', async () => {
    render(<TagList />)

    // Solution 1: findAllByRole -> without <await>, it will fail to get listItems
    // const listItems = await screen.findAllByRole('listitem')
    // expect(listItems.length).toBeGreaterThan(0) // listitem === <li>

    // Solution 2: getAllByRole -> no need <await>
    waitFor(() => {
      const listItems = screen.getAllByRole('listitem')
      expect(listItems.length).toBeGreaterThan(0)
    })
  })
})
