import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {GoPrimitiveDot} from 'react-icons/go';
import {BsThreeDots} from 'react-icons/bs';
import {numberThousandsSeparator} from '../../Utils/maths';

const CreditAnalysisTableRow = ({item, confirmAnalisis}) => {

	let navigateTo = useNavigate();
	const ref = useRef(null);

	const [showBalloon, setShowBalloon] = useState(false); 

	useEffect(() => {
		
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowBalloon && setShowBalloon(false);
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
		  document.removeEventListener('click', handleClickOutside, true);
		};

	}, [ setShowBalloon ]);

	const goToDetails = () => {
		navigateTo('/analisis-credito-detalle/' + item.id);
	}

	return <tr className={ showBalloon ? 'row-selected' : '' }>
		<td><span className={ item.status ? 'text-success' : 'text-danger' }><GoPrimitiveDot /></span> {item.id}</td>
		<td>{item.sucursal}</td>
		<td>{item.cliente}</td>
		<td>{numberThousandsSeparator(item.monto)}</td>
		<td>{item.plazo}</td>
		<td>{numberThousandsSeparator(item.prima)}</td>
		<td>{numberThousandsSeparator(item.cuota)}</td>
		<td>{item.vendedor}</td>
		<td>{item.tipo}</td>
		<td className='position-relative'>
			<button
				className='btn'
				onClick={() => setShowBalloon(!showBalloon) }
			>
				<BsThreeDots/>
			</button>
			{showBalloon && <div className='balloon' ref={ref}>
				<button className='btn' onClick={ () => confirmAnalisis(true) }>Analizar preventa</button>
				<button className='btn' onClick={ goToDetails }>Ver detalle</button>
			</div>}
		</td>
	</tr>
}

export default CreditAnalysisTableRow