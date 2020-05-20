import routes from './router/index'

let userRole;

export default function init_routeMenu(role) {
    debugger
    userRole = role
    let listaa = routes
    listaa = listaa.options.routes
    let zuihoulist = get_routeMenu(listaa)
    debugger
    return zuihoulist
}

function get_routeMenu(routes) {
  debugger
  console.log(routes,userRole)
  let menuList = []
  let routeList = []
  for (let i = 0; i < routes.length; i++) {
    debugger
    if (routes[i].children) {
        let temp = get_routeMenu(routes[i].children)
        if (temp.menuList.length > 0) {
            menuList.push({
                title: routes[i].meta.title,
                icon: routes[i].meta.icon,
                children: temp.menuList
            })
            routeList = routeList.concat(temp.routeList)
        }
    } else {
        let cc = routes[i].meta.roles.indexOf(userRole)
      if (routes[i].meta.roles.indexOf(userRole) > -1) {
        menuList.push({
          title: routes[i].meta.title,
          name: routes[i].name,
          icon: routes[i].meta.icon
        })
        routeList.push(routes[i])
      }
    }
  }
  return {
    menuList,
    routeList
  }
}
