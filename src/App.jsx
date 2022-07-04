import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreditAnalysisPage from './Components/Pages/CreditAnalysisPage';
import CreditAnalysisDetailPage from './Components/Pages/CreditAnalysisDetailPage';
import HomePage from './Components/Pages/HomePage';
import PanelPage from './Components/Pages/PanelPage';

const App = () => {
    return <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/panel" element={<PanelPage />} />
            <Route exact path="/analisis-credito" element={<CreditAnalysisPage />} />
            <Route exact path="/analisis-credito-detalle/:id" element={<CreditAnalysisDetailPage />} />
        </Routes>
    </Router>
}

export default App