//权限
import { asyncRouterMap } from '../../router'
function hasPermission(user_resources, route) {
    debugger
    if (route.meta && route.meta.title && !route.meta.whiteList) {
        const finds = user_resources.filter(user_resource => route.meta.title == user_resource.alias
            || route.meta.title == user_resource.group);
        route.meta.readOnly = finds.find(user_resource => user_resource.method == "write") ? false : true;
        return finds.length;
    } else {
        return true
    }
}

//递归过滤异步路由表，返回符合用户角色权限的路由表
function filterAsyncRouter(routes, user_resources) {
    debugger
    const res = []

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(user_resources, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRouter(tmp.children, user_resources)
            }
            res.push(tmp)
        }
    })

    return res
}

const permission = {
    state: {
        routers: [],
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = routers
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { user_resources } = data
                let accessedRouters = filterAsyncRouter(asyncRouterMap, user_resources)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission