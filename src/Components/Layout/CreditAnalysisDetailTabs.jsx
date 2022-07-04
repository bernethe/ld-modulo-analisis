import React, {useState} from 'react';
import '../../SCSS/creditAnalysisDetailTabs.scss';
import CreditAnalysisDetailTabs01 from './CreditAnalysisDetailTabs/CreditAnalysisDetailTabs01';
import CreditAnalysisDetailTabs02 from './CreditAnalysisDetailTabs/CreditAnalysisDetailTabs02';

const CreditAnalysisDetailTabs = ({userID}) => {

	const [currentTab, setCurrentTab] = useState(0);

	const tabs = [
		{
			name: 'Resumen',
			content: <CreditAnalysisDetailTabs01 userID={userID} />
		},
		{
			name: 'Detalle de Preventa',
			content: <CreditAnalysisDetailTabs02 userID={userID} />
		},
		{
			name: 'Datos Cuenta',
			content: <>Hola Datos Cuenta</>
		},
		{
			name: 'Datos CrediServer',
			content: <>Hola Datos CrediServer</>
		},
		{
			name: 'Datos TransUnion',
			content: <>Hola Datos TransUnion</>
		}
	];

	return <>
		<div className='tab-btns shadow-sm'>
			<div className='container my-4'>
				<div className='row'>
					<div className='col text-center'>
						<ul className='list-inline'>
						{
							tabs.map((tab, index) => {
								return <li className={`list-inline-item ${currentTab === index ? 'active' : ''}`} key={index}>
									<button onClick={() => setCurrentTab(index)}>{tab.name}</button>
								</li>
							})
						}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className='container'>
			{ tabs[currentTab].content }
		</div>
	</>
}

export default CreditAnalysisDetailTabs