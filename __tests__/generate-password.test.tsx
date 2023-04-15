import { generatePassword } from '../src/helpers/generate-password'

describe('generatePassword function', () => {
	test('should generate a password with the correct length and character types', () => {
		const password = generatePassword(12, true, true, true)
		const uppercaseRegex = /[A-Z]/
		const lowercaseRegex = /[a-z]/
		const digitRegex = /\d/
		const symbolRegex = /[!@#$%^&*()?":{}|<>]/
		expect(password.length).toEqual(12)
		expect(password).toEqual(expect.stringMatching(uppercaseRegex))
		expect(password).toEqual(expect.stringMatching(lowercaseRegex))
		expect(password).toEqual(expect.stringMatching(digitRegex))
		expect(password).toEqual(expect.stringMatching(symbolRegex))
	})

	test('should throw an error if the password length is less than 1', () => {
		const error = 'Password length must be greater than or equal to 1'

		expect(() => {
			generatePassword(0, false, false, false)
		}).toThrowError(error)
	})
})
