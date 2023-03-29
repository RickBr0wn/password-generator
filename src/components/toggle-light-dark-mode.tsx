import { useColorMode, IconButton } from '@chakra-ui/react'
import type { FC } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleLightDarkMode: FC = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			data-testid='toggle-light-dark-mode'
			icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
			onClick={toggleColorMode}
			variant='ghost'
			aria-label={'light/dark mode toggle switch'}
			aria-checked={colorMode === 'light'}
			role={'switch'}
		/>
	)
}

export default ToggleLightDarkMode

// Path: src/components/toggle-light-dark-mode.tsx
// Created at: 21:52:38 - 28/03/2023
// Language: Typescript
// Framework: React/Next.js
