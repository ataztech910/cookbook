import '@testing-library/jest-dom/extend-expect'

import { server } from './utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());