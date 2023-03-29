import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../src/components/navbar' // Make sure to import the Navbar component from the correct file

describe('Navbar', () => {
	it('renders the Navbar component', () => {
		render(<Navbar />)

		// Check if the nav element with the role "navigation" is rendered
		const navElement = screen.getByRole('navigation')
		expect(navElement).toBeInTheDocument()

		// Check if the ToggleLightDarkMode component is rendered
		const toggleLightDarkModeElement = screen.getByTestId('toggle-light-dark-mode')
		expect(toggleLightDarkModeElement).toBeInTheDocument()
	})
})
