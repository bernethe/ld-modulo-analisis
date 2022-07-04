import React from 'react';
import {FiCheck,FiTrash2,FiEdit3,FiRotateCcw} from 'react-icons/fi';
import {IoWarningOutline} from 'react-icons/io5';

const ShadowMenuAnalysisDetail = ({userID}) => {

	return <div className='p-2 shadow-sm mb-4'>
		<div className='container'>
			<div className='row'>
				<div className='col text-center'>
					<ul className='list-inline m-0'>
						<li className='list-inline-item'>
							<button className='btn px-4'><FiCheck /> Aprobar</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'><FiRotateCcw /> Devolver</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'><FiTrash2 /> Eliminar</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'><FiEdit3 /> Liberar</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'><IoWarningOutline /> Forzar</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}

export default ShadowMenuAnalysisDetail