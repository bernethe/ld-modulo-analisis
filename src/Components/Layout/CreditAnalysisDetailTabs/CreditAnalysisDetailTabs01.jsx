import React from 'react'
import {FiLink} from 'react-icons/fi'

const CreditAnalysisDetailTabs01 = ({userID}) => {
	return <>
		<div className='row'>
			<div className='col-sm-5 position-relative'>
				<div className='position-absolute top-0 end-0 me-2 pt-2'>
					<a href='#/' className='text-decoration-none me-4'><FiLink /> URL.CCSS</a>
					<a href='#/' className='text-decoration-none'><FiLink /> URL.CREDISERVER</a>
				</div>
				<h3>Datos del cliente</h3>
				<div className='border rounded p-3'>
					<p><strong>Zona de riesgo:</strong> </p>
					<p><strong>Tipo de cliente:</strong> MARCO TULIO ROJAS CASTRO</p>
					<p><strong>Tipo de identificación:</strong> Persona Física</p>
					<p><strong>Identificación:</strong> 2-0339-0246</p>
					<p><strong>Nombre:</strong> MARCO TULIO ROJAS CASTRO</p>
					<p><strong>Empresa:</strong> NO REGISTRA INFORMACIÓN</p>
					<p><strong>Oficio:</strong> NO PROPORCIONADO</p>
					<p><strong>Referencia:</strong> </p>
					<p><strong>Dirección:</strong> </p>
					<p><strong>Teléfono:</strong> <a href="tel:+50685045144">506 8504-5144</a></p>
				</div>
			</div>
			<div className='col-sm-7'>
				<h3>Seguimiento de preventas</h3>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Registra</th>
							<th>Comentario</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sep 21 2021</td>
							<td>Logical</td>
							<td>Creación de preventa</td>
						</tr>
						<tr>
							<td>Sep 21 2021</td>
							<td>Logical</td>
							<td>Aplicación de preventa</td>
						</tr>
						<tr>
							<td>Dec 7 2021</td>
							<td>Logical</td>
							<td>Analización de preventa</td>
						</tr>
						<tr>
							<td>Sep 21 2021</td>
							<td>Logical</td>
							<td>Aprobación de preventa</td>
						</tr>
						<tr>
							<td>Oct 11 2021</td>
							<td>Logical</td>
							<td>Devolución de preventa</td>
						</tr>
						<tr>
							<td>Oct 11 2021</td>
							<td>Logical</td>
							<td>Liberación de preventa</td>
						</tr>
					</tbody>
				</table>
				<h3>Compras recientes</h3>
				<table className='table table-analysis'>
					<thead>
						<tr>
							<th>Factura</th>
							<th>Crédito</th>
							<th>Fecha</th>
							<th>Monto</th>
							<th>Estado</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CONT-45-2-840</td>
							<td></td>
							<td>2015-09-26</td>
							<td>20,700.00</td>
							<td>Cancelado</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</>
}

export default CreditAnalysisDetailTabs01