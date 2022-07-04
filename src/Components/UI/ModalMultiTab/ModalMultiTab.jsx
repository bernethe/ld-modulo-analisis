import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../../SCSS/modal.scss';
import '../../../SCSS/creditAnalysisDetailTabs.scss';

const ModalMultiTab = ({title, setClose, tabData}) => {

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
			<div className='tab-btns tab-btns-nomargintop shadow-sm'>
				<div className='container my-4'>
					<div className='row'>
						<div className='col text-center'>
							<ul className='list-inline'>
							{
								tabData.map((tab, index) => {
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
			<div className="modal-body">
				<div className='container'>
					{ tabData[currentTab].content }
				</div>
			</div>
		</div>
	</div>
}

export default ModalMultiTab