import React from 'react'

const DataClientSelect01 = () => {
	return <div className='row'>
		<div className='col-sm-5 mb-4'>
			<h5>Datos del cliente</h5>
			<div className='border rounded p-3'>
				<p><strong>Tipo de identificación:</strong> Extranjero</p>
				<p><strong>Cédula:</strong> </p>
				<p><strong>Nombre:</strong> LISBETH SANCHO</p>
				<p><strong>Tipo:</strong> CLIENTE NORMAL</p>
				<p><strong>Email:</strong> kcastillo@ld.co.cr</p>
				<p><strong>Empresa:</strong> </p>
				<p><strong>Oficio:</strong> NO PROPORCIONADO</p>
				<p><strong>Referencia:</strong> </p>
			</div>
		</div>
		<div className='col-sm-7 mb-4'>
			<h5>Inconsistencias</h5>
			<table className='table table-analysis'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Crédito</th>
						<th>Título</th>
						<th>Comentario</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
}

export default DataClientSelect01