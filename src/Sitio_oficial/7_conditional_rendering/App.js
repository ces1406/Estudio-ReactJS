import React from 'react';

function BienvenidaUsuario (props){
    return( 
        <div>
            <h1>Hola Usuario (usted está loggeado)</h1>
        </div>
    )
}
function BienvenidaInvitado(props){
    return(
        <div>
            <h1>Hola Invitado (usted debe loggearse)</h1>
        </div>
    )
}
function Bienvenida(props){
    const userLogged = props.isLogged;
    if(userLogged){
        return <BienvenidaUsuario />
    }
    return <BienvenidaInvitado />
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}
// Evitando renderización:
function CartelWarning(props){
    if(!props.warn){ return null; }
    return(
        <div> Ciudado!!</div>
    )
}
const mensajes = ['React','Re:React','Re:Re:React'];
const mensajes2=[]
function Mailbox(props){
    const msjsIgnorados = props.msjsIgnorados;
    return(
        <div>
            <h2>Mensajes</h2>
            {
                msjsIgnorados.length>0 && 
                <h3> Tienes {msjsIgnorados.length} mensajes sin leer</h3>
            }
        </div>
    )
}
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
            showWarning: true,
        }
        this.handleWarning = this.handleWarning.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleWarning(){
        this.setState({showWarning:!this.state.showWarning})
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn?
            <LogoutButton onClick={this.handleLogoutClick} />
            :
            <LoginButton onClick={this.handleLoginClick}/>
        return(
            <div>
                <Bienvenida isLogged={isLoggedIn} />
                {button}
                <Mailbox msjsIgnorados={mensajes2}/>
                <CartelWarning warn={this.state.showWarning}></CartelWarning>
                <button onClick={this.handleWarning}>
                    {this.state.showWarning ? 'Esconder':'Mostrar'}
                </button>
            </div>
        )
    }
}

