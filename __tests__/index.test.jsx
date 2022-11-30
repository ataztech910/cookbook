import React from 'react'
import { screen } from '@testing-library/react'
import Home from '../pages/index.page'
import { renderWithProviders } from '../utils'
 
describe('Home', () => {
  it('renders a heading', () => {
    renderWithProviders(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello there ! This is the main page of CookBook/i,
    })

    expect(heading).toBeInTheDocument()
  })
})