import React, { useEffect, useRef } from 'react'
import styled from './index.module.less'

const Home: React.FC = () => {
	const container = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!container.current) {
			return
		}
		container.current.style.height = 'auto'
		const copyHeight = container.current.clientHeight
		container.current.style.height = '0px'
		// 触发渲染事件
		container.current.offsetHeight
		container.current!.style.height = `${copyHeight}px`
	}, [])
	return (
		<div ref={container} className={styled['container']}>
			<div className='item'>1</div>
			<div className='item'>2</div>
			<div className='item'>3</div>
			<div className='item'>4</div>
		</div>
	)
}

export default Home
