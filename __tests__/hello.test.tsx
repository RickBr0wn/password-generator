import { NextApiRequest, NextApiResponse } from 'next'
import handler from '~/pages/api/hello'
import '@testing-library/jest-dom/extend-expect'

describe('API Route: /api/hello', () => {
	it('returns the correct JSON response', () => {
		const req = {} as NextApiRequest
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as NextApiResponse

		handler(req, res)

		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith({ name: 'John Doe' })
	})
})
