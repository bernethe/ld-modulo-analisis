import React, { useState } from 'react'
import DataClientSelect01 from '../DataClientSelect/DataClientSelect01';

const CreditAnalysisDetailTabs03 = ({userID}) => {

	const [currentTab, setCurrentTab] = useState(0);

	const clientDataTabs = [
		{
			name:'Cliente',
			content: <DataClientSelect01 userID={userID} />
		},
		{
			name:'Teléfono y direcciones',
			content: <>Hola Teléfono y direcciones</>
		},
		{
			name: 'Datos adicionales',
			content: <>Hola Datos adicionales</>
		},
		{
			name:'Artículos',
			content: <>Hola Artículos</>
		},
		{
			name:'Comentarios',
			content: <>Hola Comentarios</>
		}
	];

	return <>
		<div className='row mb-4'>
			<div className='col'>
				<label>
					<select className='form-select' defaultValue={ currentTab } onChange={ (e) => setCurrentTab(e.target.selectedIndex)}>{
						clientDataTabs.map((item, index) => {
							return <option key={index}>{item.name}</option>
						})
					}</select>
				</label>
			</div>
		</div>
		{
			clientDataTabs[currentTab].content
		}
	</>
}

export default CreditAnalysisDetailTabs03