import React, {useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import ModalAddComment from '../../UI/ModalAddComment';
import ModalMultiTab from '../../UI/ModalMultiTab/ModalMultiTab';
import ModalGuarantorMultiTab01 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab01';
import ModalGuarantorMultiTab02 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab02';
import ModalGuarantorMultiTab03 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab03';

const CreditAnalysisDetailTabs02 = ({userID}) => {

	const guarantorData = [
		{
			name: 'Datos',
			content: <ModalGuarantorMultiTab01 />
		},
		{
			name: 'Tel. y Direc',
			content: <ModalGuarantorMultiTab02 />
		},
		{
			name: 'Artículos',
			content: <ModalGuarantorMultiTab03 />
		},
		{
			name: 'Datos Adicionales',
			content: <>Tab de Datos Adicionales</>
		},
		{
			name: 'Comentarios',
			content: <>Tab de Comentarios</>
		},
	];

	const [modalNewComment, setModalNewComment] = useState(false);
	const [modalGuarantor, setModalGuarantor] = useState(false);

	const [comentadioFiadores, setComentadioFiadores] = useState([
		{
			fecha: '09/21/2021 17:07:05',
			comentario: 'Comentario de análisis de preventa',
			usuario: 'Logical'
		}
	])

	return <>
		<div className='row'>
			<div className='col-sm-6'>
				<h3>Detalle de fiadores</h3>
				<table className='table table-analysis mb-0'>
					<thead>
						<tr>
							<th>Cédula</th>
							<th>Nombre</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<button className='btn btn-link' onClick={ () => setModalGuarantor(true) }>2-0461-0754</button>
							</td>
							<td>SEIDY OVIEDO MURILLO</td>
						</tr>
					</tbody>
				</table>
				<div className='border' style={ { height: '300px', overflow: 'auto' } }>
					<table className='table mb-0'>
						<thead>
							<tr>
								<th>Crédito</th>
								<th>Días atraso</th>
								<th>Saldo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19772</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
							<tr>
								<td>3-19773</td>
								<td>0</td>
								<td>544,808.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='col-sm-6'>
				<h3>Detalle de artículos</h3>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Nombre</th>
							<th>Cantidad</th>
							<th>Monto</th>
							<th>Garantía M</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0506</td>
							<td>COC ELEC WHIRLPOL WFE30 4Q</td>
							<td>1.00</td>
							<td>349,763.00</td>
							<td>86,967.06</td>
						</tr>
						<tr>
							<td>2882</td>
							<td>ABAN MAGGIO 3EN1 18”</td>
							<td>1.00</td>
							<td>20,990.00</td>
							<td>0.00</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div className='row mt-4'>
			<div className='col-sm-6'>
				<h3>Detalle de fiadores</h3>
			</div>
			<div className='col-sm-6 text-end'>
				<button className='btn text-white bg-primary bg-opacity-50' onClick={ () => setModalNewComment(true) }><FaPlus /> Agregar</button>
			</div>
		</div>
		<div className='row mb-4'>
			<div className='col'>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Comentario</th>
							<th>Usuario</th>
						</tr>
					</thead>
					<tbody>
						{
							comentadioFiadores.map((comment, index) => {
								return (
									<tr key={comment.fecha}>
										<td>{comment.fecha}</td>
										<td>{comment.comentario}</td>
										<td>{comment.usuario}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</div>
		{
			modalNewComment && <ModalAddComment setClose={ () => setModalNewComment(false) } comments={comentadioFiadores} setComments={setComentadioFiadores} />
		}
		{
			modalGuarantor && <ModalMultiTab title='Detalle de fiador' setClose={ () => setModalGuarantor(false) } tabData={ guarantorData } />
		}
	</>
}

export default CreditAnalysisDetailTabs02