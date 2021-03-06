import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS
} from './mutation_types.js'

import {
    reqAddress,
    reqCategorys,
    reqShops,
    reqUserInfo,
    reqLogOut,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo
} from '../api/index.js'
export default{
    //异步获取位置信息
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude
        const result =await reqAddress(geohash)
        if(result.code===0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取商品种类
    async getCategorys({commit}){
        const result =await reqCategorys()
        if(result.code===0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    //异步获取商家信息
    async getShops({commit,state}){
        const {longitude,latitude}=state
        const result =await reqShops(longitude,latitude)
        if(result.code===0){
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    //同步记录用户信息
    recordUserInfo({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    //异步获取用户信息
    async getUserInfo({commit}){
        const result=await reqUserInfo()
        if(result.code===0){
            const userInfo=result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    //异步退出登录
    async logout({commit}){
        const result=await reqLogOut()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    async getShopGoods({commit}){
        const result=await reqShopGoods()
        if(result.code===0){
            const goods=result.data
            commit(RECEIVE_GOODS,{goods})
        }
    },
    async getShopRatings({commit}){
        const result=await reqShopRatings()
        if(result.code===0){
            const ratings=result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    },
    async getShopInfo({commit}){
        const result=await reqShopInfo()
        if(result.code===0){
            const info=result.data
            commit(RECEIVE_INFO,{info})
        }
    },
}