import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
	it('renders Welcome component', () => {
		render(<Home />)
		const welcomeElement = screen.getByTestId('welcome')
		expect(welcomeElement).toBeInTheDocument()
	})
})
