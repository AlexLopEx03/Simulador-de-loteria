import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
function App() {

	return (
		<>
			<Routes>
				<Route path="/simulador-de-loteria/" element={<HomePage />} />
				{/*<Route path="/datos" element={<DatosPage />} />*/}
			</Routes>
		</>
	)
}

export default App
