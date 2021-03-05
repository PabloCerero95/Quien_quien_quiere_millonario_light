import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/Logo.png';
const Home = () => (
    <div className="divPrincipal" align="center">
    <div id="divInicio">
      <img src={logo} id="logo" />
      <button id="buttonJugar"><Link to="/formPlayer">JUGAR</Link></button>
    </div>
    <div id="divFormPlayer">
      <div id="fondoFormPlayer">
      </div>
    </div>
  </div>
)

export default Home