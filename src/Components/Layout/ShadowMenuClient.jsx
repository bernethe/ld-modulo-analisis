import React from 'react'

const ShadowMenuClient = () => {
	return <div className='p-2 shadow-sm mb-4'>
		<div className='container'>
			<div className='row'>
				<div className='col-sm-2 justify-center align-center'>
					<h5>Cliente</h5>
				</div>
				<div className='col-sm-8 text-center'>
					<ul className='list-inline m-0'>
						<li className='list-inline-item'>
							<button className='btn px-4'>ReConsultar</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'>Pre-Aprobar</button>
						</li>
						<li className='list-inline-item'>
							<button className='btn px-4'>Condicionar</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}

export default ShadowMenuClient