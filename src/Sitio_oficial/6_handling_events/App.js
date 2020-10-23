import React from 'react';
import { Button } from 'react-bootstrap';

class Formulario extends React.Component{
    constructor(props){
        super(props);
        var var1 = 'algo';
        this.state={
            campo1:'',
            campo2:null,
            campo3:null,
            campo4: false,
            //campo3 //-->así definido da error
        }
        this.submitear = this.submitear.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    submitear(e){
        //event.preventDefault();   //->si no lo coloco va a la accion POST del formulario cuando clickeo el boton dentro del form
        //e.preventDefault();       //->hace lo mismo que lo de arriba
        console.log('-->Formulario.submitear()')
        //console.log('var1: '+var1) //->da ERROR
        console.log('-->Formulario.submitear()->state: ',this.state)
    }
    handleChange(e){
        console.log('-->Formulario.handleChange()->e.target.value: ',e.target.value);
        console.log('-->Formulario.handleChange()->e.target.name: ',e.target.name)
        switch(e.target.name){
            case 'nombre':
                this.setState({campo1:e.target.value})
            break;
            case 'apellido':
                this.setState({campo2:e.target.value})
            break;
            case 'edad':
                this.setState({campo3:e.target.value})
            break;
            default:
                break;
        }
    }
    render(){
        return(
            /*
                El problema con la definicion de una arrow function dentro del JSX es que cada vez que se presiona
                el boton se creará una nueva arrow function, o cada vez que se pase por render()
             */
            <div>
                <form action="#" method="POST">
                    <h3>Formulario</h3>
                    <legend>Datos Personales</legend>
                    Nombre<input type="text" name="nombre" onChange={this.handleChange} value={this.state.campo1}/><br/>
                    Apellido<input type="text" name="apellido" onChange={this.handleChange} value={this.state.campo2}/><br/>
                    Edad<input type="number" name="edad"onChange={this.handleChange} value={this.state.campo3}/><br/>
                    <Button variant="secondary" onClick={()=>this.setState({campo4:!this.state.campo4})}>{this.state.campo4?'TRUE':'FALSE'}</Button><br/>
                    <input type="submit" value="enviar->input:type=submit"/><br/>
                    <button onClick={this.submitear}>value=enviar-un button</button><br/>
                </form>
                <button onClick={this.submitear}>value=enviar-un button(fuera del form)</button>
            </div>
        )
    }
}

export default class App extends React.Component{
    render(){
        console.log('-->App->render()')
        return <Formulario/>
    }
}