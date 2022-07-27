import React from 'react'
import {ImSpinner8} from 'react-icons/im'
import '../../SCSS/load-spinner-screen.scss'

const LoadSpinnerScreen = () => {
    return <div className='load-spinner-screen'>
        <ImSpinner8 className='load-spinner-screen-ico' />
    </div>
}

export default LoadSpinnerScreen