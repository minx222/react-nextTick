import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout: React.FC = () => {
	const nav = useNavigate()
	useEffect(() => {
		nav('/home')
	}, [nav])
	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Layout
