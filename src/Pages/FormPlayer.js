import React from 'react'
import {Link} from 'react-router-dom'
const FormPlayer = () => (
    <form >
        <div id="divFormPlayer">
        <div id="contentForm">
        <div className="row" id="fondoFormPlayer">
            <p>¡Hola concursante! ¡Bienvenido a ¿Quien quiere ser millonario?!<br/> ¿Como te llamas?</p>
            <div className="form-group col-md-8">
                <input type="text" className="form-control form-control-lg" placeholder="Escribe tu nombre"/>
            </div>
            <div className="form-group col-md-8">
            <button id="fghg"><Link to="formPlayer/question">JUGAR</Link></button>
            </div>
        </div>
        </div>
        </div>
    </form>

)

export default FormPlayer