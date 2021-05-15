const fetch = require('cross-fetch')

export const apiRequest = async (url, options) => {
  const results = await fetch(url, options)

  if (!results.ok) {
    throw new Error('Something went wrong')
  }

  const data = await results.json()

  return data
}
