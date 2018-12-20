import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://pc-builder-web-app.herokuapp.com/'
  })
}
