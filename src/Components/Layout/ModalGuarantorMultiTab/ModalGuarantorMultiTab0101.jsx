import React from 'react'

const ModalGuarantorMultiTab0101 = () => {
	return <>
		<div className='row'>
			<div className='col-sm-5'>
				<h5>Datos del cliente</h5>
				<div className='border rounded p-3'>
					<p><strong>Tipo de identificación:</strong> Persona Física</p>
					<p><strong>Identificación:</strong> 2-0339-0246</p>
					<p><strong>Nombre:</strong> MARCO TULIO ROJAS CASTRO</p>
					<p><strong>Tipo:</strong> CLIENTE NORMAL</p>
					<p><strong>Email:</strong> <a href='mailto:kcastillo@ld.co.cr'>kcastillo@ld.co.cr</a></p>
					<p><strong>Empresa:</strong> NO REGISTRA INFORMACIÓN</p>
					<p><strong>Oficio:</strong> NO PROPORCIONADO</p>
					<p><strong>Referencia:</strong> LUIS ZUMBADO</p>
					<p><strong>Estado:</strong> ACTIVO</p>
					<p><strong>Institución:</strong> OTM</p>
					{/* <p><strong>Teléfono:</strong> <a href="tel:+50685045144">506 8504-5144</a></p> */}
				</div>
			</div>
			<div className='col-sm-7'>
				<h5>Detalle de artículos</h5>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Crédito</th>
							<th>Título</th>
							<th>Contacto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>464</td>
							<td>3-19770</td>
							<td>Firmas</td>
							<td>Firmas Incorrectas</td>
						</tr>
						<tr>
							<td>462</td>
							<td>3-19770</td>
							<td>PRUEBA CREDITO</td>
							<td>PRUEBA CREDITO</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</>
}

export default ModalGuarantorMultiTab0101