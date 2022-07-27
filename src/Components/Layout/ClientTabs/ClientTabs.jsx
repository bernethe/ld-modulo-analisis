import React, { useState } from 'react'
import ClientTabs01 from './ClientTabs01';

const ClientTabs = ({serchedUser}) => {

	const [currentTab, setCurrentTab] = useState(0);

	const tabs = [
		{
			name: 'Datos',
			content: <ClientTabs01 serchedUser={serchedUser} />
		},
		{
			name: 'Teléfonos',
			content: <>Teléfonos</>
		},
		{
			name: 'Direcciones',
			content: <>Direcciones</>
		},
		{
			name: 'Adicionales',
			content: <>Adicionales</>
		},
		{
			name: 'Comentarios',
			content: <>Comentarios</>
		},
		{
			name: 'Artículos',
			content: <>Artículos</>
		},
		{
			name: 'Cuentas',
			content: <>Cuentas</>
		},
		{
			name: 'TransUnion',
			content: <>TransUnion</>
		},
		{
			name: 'CrediServer',
			content: <>CrediServer</>
		}
	];

    return <>
		<div className='tab-btns shadow-sm' style={ { marginTop: '0' } }>
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

export default ClientTabs