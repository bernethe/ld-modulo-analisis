import React, { useRef, useState } from 'react'
import Modal from '../../UI/Modal';

const ModalGuarantorMultiTab0201 = () => {

	const refTBody = useRef(null);

	const [showPay, setShowPay] = useState(false);
	const [loopNumber, setLoopNumber] = useState(0);
	const [currentRow, setCurrentRow] = useState(0);

	const changeRow = (loop, _cr) => {
		setLoopNumber(loop);
		setCurrentRow(_cr);
	};

	return <div className='row'>
		<div className='col-sm-5'>
			<h5>Cuenta</h5>
			<div className='border rounded p-3 position-sticky top-0 left-0'>
				<table className='table small'>
					<tbody ref={refTBody}>
						<tr onClick={ () => changeRow(9, 1) } style={ currentRow === 1 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS AL DÍA</td>
							<td>9.00</td>
							<td>4,803,056.46</td>
						</tr>
						<tr onClick={ () => changeRow(27, 2) } style={ currentRow === 2 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS CANCELADAS</td>
							<td>27.00</td>
							<td>3,169,396.57</td>
						</tr>
						<tr onClick={ () => changeRow(0, 3) } style={ currentRow === 3 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS ATRASADAS</td>
							<td>0.00</td>
							<td>0.00</td>
						</tr>
						<tr onClick={ () => changeRow(0, 4) } style={ currentRow === 4 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS G LEGAS</td>
							<td>0.00</td>
							<td>0.00</td>
						</tr>
						<tr onClick={ () => changeRow(0, 5) } style={ currentRow === 5 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS INCOBRABLE</td>
							<td>0.00</td>
							<td>0.00</td>
						</tr>
						<tr onClick={ () => changeRow(6, 6) } style={ currentRow === 6 ? {backgroundColor:'#E8ECFA',cursor:'pointer'} : {cursor:'pointer'} }>
							<td>CUENTAS ANULADAS</td>
							<td>6.00</td>
							<td>966,218.58</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div className='col-sm-7'>
			<h5>Detalle de cuentas</h5>
			<table className='table table-analysis small'>
				<thead>
					<tr>
						<th>Crédito</th>
						<th>Fecha</th>
						<th>Principal</th>
						<th>Cuota</th>
						<th>Plazo</th>
						<th>D Atraso</th>
						<th>Saldo</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						Array.from({ length: loopNumber }).map((_, index) => {
							return <tr key={index}>
								<td>3-{19772+index}</td>
								<td>2022-02-16</td>
								<td>544,808.00</td>
								<td>544,808.00</td>
								<td>1.0</td>
								<td>0.0</td>
								<td>544,808.00</td>
								<td>
									<button
										className='btn btn-sm'
										onClick={() => setShowPay(true)}
									>…</button>
								</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</div>
		{ showPay && <Modal setClose={() => setShowPay(false)} title='Cuadros de Pago'>
			<table className='table table-analysis small'>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>F. Pago</th>
						<th>Saldo Prin</th>
						<th>Saldo Fina</th>
						<th>Cuota</th>
						<th>Mora</th>
						<th>G Admin</th>
						<th>G Legal</th>
						<th>GM</th>
						<th>P. Cuota</th>
						<th>P. Mora</th>
						<th>P G Admin</th>
						<th>P G Legal</th>
						<th>P GM</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2022-02-16</td>
						<td>1900-01-01</td>
						<td>544,808.00</td>
						<td>544,808.00</td>
						<td>544,808.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
					</tr>
					<tr>
						<td>2022-02-16</td>
						<td>1900-01-01</td>
						<td>544,808.00</td>
						<td>544,808.00</td>
						<td>544,808.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>86,967.06</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>0.00</td>
					</tr>
				</tbody>
			</table>
		</Modal> }
	</div>
}

export default ModalGuarantorMultiTab0201