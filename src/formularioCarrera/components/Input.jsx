import React from 'react'

import '../styles/Input.css'

export const Input = ({label, type, placeholder, setData, data}) => {
  const saveData = ({target: {value}}) => {
    let dataInput
    if(label === 'Nombre') {
      dataInput = {
        ...dataInput,
        'nombre': value
      }
    } else {
      dataInput = {
        ...dataInput,
        'duracion': Number(value)
      }
    }
    setData({
      ...data,
      ...dataInput,
    })
  }
  return (
    <div className='input'>
      <label className='label-input'>{label}</label>
      <input className='input-field' type={type} placeholder={placeholder} onInput={saveData} />
    </div>
  )
}
