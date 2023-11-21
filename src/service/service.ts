import axios from 'axios'
import { useStore } from '@STORE/main';
const store = useStore();

const service = axios.create({
  // domain
  baseURL: '123-456-789',
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    patch: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    delete: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
})
// axios攔截器 - 請求
const requestInterceptor = (config:any) => {
  config.timeout = 5000
  return config;
};
// axios攔截器 - 請求失敗
const requestInterceptorError = error => {
  return Promise.reject(error);
};

// axios攔截器 - 回應
const responseInterceptor = response => {
  const res = response.data
  const status = response.status
  // http status狀態判斷
  if (status !== 200 && status !== 201) {
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
};

// axios攔截器 - 回應失敗
const responseInterceptorError = error => {
  store.isNotificationChange(true);
  store.NotificationMessageChange(error.response.data?.message)
  return Promise.reject(error);
};

service.interceptors.request.use(requestInterceptor, requestInterceptorError);
service.interceptors.response.use(responseInterceptor, responseInterceptorError);

class Service {
}

export default new Service()