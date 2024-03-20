import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { BaseRouters } from './modules/base'

const routerList: AppRouteRaw[] = []
routerList.push(...BaseRouters)
const AppRouter = () => <RouterProvider router={createBrowserRouter([...BaseRouters])}></RouterProvider>
export default AppRouter
