import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";

export default function navRoute(){
    return(
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/formularioCarrera'>Carrera</Link>
                        </li>
                        <li>
                            <Link to="/formularioGrupo">Grupo</Link>
                        </li>
                        <li>
                            <Link to="/formularioHorario">Horario</Link>
                        </li>
                        <li>
                            <Link to="/formularioMateria">Materia</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={<App/>} />

                    <Route path="/formularioCarrera" element={<div>Carrera</div>}/>

                    <Route path="/formularioGrupo" element={<div>Grupo</div>}/>

                    <Route path="/formularioHorario" element={<div>Horario</div>}/>

                    <Route path="/formularioMateria" element={<div>Materia</div>}/>
                </Routes>
            </div>         
        </BrowserRouter>
    );
}