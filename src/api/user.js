import axios from 'axios'

export function login(userInfo) {
  const url = 'http://localhost:5000/api/users/login'

  const data = Object.assign({}, userInfo)

  return axios
    .post(url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

export function register(userInfo) {
  const url = 'http://localhost:5000/api/users/register'

  const data = Object.assign({}, userInfo)

  return axios
    .post(url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

export function createSongList(songListData) {
  const url = 'http://localhost:5000/api/users/createsonglist'

  const data = Object.assign({}, songListData)

  return axios
    .post(url, data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

export function current() {
  const url = 'http://localhost:5000/api/users/current'

  return axios
    .get(url, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

export function getsonglist() {
  const url = 'http://localhost:5000/api/users/getsonglist'

  return axios
    .get(url, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}
