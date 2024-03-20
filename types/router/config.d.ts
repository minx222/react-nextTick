declare interface AppRouteRaw {
	path: string
	redirect?: boolean
	redirectPath?: string
	name?: string
	meta?: RouteMeta
	index?: false
	children?: AppRouteRaw[]
	element?: Component
}
