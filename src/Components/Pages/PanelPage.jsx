import React from 'react'
import Header from '../Layout/Header'
import LogoLD from '../UI/LogoLD'
import '../../SCSS/panelPage.scss';

const PanelPage = () => {
	return <>
		<Header />
		<div className="container py-4">
			<div className="row py-4">
				<div className="col-sm-6 offset-sm-3 py-4">
					<h4 className='text-center mb-4'>Sistema Análisis de Crédito</h4>
					<LogoLD fill='#E8ECFA' />
				</div>
			</div>
		</div>
	</>
}

export default PanelPage