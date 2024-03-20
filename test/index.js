const findRouterTree = (path, routerArr) => {
    for (const router of routerArr) {
        if(router.path === path) {
            return router;
        }
        if(router.children) {
            const find = findRouterTree(path, router.children)
            if(find) return find
        }
    }
    return null
}

const rou = [
    {
        path: '/',
        children: [
          {
            path: 'home',
          }
        ]
    },
    {
        path: '/login',
        children: [
          {
            path: 'login',
          }
        ]
    }
]

console.log(findRouterTree('login', rou))