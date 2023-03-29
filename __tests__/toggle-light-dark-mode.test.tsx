import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ChakraProvider } from '@chakra-ui/react'
import ToggleLightDarkMode from '../src/components/toggle-light-dark-mode' // Make sure to import the ToggleLightDarkMode component from the correct file

describe('ToggleLightDarkMode', () => {
	it('renders the ToggleLightDarkMode component', () => {
		render(
			<ChakraProvider>
				<ToggleLightDarkMode />
			</ChakraProvider>
		)

		// Check if the IconButton element with the role "switch" is rendered
		const toggleButton = screen.getByRole('switch')
		expect(toggleButton).toBeInTheDocument()
	})

	it('toggles the color mode on click', () => {
		render(
			<ChakraProvider>
				<ToggleLightDarkMode />
			</ChakraProvider>
		)

		const toggleButton = screen.getByRole('switch')
		const initialColorMode = toggleButton.getAttribute('aria-checked')

		// Click the toggle button
		fireEvent.click(toggleButton)

		// Check if the color mode has changed
		const newColorMode = toggleButton.getAttribute('aria-checked')
		expect(newColorMode).not.toBe(initialColorMode)
	})
})
