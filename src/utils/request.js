import axios from 'axios'
// import Cookie from 'js-cookie'

// const baseURL = 'http://localhost:8000'
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'
// http请求
const axiosRequest = (opts, baseURL) => {
  // 公共参数
  const publicParams = {
    // ts: Date.now()
  }

  // http默认配置
  const method = opts.method.toUpperCase()
  // baseURL
  // 开发环境： /api                 // 开发环境在 vue.config.js 中有 devServer.proxy 代理
  // 生产环境： http://IP:PORT/api   // 生产环境中 代理失效， 故需要配置绝对路径
  const httpDefaultOpts = {
    method,
    // baseURL: baseURL || process.env.VUE_APP_API_BASE_URL + path,
    url: opts.url,
    responseType: opts.responseType || '',
    // timeout: 600000,
  }
  if (opts.headers) {
    httpDefaultOpts.headers = opts.headers
  }
  if (opts.baseURL) {
    httpDefaultOpts.baseURL = opts.baseURL
  }
  if (opts.onUploadProgress) {
    httpDefaultOpts.onUploadProgress = opts.onUploadProgress
  }
  const dataRequest = ['PUT', 'POST', 'PATCH', 'DELETE']
  if (dataRequest.includes(method)) {
    httpDefaultOpts.data = opts.data || {}
    if (opts.params !== null && opts.params !== undefined) {
      httpDefaultOpts.params = {
        ...publicParams,
        ...opts.params,
      }
    }
  } else {
    httpDefaultOpts.params = {
      ...publicParams,
      ...(opts.params || opts.data),
    }
  }

  // formData转换
  if (opts.formData) {
    httpDefaultOpts.transformRequest = [
      data => {
        const formData = new FormData()
        if (data) {
          Object.entries(data).forEach(item => {
            formData.append(item[0], item[1])
          })
        }
        return formData
      },
    ]
  }

  const promise = new Promise((resolve, reject) => {
    console.log(httpDefaultOpts)
    axios(httpDefaultOpts)
      .then(response => {
        console.log(response, resolve, opts)
      })
      .catch(error => {
        console.log(error, reject, opts)
      })
  })
  return promise
}

export {
  axiosRequest,
}
