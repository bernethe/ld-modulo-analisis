import React from 'react';
import { useParams } from 'react-router-dom';
import CreditAnalysisDetailSummary from '../Layout/CreditAnalysisDetailSummary';
import CreditAnalysisDetailTabs from '../Layout/CreditAnalysisDetailTabs';
import Header from '../Layout/Header';
import ShadowMenuAnalysisDetail from '../Layout/ShadowMenuAnalysisDetail';

const CreditAnalysisDetailPage = () => {

	let { id } = useParams();

	return <>
		<Header />
		<ShadowMenuAnalysisDetail userID={id} />
		<CreditAnalysisDetailSummary userID={id} />
		<CreditAnalysisDetailTabs userID={id} />
	</>
}

export default CreditAnalysisDetailPage