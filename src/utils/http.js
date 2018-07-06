import axios from 'axios'
import qs from 'qs'

const config = {
  pimHost() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://192.168.20.3:28810'
    } else if (process.env.NODE_ENV === 'office') {
      return 'http://rest.pim.devmq.top'
    } else if (process.env.NODE_ENV === 'production') {
      return 'http://192.168.20.3:28810'
    }
    return 'http://192.168.20.3:18810'
  },
  crmHost() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://192.168.20.3:25510'
    } else if (process.env.NODE_ENV === 'office') {
      return 'http://rest.crm.devmq.top/'
    } else if (process.env.NODE_ENV === 'production') {
      return 'https://ncrmrest.manqian.cn/'
    }
    return 'http://192.168.20.3:25510'
  },
  timeout: 10000,
}

function matchDomain(path) {
  const ret = path.split('@')
  if (ret.length === 2) {
    if (ret[0].toLowerCase() === 'pim') {
      return config.pimHost() + ret[1]
    } else if (ret[0].toLowerCase() === 'crm') {
      return config.crmHost() + ret[1]
    }
  }
  return config.crmHost
}

export function post(path, data) {
  return axios({
    method: 'post',
    url: matchDomain(path),
    data: qs.stringify(data),
    timeout: config.timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })
}

export function get(path, params) {
  return axios({
    method: 'get',
    url: matchDomain(path),
    params, // get 请求时带的参数
    timeout: config.timeout,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
}

export default function (Vue) {
  axios.interceptors.response.use(
    (res) => {
      Vue.$vux.loading.hide()
      if (!res.data.status === 200) {
        Vue.$vux.toast.show({
          text: '网络连接不顺畅',
          type: 'text',
          position: 'middle',
        })
        return Promise.reject(res)
      }
      return res
    },
    (error) => {
      Vue.$vux.loading.hide()
      Vue.$vux.toast.show({
        text: '网络连接不顺畅',
        type: 'text',
        position: 'middle',
      })
      return Promise.reject(error)
    },
  )
}
