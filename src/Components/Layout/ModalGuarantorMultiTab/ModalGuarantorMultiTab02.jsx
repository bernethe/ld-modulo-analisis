import React, { useState } from 'react'

const ModalGuarantorMultiTab02 = () => {

	const [addressCheck, setAddressCheck] = useState(2);
	const [phone, setPhone] = useState(2);

	return <>
		<div className='row'>
			<div className='col'>
				<h5>Datos del cliente</h5>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Principal</th>
							<th>Dirección</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Hogar</td>
							<td><input type='radio' className='form-check-input' checked={addressCheck === 1} onChange={ () => setAddressCheck(1) } value={1} /></td>
							<td>Alajuela/Atenas/Ciudad de Atenas/Angeles/ DEL MONUMENTO 200 SUR</td>
						</tr>
						<tr>
							<td>Hogar</td>
							<td><input type='radio' className='form-check-input' checked={addressCheck === 2} onChange={ () => setAddressCheck(2) } value={2} /></td>
							<td>Alajuela/Central/Cuidad de Alajuela/Pacto Jocote/CONTIGUO A LA IGLESIA CATOLICA</td>
						</tr>
					</tbody>
				</table>
				<h5>Teléfonos</h5>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Principal</th>
							<th>Area</th>
							<th>Teléfonos</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Hogar</td>
							<td><input type='checkbox' className='form-check-input' checked={phone === 1} onChange={ () => setPhone(1) } /></td>
							<td>506</td>
							<td>8567-1234</td>
						</tr>
						<tr>
							<td>Movil</td>
							<td><input type='checkbox' className='form-check-input' checked={phone === 2} onChange={ () => setPhone(2) } /></td>
							<td>506</td>
							<td>8567-1234</td>
						</tr>
						<tr>
							<td>Tia Morelia</td>
							<td><input type='checkbox' className='form-check-input' checked={phone === 3} onChange={ () => setPhone(3) } /></td>
							<td>506</td>
							<td>8567-1234</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</>
}

export default ModalGuarantorMultiTab02