import { Children, useEffect, useRef, useState } from 'react'
import {
	Box,
	Button,
	Center,
	Checkbox,
	CheckboxGroup,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	SimpleGrid,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Stack,
	TagLabel,
	Text,
	useClipboard,
	useRadioGroup,
	useToast
} from '@chakra-ui/react'
import { generatePassword } from '~/helpers/generate-password'
import type { NextPage } from 'next'
import { Icon } from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
// import type { GetStaticProps } from 'next'
// import type { GetServerSideProps } from 'next'
// import type { GetStaticPaths } from 'next'
// import type { GetInitialProps } from 'next'

interface IndexProps {}

type PasswordStrength = 'weak' | 'medium' | 'strong' | 'god-like'

const Index: NextPage<IndexProps> = (): JSX.Element => {
	const [passwordLength, setPasswordLength] = useState(16)
	const [includeUppercase, setIncludeUppercase] = useState(true)
	const [includeNumbers, setIncludeNumbers] = useState(true)
	const [includeSymbols, setIncludeSymbols] = useState(true)
	const [showPassword, setShowPassword] = useState(true)
	const [startWithLetter, setStartWithLetter] = useState(false)
	const [password, setPassword] = useState('')
	const [hidden, setHidden] = useState('****************')
	const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('weak')

	const toast = useToast()


	const toastId = useRef<string | number>()

	const resetCheckboxes = () => {
		setIncludeNumbers(true)
		setIncludeSymbols(true)
		setIncludeUppercase(true)
		setStartWithLetter(false)
	}

	useEffect(() => {
		const createHidden = () => {
			let str = ''
			for (let i = 0; i < passwordLength; i++) {
				str += '*'
			}
			return str
		}

		const createStrength = () => {
			if (passwordLength > 20 && includeNumbers && includeSymbols && includeSymbols) {
				setPasswordStrength('god-like')
				return
			}
			if (passwordLength > 15 && includeNumbers && includeSymbols && includeSymbols) {
				setPasswordStrength('strong')
				return
			}
			if (
				passwordLength > 16 ||
				(passwordLength > 12 &&
					passwordLength < 16 &&
					includeNumbers &&
					includeSymbols &&
					includeSymbols)
			) {
				setPasswordStrength('medium')
				return
			}
			setPasswordStrength('weak')
			return
		}

		createStrength()
		setHidden(createHidden())
		setPassword(generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols))
	}, [includeNumbers, includeSymbols, includeUppercase, passwordLength])

	const selectedColor = () => {
		if (passwordStrength === 'weak') return 'red.300'
		if (passwordStrength === 'medium') return 'yellow.300'
		if (passwordStrength === 'strong') return 'green.300'
		if (passwordStrength === 'god-like') return 'green.300'
	}

	const handleCopyClick = () => {
		navigator.clipboard.writeText(password)

		if (toastId.current) {
			toast.update(toastId.current, {
				status: 'success',
				duration: 3000,
				isClosable: false,
				description: 'Password copied to clipboard!'
			})
		} else {
			toastId.current = toast({
				status: 'success',
				duration: 3000,
				isClosable: false,
				description: 'Password copied to clipboard!',
				onCloseComplete: () => {
					toastId.current = undefined
				}
			})
		}
	}

	return (
		<Flex flexDirection='column' alignItems='center'>
			<Heading
				size={{ base: '2xl', lg: '4xl' }}
				bgGradient='linear(to-r, green.200, green.400)'
				bgClip='text'
				h={{ base: 14, lg: 20 }}
				mb={8}
			>
				🔒 Safe Password Generator
			</Heading>
			{/* <Heading textAlign='center' mb={6}>
				🔐 Safe Password Generator
			</Heading> */}
			<Flex gap={6} mb={12}>
				<Heading textAlign='center'>{showPassword ? password : hidden}</Heading>
				<Icon
					onClick={() => setShowPassword(prev => !prev)}
					mt={3}
					as={showPassword ? FiEyeOff : FiEye}
					fontSize='xl'
					cursor='pointer'
					color='green.700'
				/>
			</Flex>
			<Container>
				<Flex justify='space-between'>
					<FormLabel>Password Length: {passwordLength}</FormLabel>
					<Flex>
						<FormLabel>Password Strength: </FormLabel>
						<Text
							fontWeight={passwordStrength === 'god-like' ? 'black' : 'bold'}
							color={selectedColor()}
						>
							{passwordStrength}
						</Text>
					</Flex>
				</Flex>
				<Slider
					min={4}
					max={32}
					defaultValue={passwordLength}
					aria-label='password-length-slider'
					value={passwordLength}
					onChange={setPasswordLength}
					colorScheme='green'
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
				<SimpleGrid spacing={5} mt={8} columns={2}>
					<Checkbox
						colorScheme='green'
						defaultChecked
						onChange={() => setIncludeUppercase(prev => !prev)}
					>
						Include uppercase characters
					</Checkbox>
					<Checkbox
						colorScheme='green'
						defaultChecked
						onChange={() => setIncludeNumbers(prev => !prev)}
					>
						Include numbers
					</Checkbox>
					<Checkbox
						colorScheme='green'
						defaultChecked
						onChange={() => setIncludeSymbols(prev => !prev)}
					>
						Include Symbols
					</Checkbox>
					<Checkbox
						onChange={() => setStartWithLetter(prev => !prev)}
						colorScheme='green'
						defaultChecked
					>
						Must start with a letter
					</Checkbox>
				</SimpleGrid>
				<Button
					onClick={() =>
						setPassword(
							generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols)
						)
					}
					textTransform='uppercase'
					mt={12}
					w='full'
					colorScheme='green'
				>
					Generate new password
				</Button>
				<Button
					onClick={handleCopyClick}
					textTransform='uppercase'
					mt={3}
					w='full'
					colorScheme='green'
				>
					Copy To Clipboard
				</Button>
				<Button
					onClick={resetCheckboxes}
					textTransform='uppercase'
					mt={3}
					w='full'
					colorScheme='green'
				>
					reset to defaults
				</Button>
			</Container>
		</Flex>
	)
}

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-static-props#context-parameter
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
 */
// export const getStaticProps: GetStaticProps<IndexProps> = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-return-values
 */
// export const getServerSideProps: GetServerSideProps = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

/**
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-return-values
 */
// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...asyncronous code
//   return {
//     paths: [
//       {
//         params: {
//           /* ...params */
//         }
//       } // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#paths
//     ],
//     fallback: true // true, false or 'blocking' // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
//   }
// }

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-initial-props#context-object
 */
// Index.getInitialProps = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

export default Index

// Path: src/pages/index.tsx
// Created at: 21:25:58 - 29/03/2023
// Language: Typescript
// Framework: React/Next.js
