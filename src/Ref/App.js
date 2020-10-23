import React,{Component} from 'react';

class MsjHola extends Component {
    render () {
        return(
            <div>{this.props.msj}</div>
        )
    }
}
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            msj:'default'
        }
        this.updateMensaje = this.updateMensaje.bind(this)
    }
    updateMensaje(){
        this.setState({msj:this.refs.messageTextBox.value})
    }
    render(){
        return(
            <div>
                <MsjHola msj='Hola React' />
                <input type='text' ref='messageTextBox' />
                <button onClick={this.updateMensaje} > Actualizar</button>
                <h5>{this.state.msj}</h5>
            </div>
        )
    }
}

export default App;