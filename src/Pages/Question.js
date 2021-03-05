import React from 'react'
import {Link} from 'react-router-dom'

class Question extends React.Component {

    constructor(props) {
        super(props)
        this.state = { pregunta: undefined, respuestaCorrecta: undefined }
        this.validateQuestion = this.validateQuestion.bind(this)
        
    }

    componentWillMount() {
        var numQuestion = Math.floor(Math.random() * 2) + 1;
        fetch('https://agile-journey-71687.herokuapp.com/Questions/' + numQuestion)
            .then((response) => {
            return response.json()
            })
            .then((pregunta) => {
                console.log(pregunta)
            this.setState({ pregunta: pregunta })
            })
    }
    validateQuestion(e){
        var respuestaUsuario = e.currentTarget.innerHTML;
        var respuestaCorrecta = this.state.pregunta.Answer_Correct
        if (respuestaCorrecta == respuestaUsuario){
            alert("¡Has acertado! Siguiente pregunta")
            window.location.reload();
        }
        else{
            alert("¡Has fallado! ¿Quieres jugar otra vez?")
            window.location.assign("http://localhost:3000/");
        }
    }
    render() {
        if (this.state.pregunta != undefined) {
            return (
                <div id="fondoQuestion">
                    <div id="fondoQuestion2">
                        <div id="fondoQuestion3">
                <div className="divQuestions" align="center">
                    <div id="divQuestion">
                        {this.state.pregunta.Question_Descrip}
                    </div>
                    <button id="divAnswer1" onClick={this.validateQuestion}>
                        {this.state.pregunta.Answer_1}
                    </button>
                    <button id="divAnswer2" onClick={this.validateQuestion}>
                        {this.state.pregunta.Answer_2}
                    </button>
                    <button id="divAnswer3" onClick={this.validateQuestion}>
                        {this.state.pregunta.Answer_3}
                    </button>
                    <button id="divAnswer4" onClick={this.validateQuestion}>
                        {this.state.pregunta.Answer_4}
                    </button>
                </div>
                </div>
                </div>
                </div>

            )
        } else {
            return <p className="text-center">Cargando pregunta...</p>
        }

    }


}

export default Question