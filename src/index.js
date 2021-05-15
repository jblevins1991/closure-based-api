import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from './jobs'

const api = (hostname, port) => {
  return {
    getJobs: getJobs(hostname, port),
    createJob: createJob(hostname, port),
    updateJob: updateJob(hostname, port),
    deleteJob: deleteJob(hostname, port),
  }
}

export default api
