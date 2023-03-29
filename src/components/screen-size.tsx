import { Heading } from '@chakra-ui/react'
import type { FC } from 'react'

export type ScreenSizeLocation =
	| 'top-left'
	| 'top-middle'
	| 'top-right'
	| 'middle-left'
	| 'middle'
	| 'middle-right'
	| 'bottom-left'
	| 'bottom-middle'
	| 'bottom-right'

const ScreenSize: FC = (): JSX.Element => {
	return (
		<>
			<Heading
				position={'absolute'}
				// top={0}
				top={4}
				left='50%'
				// right={0}
				visibility={{ base: 'visible', sm: 'hidden', '2xl': 'hidden' }}
			>
				BASE
			</Heading>
			<Heading
				position={'absolute'}
				top={4}
				left='50%'
				visibility={{ base: 'hidden', sm: 'visible', md: 'hidden', '2xl': 'hidden' }}
				zIndex={1000}
			>
				SM
			</Heading>
			<Heading
				position={'absolute'}
				top={4}
				left='50%'
				visibility={{ base: 'hidden', md: 'visible', lg: 'hidden', '2xl': 'hidden' }}
				zIndex={1000}
			>
				MD
			</Heading>
			<Heading
				position={'absolute'}
				top={4}
				left='50%'
				visibility={{ base: 'hidden', lg: 'visible', xl: 'hidden', '2xl': 'hidden' }}
				zIndex={1000}
			>
				LG
			</Heading>
			<Heading
				position={'absolute'}
				top={4}
				left='50%'
				visibility={{ base: 'hidden', xl: 'visible', '2xl': 'hidden' }}
				zIndex={1000}
			>
				XL
			</Heading>
			<Heading
				position={'absolute'}
				top={4}
				left='50%'
				visibility={{ base: 'hidden', '2xl': 'visible' }}
				zIndex={1000}
			>
				2XL
			</Heading>
		</>
	)
}

export default ScreenSize

// Path: src/components/screen-size.tsx
// Created at: 19:23:55 - 29/03/2023
// Language: Typescript
// Framework: React/Next.js
