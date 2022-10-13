import React, { useState } from 'react'
import './style-carrera.css'
import { Input } from './components/Input';
import { Button } from './components/Button';

const Index = () => {
    const [dataForm, setDataForm] = useState({
        nombre: '',
        duracion: 0,
      });
    return <div className="container-carrera">
        <h2>Formulario de carrera</h2>
        <Input label="Nombre" type="text" placeholder="Nombre de la carrera" setData={setDataForm} data={dataForm} />
        <Input label="Duracion" type="number" placeholder="Duracion carrera" setData={setDataForm} data={dataForm} />
        <Button text="Enviar" data={dataForm} />
    </div>;
    
}

export default Index;