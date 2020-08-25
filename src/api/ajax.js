/*
* ajax请求函数模块
* 返回值：promise对象(异步返回的数据是：response.data)
* resolve() reject()是接收函数的函数，叫高阶函数
* axios来使用ajax请求
* promise.then()  不明白
* promise.catch()  不明白
* 对于项目的ajax.js的内容不明白，axios的使用，promise的讲解，await的具体使用，只知道await是等待后面的代码执行完成之后，传上来await后面的值
*
* */
import axios from 'axios'
export default function ajax (url,data={},type='GET'){
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}
