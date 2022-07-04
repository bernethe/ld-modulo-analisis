import React from 'react'

const ShadowHeadline = ({title}) => {
	return <div className='p-2 shadow-sm mb-4'>
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>{title}</h2>
				</div>
			</div>
		</div>
	</div>
}

export default ShadowHeadline