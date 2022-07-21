import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../../SCSS/modal.scss';
import '../../../SCSS/creditAnalysisDetailTabs.scss';

const ModalMultiTab = ({title, setClose, tabData}) => {

	const [currentDropDown, setCurrentDropDown] = useState(0);
	const [currentTab, setCurrentTab] = useState(0);

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, []);
	
	return <div className='modal-ld' onClick={ () => setClose(false) }>
		<div className="modal-window modal-window-tabs" onClick={ e => e.stopPropagation() }>
			<div className="modal-header position-relative">
				<h3>{title}</h3>
				<button className='btn position-absolute top-0 end-0' onClick={() => setClose(false)}>
					<FaTimes className='text-muted' />
				</button>
			</div>
			<div>
				<label style={ { maxWidth: '500px' } }>
					<select className='form-select' value={ currentDropDown } onChange={ (e) => {setCurrentTab(0);setCurrentDropDown(e.target.selectedIndex)} } >{
						tabData.map((tab, index) => <option key={index} value={index}>{tab.name}</option>)
					}</select>
				</label>
			</div>
			{
				tabData[currentDropDown].tabs.length > 1 && <div className='tab-btns tab-btns-nomargintop shadow-sm'>
					<div className='container my-4'>
						<div className='row'>
							<div className='col text-center'>
								<ul className='list-inline'>
								{
									tabData[currentDropDown].tabs.map((tab, index) => {
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
			}
			<div className="modal-body">
				<div className='container'>
					{ tabData[currentDropDown].tabs[currentTab].content }
				</div>
			</div>
		</div>
	</div>
}

export default ModalMultiTab