import React from 'react'
import '../../SCSS/inputPlus.scss'

const InputPlus = ({value, setValue, type, placeholder, icon = undefined}) => {
    return <label className='input-plus'>
        { (icon !== undefined) && <div className='input-plus-ico'>{icon}</div> }
        <input type={type} placeholder={placeholder} value={value} onChange={ (e) => setValue(e.target.value) } className='form-control' />
    </label>
}

export default InputPlus