import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../SCSS/modal.scss';

const Modal = ({title, setClose, children}) => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, []);

	return <div className='modal-ld' onClick={ () => setClose(false) }>
		<div className="modal-window" onClick={ e => e.stopPropagation() }>
			<div className="modal-header">
				<strong>{title}</strong>
				<button className='btn' onClick={() => setClose(false)}>
					<FaTimes className='text-muted' />
				</button>
			</div>
			<div className="modal-body">{children}</div>
		</div>
	</div>;
};

export default Modal;