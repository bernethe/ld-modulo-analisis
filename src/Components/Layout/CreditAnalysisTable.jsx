import React, { useState } from 'react';
import InputPlus from '../UI/InputPlus';
import CreditAnalysisTableRow from './CreditAnalysisTableRow';
import ConfirmModal from '../UI/ConfirmModal';
import {FaSearch} from 'react-icons/fa';
import {MdRefresh} from 'react-icons/md';
import {RiErrorWarningFill} from 'react-icons/ri';
import '../../SCSS/creditAnalysisTable.scss';

const CreditAnalysisTable = ({tableData}) => {

	const [data, setData] = useState(tableData);
	const [search, setSearch] = useState('');
	const [filterManagedPreSales, setFilterManagedPreSales] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const handleChange = (e) => {
		setFilterManagedPreSales(!filterManagedPreSales);

		let newData;

		if(!filterManagedPreSales) {
			newData = tableData.filter(row => row.status === 0);
		} else {
			newData = [...tableData];
		}

		setData(newData);
	}

	return <>
		<div className='container'>
			<div className='row mb-4'>
				<div className='col-sm-3'>
					<InputPlus type='text' placeholder='Búsqueda en tabla' icon={<FaSearch />} value={search} setValue={setSearch} />
				</div>
				<div className='col-sm-2 d-flex justify-content-center align-items-center'>
					<label>
						<input type='checkbox' checked={filterManagedPreSales} onChange={ handleChange } />
						<span className='ms-1'>Preventas sin gestionar</span>
					</label>
				</div>
				<div className='col-sm-1 d-flex align-items-center'>
					<button className='btn'><MdRefresh /></button>
				</div>
			</div>
			<div className='row mb-4'>
				<div className='col'>
					<table className='table table-hover table-pv'>
						<thead>
							<tr>
								<th>Preventa</th>
								<th>Sucursal</th>
								<th>Cliente</th>
								<th>Monto</th>
								<th>Plazo</th>
								<th>Prima</th>
								<th>Cuota</th>
								<th>Vendedor</th>
								<th>Tipo</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data.map(item => {
								if (item.cliente.toLowerCase().includes(search.toLowerCase())) {
									return <CreditAnalysisTableRow key={item.id} item={item} confirmAnalisis={setShowConfirmModal} />
								}
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		{
			showConfirmModal && <ConfirmModal setNo={ setShowConfirmModal } setYes={ setShowConfirmModal }>
				<p className='h1 text-center'><RiErrorWarningFill /></p>
				<p className='h1 text-center'>Analisis de preventa</p>
				<p className='text-center'>¿Está seguro que desea analizar la preventa?</p>
			</ConfirmModal>
		}
	</>
}

export default CreditAnalysisTable