import React, { FC, ReactElement, ReactNode } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './src/components/layout'
import '@testing-library/jest-dom/extend-expect'

interface CustomRenderOptions extends RenderOptions {
	withLayout?: boolean
}

interface WrapperProps {
	children: ReactNode
}

/**
 * exports a custom render function that wraps the component with ChakraProvider and Layout
 *
 * Now you can use this custom render function in your tests to wrap your components with the ChakraProvider and optionally with the Layout.
 * Here's an example of how to use it in a test:
 *
 * ```tsx
 * import { render, screen } from './test.utils';
 * import SomeComponent from '~/src/components/some-component'
 *
 * describe('SomeComponent', () => {
 *   it('renders with ChakraProvider and Layout', () => {
 *     render(<SomeComponent />, { withLayout: true })
 *     // Your test assertions here
 *   })
 *
 *   it('renders with ChakraProvider only', () => {
 *     render(<SomeComponent />)
 *     // Your test assertions here
 *   })
 * })
 * ```
 */
function customRender(
	ui: ReactElement,
	{ withLayout = false, ...options }: CustomRenderOptions = {}
) {
	const Wrapper: FC<WrapperProps> = ({ children }) => {
		const content = withLayout ? <Layout>{children}</Layout> : children
		return <ChakraProvider>{content}</ChakraProvider>
	}

	return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
