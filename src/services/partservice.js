import Api from '@/services/api'

export default {
  fetchParts () {
    return Api().get('/parts')
  }
}
