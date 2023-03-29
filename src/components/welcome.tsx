import { Flex, Spacer, Heading, Code, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import ScreenSize from './screen-size'

const Welcome: FC = (): JSX.Element => {
	return (
		<Flex data-testid='welcome' flexDir={'column'} align={'center'} h={'calc(100vh - 80px)'}>
			{/* 80px is the height of the navbar */}
			<Spacer />
			{/* for dev purposes only - remove in production */}
			{/* <ScreenSize /> */}
			{/* <Heading size='4xl'>Welcome to this</Heading> */}
			<Heading
				size={{ base: '2xl', lg: '4xl' }}
				bgGradient='linear(to-t, green.200, green.400)'
				bgClip='text'
				h={{ base: 14, lg: 20 }}
			>
				Next.js TypeScript Testing Kit
			</Heading>
			<Flex gap={2} align='center'>
				<Heading size={{ base: 'lg', lg: '2xl' }}>with </Heading>
				<Heading
					size={{ base: 'xl', lg: '3xl' }}
					bgGradient='linear(to-b, green.200, green.400)'
					bgClip='text'
				>
					Chakra UI
				</Heading>
			</Flex>
			<Flex flexDir={'column'} align={'center'} margin={'20px 0'} gap={1}>
				<Text mb={4}>Get started by editing:</Text>
				<Code data-testid='code-component'>~/src/pages/index.tsx</Code>
				<Code data-testid='code-component'>~/src/theme/theme.ts</Code>
				<Code data-testid='code-component'>~/src/components/Layout.tsx</Code>
				<Code data-testid='code-component'>~/src/components/Welcome.tsx</Code>
				<Code data-testid='code-component'>~/src/components/Navbar.tsx</Code>
			</Flex>
			<Text>Enjoy!</Text>
			<Heading mt={6}>🚀</Heading>
			<Spacer />
		</Flex>
	)
}

export default Welcome

// Path: src/components/welcome.tsx
// Created at: 21:38:10 - 28/03/2023
// Language: Typescript
// Framework: React/Next.js
