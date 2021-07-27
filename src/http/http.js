
import axios from "axios";
axios.defaults.timeout = 5000; // 请求超时
// axios.defaults.baseURL = "panhuaqing.cn:5000/api"; // 增加请求默认路径前缀
axios.defaults.baseURL = "/api"; // 增加请求默认路径前缀
 
export default {
  /**
   * get 请求
   * @param url 接口路由
   * @returns {AxiosPromise<any>}
   */
  get(url, params, headers) {
    let options = {};
 
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.get(url, options);
  },
 
  /**
   * post 请求
   *
   * @param url 接口路由
   * @param params 接口参数
   * @returns {AxiosPromise<any>}
   */
  post(url, headers, data) {
    let options = {};
 
    if (headers) {
      options.headers = headers;
    }
    return axios.post(url, data, options);
  }
};
