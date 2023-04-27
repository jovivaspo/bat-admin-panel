import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../src/App'
describe('App', () => {
  test('should render app', () => {
    render(<App/>)
    expect(screen.getByText(/app/i)).toBeInTheDocument()
  })
})
