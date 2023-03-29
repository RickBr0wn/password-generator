import { Flex, Spacer } from '@chakra-ui/react'
import type { FC } from 'react'
import ToggleLightDarkMode from './toggle-light-dark-mode'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (): JSX.Element => {
	return (
		<Flex as={'nav'} role={'navigation'} width={'100%'} padding={4} h={'80px'}>
			<Spacer />
			<ToggleLightDarkMode />
		</Flex>
	)
}

export default Navbar

// Path: src/components/navbar.tsx
// Created at: 21:56:36 - 28/03/2023
// Language: Typescript
// Framework: React/Next.js
