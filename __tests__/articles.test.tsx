import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils'
import ListPage from '../pages/articles/index.page'
import ArticlePage from '../pages/articles/[pid].page'

describe('Articles', () => {
  it('renders a list page', () => {
    renderWithProviders(<ListPage />)

    const heading = screen.getByRole('heading', {
      name: /Articles list/i,
    });

    expect(heading).toBeInTheDocument();
  })

  it('renders an article page', () => {
    renderWithProviders(<ArticlePage />)

    const heading = screen.getByRole('button', {name: 'back to list'});

    expect(heading).toBeInTheDocument();
  })

})