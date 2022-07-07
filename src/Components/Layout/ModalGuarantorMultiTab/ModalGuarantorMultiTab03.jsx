import React from 'react'
import MyJson from '../../../JSON/guarantor-articles.json'

const ModalGuarantorMultiTab03 = () => {

	const _data = MyJson.data;

	return <>
		<h5>Artículos</h5>
		<table className='table table-analysis'>
			<thead>
				<tr>
					<th>Factura</th>
					<th>Fecha</th>
					<th>Nombre</th>
					<th>Cantidad</th>
					<th>Monto</th>
					<th>Vendedor</th>
				</tr>
			</thead>
			<tbody>
				{_data.map((item, index) => {
					return <tr key={index}>
						<td>{item.bill}</td>
						<td>{item.date}</td>
						<td>{item.name}</td>
						<td>{item.quantity}</td>
						<td>{item.amount}</td>
						<td>{item.vendor}</td>
					</tr>
				})}
			</tbody>
		</table>
	</>
}

export default ModalGuarantorMultiTab03