import React, {useState} from 'react'
import {ImPlus} from 'react-icons/im'
import ModalAddComment from '../../UI/ModalAddComment'

const ModalGuarantorMultiTab0105 = () => {

	const [modalNewComment, setModalNewComment] = useState(false);

	const [comentadioFiadores, setComentadioFiadores] = useState([
		{
			fecha: '09/21/2021 17:07:05',
			comentario: 'Comentario de análisis de preventa'
		}
	])

	return <>
		<h5>Comentarios</h5>
		<button className='btn text-primary fw-bold position-absolute top-0 end-0' onClick={ () => setModalNewComment(true) }><ImPlus className='me-1' /> Agregar</button>
		<table className='table table-analysis'>
			<thead>
				<tr>
					<th>Fecha</th>
					<th>Comentario</th>
				</tr>
			</thead>
			<tbody>
				{
					comentadioFiadores.map((comment, index) => {
						return (
							<tr key={comment.fecha}>
								<td>{comment.fecha}</td>
								<td>{comment.comentario}</td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
		{
			modalNewComment && <ModalAddComment setClose={ () => setModalNewComment(false) } comments={comentadioFiadores} setComments={setComentadioFiadores} />
		}
	</>
}

export default ModalGuarantorMultiTab0105