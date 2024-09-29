/*
  Testing Async Code
  - <getBy..>.: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).
  - <findAllBy...>: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
    -> <findBy> methods are a combination of <getBy*> queries and <waitFor>. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))


*/

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
