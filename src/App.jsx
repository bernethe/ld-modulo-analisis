import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreditAnalysisPage from './Components/Pages/CreditAnalysisPage';
import CreditAnalysisDetailPage from './Components/Pages/CreditAnalysisDetailPage';
import HomePage from './Components/Pages/HomePage';
import PanelPage from './Components/Pages/PanelPage';
import ClientPage from './Components/Pages/ClientPage';

const App = () => {
	return <Router>
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/panel" element={<PanelPage />} />
			<Route exact path="/analisis-credito" element={<CreditAnalysisPage />} />
			<Route exact path="/analisis-credito-detalle/:id" element={<CreditAnalysisDetailPage />} />
			<Route exact path="/cliente" element={<ClientPage />} />
		</Routes>
	</Router>
}

export default App