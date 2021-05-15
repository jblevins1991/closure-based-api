import { apiRequest } from './apiRequest'

export const getJobs = async (hostname, port) => {
  return await apiRequest(`${hostname}:${port}/jobs`)
}

export const createJob = async (hostname, port) => {
  return (body) => {
    return await apiRequest(`${hostname}:${port}/jobs`, {
      method: 'POST',
      body: JSON.stringify(body)
    })
  }
}

export const updateJob = async (hostname, port) => {
  return (jobId,  body) => {
    return await apiRequest(`${hostname}:${port}/jobs/${jobId}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
  }
}

export const deleteJob = async (hostname, port) => {
  return (jobId) => {
    return await apiRequest(`${hostname}:${port}/jobs/${jobId}`, {
      method: 'DELETE'
    })
  }
}
