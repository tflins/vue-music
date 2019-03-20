import axios from 'axios'

export function login(userInfo) {
  const url = 'http://120.79.235.74:5000/api/users/login'

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
  const url = 'http://120.79.235.74:5000/api/users/register'

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
