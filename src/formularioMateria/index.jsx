
import React, { useState } from 'react'

import "./styles/styles.css"

export const Index = () => {

  const [assignatureName,setAssignatureName]=useState('')

  const [assignatureGrade,setAssignatureGrade]=useState('')

  return (
    <div className="div1">
      <div id="h1">
        <h1>Materia</h1>
      </div>
    <form action="" id='form'>
      <label id="label">
          Materia:
        </label>
        <input id='input' type="text" placeholder="Materia" onChange={(e)=>setAssignatureName(e.target.value)} value={assignatureName}/>
        <label id="label" >
          Grado:
        </label>
        <input id='input' type="text" placeholder="Grado" onChange={(e)=>setAssignatureGrade(e.target.value)} value={assignatureGrade}/>

      <button id='button' onClick={(e)=>{
        console.log("Materia: ",assignatureName, " Grado: ", assignatureGrade)
        e.preventDefault();
      }}>
        Enviar
      </button>
    </form>
    </div>
  );
}
