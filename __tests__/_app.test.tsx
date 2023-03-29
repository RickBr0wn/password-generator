import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import App from '../src/pages/_app'

jest.mock('../src/components/layout', () => ({
	__esModule: true,
	default: ({ children }: { children: ReactNode }) => <div>{children}</div>
}))

const TestComponent = () => <div>Test Component</div>

const mockRouter = {
	basePath: '',
	pathname: '/',
	route: '/',
	asPath: '/',
	query: {},
	push: jest.fn(),
	replace: jest.fn(),
	reload: jest.fn(),
	back: jest.fn(),
	prefetch: jest.fn(),
	beforePopState: jest.fn(),
	events: {
		on: jest.fn(),
		off: jest.fn(),
		emit: jest.fn()
	},
	isFallback: false
}

describe('App', () => {
	it('renders the app with the provided component and page props', () => {
		const pageProps = {}
		render(<App Component={TestComponent} pageProps={pageProps} router={mockRouter as any} />)
		expect(screen.getByText('Test Component')).toBeInTheDocument()
	})
})
