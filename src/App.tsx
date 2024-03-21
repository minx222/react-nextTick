import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { Provider } from 'react-redux'

import AppRouter from '@/routers'
import stores from '@/stores'

const App = () => (
	<ConfigProvider locale={zhCN}>
		<Provider store={stores}>
			<AppRouter />
		</Provider>
	</ConfigProvider>
)

export default App
