import React from 'react';

const escalas={
    c:'celsius',
    f:'fahrenheit4'
}
function aCelsius(gradF){
    return (gradF-32)*5/9;
}
function aFahrengeit(gradC){
    return (gradC*9/5)+32
}
function convertir(temp,funcion){
    const entrada = parseFloat(temp);
    if(Number.isNaN(entrada)){return ''}
    const salida = funcion(entrada);
    const redondeo = Math.round(salida * 1000)/1000;
    return redondeo.toString()
}
function Hierve(props){
    if(props.celsius >= 100){
        return <p>El agua está hirviendo</p>
    }
    return <p>El agua no está hirviendo</p>
}

class Calculadora extends React.Component {
    constructor(props){
        super(props);
        this.manejarCelsius = this.manejarCelsius.bind(this);
        this.manejarFahrenh = this.manejarFahrenh.bind(this)
        this.state={
            temperatura:'',
            escala:'c'
        }
    }
    manejarCelsius (temp){
        this.setState({
            escala:'c',
            temperatura:temp
        })
    }
    manejarFahrenh (temp){
        this.setState({
            escala:'f',
            temperatura:temp
        })
    }
    render(){
        const escala = this.state.escala;
        const temp = this.state.temperatura;
        const celsius = escala === 'f'? convertir(temp,aCelsius) : temp;
        const fahrenh = escala === 'c'? convertir(temp,aFahrengeit) : temp;
        return(
            <div>
                <Temperatura escala="c" temperatura={celsius} cambioDeTemp={this.manejarCelsius}></Temperatura>
                <Temperatura escala="f" temperatura={fahrenh} cambioDeTemp={this.manejarFahrenh}></Temperatura>
                <Hierve celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

class Temperatura extends React.Component {
    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            temperatura:''
        }
    }
    handleChange(e){
        //this.setState({temperatura:e.target.value})
        this.props.cambioDeTemp(e.target.value)
    }
    render() {
        const temperatura = this.props.temperatura;
        return (
          <fieldset>
            <legend>Ingresar la temperatura:</legend>
            <input value={temperatura} onChange={this.handleChange} />
          </fieldset>
        );
      }
}
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Calculadora />
            </div>
        )
    }
}