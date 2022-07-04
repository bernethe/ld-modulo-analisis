import React, {useEffect} from 'react';
import '../../SCSS/confirmModal.scss';

const ConfirmModal = ({setNo, setYes, children}) => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, []);
	
	return <div className='confirm-modal-ld'>
		<div className="confirm-modal-window">
			<div className="confirm-modal-body">{children}</div>
			<div className="confirm-modal-footer">
				<button className='btn' onClick={() => setNo(false)}>No</button>
				<button className='btn' onClick={() => setYes(false)}>Si</button>
			</div>
		</div>
	</div>
}

export default ConfirmModal