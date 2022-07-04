import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../SCSS/modal.scss';

const ModalAddComment = ({setClose, comments, setComments}) => {

	const [comment, setComment] = useState('');

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, []);

	const addComment = () => {
		if(comment.length > 0) {
			setComments([ {
				fecha: new Date().toLocaleString(),
				comentario: comment,
				usuario: 'Logical'
			}, ...comments]);
			setComment('');
			setClose(false);
		}
	}
	
	return <div className='modal-ld'>
		<div className="modal-window modal-window-comment">
			<div className="modal-header">
				<strong>Comentario a la preventa</strong>
				<button className='btn' onClick={ setClose }>
					<FaTimes className='text-muted' />
				</button>
			</div>
			<div className="modal-body">
				<input type='text' className='form-control' value={comment} onChange={ (e) => setComment(e.target.value) } />
			</div>
			<div className="modal-footer">
				<button className='text-white btn btn-primary bg-opacity-50' onClick={ setClose }>Cancelar</button>
				<button className='text-white btn btn-primary' onClick={ addComment }>Guardar</button>
			</div>
		</div>
	</div>
}

export default ModalAddComment