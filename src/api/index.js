// 包含多个接口请求函数的模块
import ajax from './ajax.js'

export const reqAddress =(geohash)=>ajax(`/position/${geohash}` )