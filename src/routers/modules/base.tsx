import NOtFound from '@pages/404'
import Home from '@pages/home'
import LoginPage from '@pages/login'

import Layout from '@/layout/Layout'

export const BaseRouters: AppRouteRaw[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '*',
		redirect: true,
	},
	{
		path: '/404',
		element: NOtFound,
	},
]
