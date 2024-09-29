/*
  Exercise - Testing ProductImageGallery


*/

import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
  it('should render nothing if given an empty array', () => {
    // render null -> need to use "container"
    const { container } = render(<ProductImageGallery imageUrls={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render a list of images', () => {
    const imageUrls = ['url1', 'url2']

    render(<ProductImageGallery imageUrls={imageUrls} />)

    const images = screen.getAllByRole('img') // <img/> tag
    expect(images).toHaveLength(2)
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url)
    })
  })
})
