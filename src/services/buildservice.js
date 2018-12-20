import Api from '@/services/api'

export default {
  fetchBuilds () {
    return Api().get('/builds')
  },
  fetchBuild (id) {
    return Api().get(`/builds/${id}`)
  },
  putCPU (id, partId) {
    return Api().put(`/builds/${id}/partsCPU/${partId}`,
      { headers: {'Content-type': 'application/json'} })
  },
  putGPU (id, partId) {
    return Api().put(`/builds/${id}/partsGPU/${partId}`,
      { headers: {'Content-type': 'application/json'} })
  },
  putRAM (id, partId) {
    return Api().put(`/builds/${id}/partsRAM/${partId}`,
      { headers: {'Content-type': 'application/json'} })
  },
  putStorage (id, partId) {
    return Api().put(`/builds/${id}/partsStorage/${partId}`,
      { headers: {'Content-type': 'application/json'} })
  },
  putOS (id, partId) {
    return Api().put(`/builds/${id}/partsOS/${partId}`,
      { headers: {'Content-type': 'application/json'} })
  },
  postBuild (build) {
    return Api().post('/builds', build,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteBuild (id) {
    return Api().put(`/builds/${id}/vote`)
  },
  deleteBuild (id) {
    return Api().delete(`/builds/${id}`)
  }
}
