import React, {useState} from 'react'
import ClientFormSearch from '../Layout/ClientFormSearch'
import ClientTabs from '../Layout/ClientTabs/ClientTabs'
import Header from '../Layout/Header'
import ShadowMenuClient from '../Layout/ShadowMenuClient'

const ClientPage = () => {

	const [serchedUser, setSerchedUser] = useState({})

	return <>
		<Header />
		<ShadowMenuClient />
		<ClientFormSearch setSerchedUser={setSerchedUser} />
		<ClientTabs serchedUser={serchedUser} />
	</>
}

export default ClientPage