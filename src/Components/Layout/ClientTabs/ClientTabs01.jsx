import React, { useEffect, useRef, useState } from 'react';

const ClientTabs01 = ({serchedUser}) => {

	const docIDTypeRef = useRef(null);
	const docIDRef = useRef(null);
	const firstNameRef = useRef(null);
	const lastName1Ref = useRef(null);
	const lastName2Ref = useRef(null);

	useEffect(() => {
		if (serchedUser) {
			// setDocIDType(serchedUser.guess_type);
			docIDTypeRef.current.value = serchedUser.guess_type || '';
			docIDRef.current.value = serchedUser.cedula || '';
			firstNameRef.current.value = serchedUser.firstname || '';
			lastName1Ref.current.value = serchedUser.lastname1 || '';
			lastName2Ref.current.value = serchedUser.lastname2 || '';
		}
	}, [serchedUser]);

	 return <>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Tipo ID:</small>
				<input type='text' className='form-control' disabled ref={docIDTypeRef} />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Subtipo ID:</small>
				<input type='text' className='form-control' disabled />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>ID:</small>
				<input type='text' className='form-control' disabled ref={docIDRef} />
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Nombre:</small>
				<input type='text' className='form-control' ref={firstNameRef} />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Primer apellido:</small>
				<input type='text' className='form-control' ref={lastName1Ref} />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Segundo apellido:</small>
				<input type='text' className='form-control' ref={lastName2Ref} />
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Sexo:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Tipo:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Número de asegurado:</small>
				<input type='text' className='form-control' />
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Empresa:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Oficio:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Referencia:</small>
				<input type='text' className='form-control' />
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Estado:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Institución:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Estado Civil:</small>
				<input type='text' className='form-control' />
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-4 mb-4'>
				<small>Email:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Residencia:</small>
				<input type='text' className='form-control' />
			</div>
			<div className='col-sm-4 mb-4'>
				<small>Dependientes:</small>
				<input type='text' className='form-control' />
			</div>
		</div>
		
	</>
}

export default ClientTabs01