export const generatePassword = (
	length: number,
	includeUppercase: boolean,
	includeNumbers: boolean,
	includeSymbols: boolean
) => {
	const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
	const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numberChars = '0123456789'
	const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='

	let selectedChars = lowercaseChars

	if (includeUppercase) selectedChars += uppercaseChars
	if (includeNumbers) selectedChars += numberChars
	if (includeSymbols) selectedChars += symbolChars

	let password = ''

	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * selectedChars.length)
		password += selectedChars[randomIndex]
	}

	return password
}
