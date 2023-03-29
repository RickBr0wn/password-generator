import { render } from '../test-utils'
import Layout from '../src/components/layout'
import { screen } from '@testing-library/react'

describe('Layout component', () => {
	it('renders with children, title, and meta tags', async () => {
		const testContent = 'Test content'
		render(<Layout>{testContent}</Layout>)

		// Check if the test content is rendered
		expect(screen.getByText(testContent)).toBeInTheDocument()

		// Check if the layout container is rendered
		const layoutContainer = screen.getByTestId('layout')
		expect(layoutContainer).toBeInTheDocument()

		// Check if the Navbar is rendered
		const navbar = screen.getByRole('navigation')
		expect(navbar).toBeInTheDocument()
		expect(navbar).toHaveStyle('height: 80px;')
	})
})
