interface Result {
	code: number
	msg: string
}

// * 请求响应参数(包含data)
declare interface ResultData<T = any> extends Result {
	data: T
}
