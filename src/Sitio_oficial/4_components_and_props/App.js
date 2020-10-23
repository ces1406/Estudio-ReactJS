import React from 'react';

// La forma mas sencilla de definir 1 componente es a traves de una funcion: (function component)
function Componente1(props){
    return <h1>Hola, {props.name} !</h1>
}

// Forma habitual de definir 1 componente a traves de una clase:
class Componente2 extends React.Component{
    render(){
        return(
            <h1>Hola, {this.props.name} !</h1>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Componente1 name={'Jose'}/>
                <Componente2 name={'JUAN'}></Componente2>
            </div>
        )
    }
}

export default App;