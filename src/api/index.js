// 包含多个接口请求函数的模块
import ajax from './ajax.js'
const base_path='/api'

// 1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax(base_path+`/position/`+geohash)
// 2、获取食品分类列表](#2获取食品分类列表)
export const reqCategorys=() => ajax(base_path+`/index_category`)
// 3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = ({latitude,longitude}) => ajax(base_path+`/shops`,{latitude,longitude})
// 4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqShopByKeyword = ({keyword,geohash}) => ajax(base_path+`/search_shops`,{keyword,geohash})
// 5、获取一次性验证码](#5获取一次性验证码)
export const reqCaptcha = () => ajax(base_path+`/captcha`)
// 6、用户名密码登陆](#6用户名密码登陆)
export const reqLoginPwd = (name,pwd,captcha) => ajax(base_path+`/login_pwd`,{name,pwd,captcha},'POST')
// 7、发送短信验证码](#7发送短信验证码)
export const reqSendcode = (phone) => ajax(base_path+`/sendcode`,{phone})
// 8、手机号验证码登陆](#8手机号验证码登陆)
export const reqLogSms = (phone,code)=> ajax(base_path+`/login_sms`,{phone,code},'POST')
// 9、根据会话获取用户信息](#9根据会话获取用户信息)
export const reqUserInfo = () => ajax(base_path+`/userinfo`)
// 10、用户登出](#10用户登出)
export const reqLogOut = () => ajax(base_path+`/logout`)