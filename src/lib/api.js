const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1900/api/v1'

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function post(path, body) {
  let res
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (err) {
    console.error(`[api] POST ${path} failed before a response was received — likely the server is down or CORS is blocking the browser (check the DevTools console for a CORS message; curl bypasses CORS so it won't reproduce this).`, err)
    throw new ApiError('Could not reach the server — please try again shortly.')
  }

  let data = null
  try { data = await res.json() } catch { /* empty/non-JSON response */ }

  if (!res.ok) {
    throw new ApiError(data?.message || 'Something went wrong. Please try again.', res.status)
  }

  return data
}

export const submitContact = (payload) => post('/contact', payload)
export const submitAboutUs = (payload) => post('/about-us', payload)
export const submitPartnerProgram = (payload) => post('/partner-program', payload)
export const submitPartnerAgent = (payload) => post('/partner-agent', payload)
export const submitCareers = (payload) => post('/careers', payload)
