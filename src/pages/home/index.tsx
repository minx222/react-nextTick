import React, { useEffect, useRef, useState } from 'react'
import styled from './index.module.less'
import _ from 'lodash'
import { useMemoizedFn } from 'ahooks'

const Home: React.FC = () => {
	const container = useRef<HTMLDivElement>({} as HTMLDivElement)

	const [data, setData] = useState<Array<number>>(Array.from({ length: 3 }, (i, j) => j + 1))
	const [open, setOpen] = useState(true)

	useEffect(() => {
		// 获取div的计算样式
		const styles = window.getComputedStyle(container.current)
		console.log(
			'%c 当前列表数据长度 / DOM数量',
			'background: green;color:white;padding: 0 4px;',
			data.length,
			container.current.children.length,
		)

		// Calculate the height of the container based on its children
		let height = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom)
		for (let i = 0; i < container.current.children.length; i++) {
			height += container.current.children[i].clientHeight
		}
		container.current.style.height = open ? `${height}px` : '0px'
	}, [data, open])

	const add = useMemoizedFn((event: any) => {
		event?.stopPropagation()
		event?.preventDefault()
		setData((list) => {
			list.push(list?.[list.length - 1] + 1 || 1)
			return _.cloneDeep(list)
		})
	})

	const toggle = useMemoizedFn((event: any) => {
		event?.stopPropagation()
		event?.preventDefault()
		setOpen((o) => !o)
	})

	const remove = useMemoizedFn((index) => {
		setData((list) => {
			return list.filter((i) => i !== index)
		})
	})

	return (
		<div>
			<button onClick={add}>add</button>
			<button onClick={toggle}>open</button>
			<div ref={container} className={styled.container}>
				{open
					? data.map((i) => (
							<div key={i} className='item'>
								{i}
								<button onClick={() => remove(i)}>移除</button>
							</div>
					  ))
					: null}
			</div>
		</div>
	)
}

export default Home
