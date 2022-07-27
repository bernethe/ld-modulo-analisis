import React, { useRef, useState } from 'react'
import LoadSpinnerScreen from '../UI/LoadSpinnerScreen';

const ClientFormSearch = ({setSerchedUser}) => {

	const docIDRef = useRef(null);

	const [isLoading, setIsLoading] = useState(false);

	const getByDocID = async () => {

		if(docIDRef.current.value.length !== 0) {
			setIsLoading(true);

			const user = await fetch(`http://apis.gometa.org/cedulas/${docIDRef.current.value}`);
			const userJson = await user.json();
			// console.log(userJson.results[0]);
			setSerchedUser(userJson.results[0]);

			setIsLoading(false);
		}
	};

	return <><div className='container'>
		<div className='row'>
				<div className='col'>
					<label>
						<input type='text' className='form-control' placeholder='Digite una cédula a consultar' ref={ docIDRef } />
					</label>
					<button className='btn text-white ms-4 bg-primary' onClick={ () => getByDocID() }>Buscar</button>
					<button className='btn text-white ms-4 bg-primary bg-opacity-50'>Limpiar</button>
				</div>
			</div>
		</div>
		{ isLoading && <LoadSpinnerScreen /> }
	</>
}

export default ClientFormSearch