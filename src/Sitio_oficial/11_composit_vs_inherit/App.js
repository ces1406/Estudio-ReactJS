import React from 'react';

// HERENCIA:
function BordeDecorado(props){
    return(
        <div className={'BordeDecorado BordeDecorado-'+props.color}>
            {props.children}
        </div>
    )
}
function Dialogo(props){
    return(
        <BordeDecorado color="blue">
            <h1 className="Dialog-title">
                {props.titulo}
            </h1>
            <p className="Dialog-message">
                {props.mensaje}
            </p>
        </BordeDecorado>
    )
}
function DialogoBienvenida(){
    return(
        <Dialogo titulo={'Bienvenido'} mensaje="Bienvenido al sitio sobre React!"></Dialogo>
    )
}
function PanelDividido(){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

// COMPOSICION:
function DialogoC(props){
    return(
        <BordeDecorado color="blue">
            <h1 className="Dialog-title">
                {props.titulo}
            </h1>
            <p className="Dialog-message">
                {props.mensaje}
            </p>
            {props.children}
        </BordeDecorado>
    )
}
class DialogoIngreso extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login : ''}
    }
    handleChange(e){
        this.setState({login:e.target.value})
    }
    handleSignUp(e){
        alert('Bienvenido a bordo Sr. '+this.state.login)
    }
    render(){
        return(
            <DialogoC titulo='Programa de exploración' mensaje='Como nos referimos a ti?'>
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Iniciar
                </button>
            </DialogoC>
        )
    }
}


export default class App extends React.Component {
    render(){
        return(
            <div>
                <DialogoIngreso />
            </div>
        )
    }
}