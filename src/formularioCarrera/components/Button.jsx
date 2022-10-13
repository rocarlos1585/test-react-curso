import React from 'react'
import '../styles/Button.css'

export const Button = ({text, data}) => {
  const submit = () => {
    console.log(data)
  }
  return (
    <div className='btn-form'>
      <button className='button' onClick={submit} >{text}</button>
    </div>
  )
}
