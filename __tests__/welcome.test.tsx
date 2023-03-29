import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Welcome from '../src/components/welcome'
import { render } from '../test-utils'

describe('Welcome component', () => {
	it('renders the welcome headings', () => {
		render(<Welcome />)

		const heading1 = screen.getByText(/next.js typescript testing kit/i)
		const heading2 = screen.getByText(/with/i)
		const heading3 = screen.getByText(/chakra ui/i)
		expect(heading1).toBeInTheDocument()
		expect(heading2).toBeInTheDocument()
		expect(heading3).toBeInTheDocument()
	})

	it('should render the layout', () => {
		render(<Welcome />, { withLayout: true })
		const toggle = screen.getByTestId('toggle-light-dark-mode')
		expect(toggle).toBeInTheDocument()
	})

	it('renders the "Get started by editing" text', () => {
		render(<Welcome />)
		const getStartedText = screen.getByText(/Get started by editing:/i)
		expect(getStartedText).toBeInTheDocument()
	})

	it('renders the code components with correct file names', () => {
		render(<Welcome />)
		const codeComponents = screen.getAllByTestId('code-component')
		const fileNames = [
			'~/src/pages/index.tsx',
			'~/src/theme/theme.ts',
			'~/src/components/Layout.tsx',
			'~/src/components/Welcome.tsx',
			'~/src/components/Navbar.tsx'
		]
		codeComponents.forEach((codeComponent, index) => {
			expect(codeComponent).toHaveTextContent(fileNames[index])
		})
	})

	it('renders the "Enjoy!" text', () => {
		render(<Welcome />)
		const enjoyText = screen.getByText(/Enjoy!/i)
		expect(enjoyText).toBeInTheDocument()
	})

	it('renders the rocket emoji', () => {
		render(<Welcome />)
		const rocketEmoji = screen.getByText(/🚀/i)
		expect(rocketEmoji).toBeInTheDocument()
	})
})
