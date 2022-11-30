import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from './pages/store'
import authSlice from './pages/store/authSlice';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: { auth: authSlice.reducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

/**
 * Test utils
 */

import { getMock } from "./pages/mocks";
const API_URL = 'https://localhost:3005/api/articles'
const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    console.log('test');
    return res(ctx.json(getMock.new_articles));
  }),
];

const server = setupServer(...handlers);
export { server, rest };

export { handlers };