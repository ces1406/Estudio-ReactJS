import React,{Component} from 'react';

class Padre extends Component{
    constructor(props){
        super(props)
        this.state = { nombre: 'initial name' }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
    cambiarNombre(n){ this.setState({nombre:n}) }
    render(){
        return(
            <div>
                <h2>-PADRE-</h2>
                <h5>Padre.state.nombre: {this.state.nombre}</h5>
                <Hijo propNomb={this.state.nombre} funcion1={this.cambiarNombre} />                
            </div>
        )
    }
}

class Hijo extends Component {
    constructor(props){
        super(props);
        this.state = {
            nuevoNombre:'ingrese nombre'
        }
        this.handler = this.handler.bind(this)
        this.confirm = this.confirm.bind(this)
    }
    confirm(){
        this.props.funcion1(this.state.nuevoNombre)
    }
    handler(e){ this.setState({nuevoNombre: e.target.value}) }
    render(){
        return(
            <div>
                <legend>-HIJO-</legend>
                <label>
                    Nombre nuevo:<input type='text' onChange={this.handler} value={this.state.nuevoNombre}/>
                </label>                
                <button onClick={this.confirm}> Actualizar</button>
                <h5>Hijo.props.name: {this.props.propNomb}</h5>
            </div>
        )
    }
}

export default class App extends Component{
    render(){
        return <Padre />
    }

}