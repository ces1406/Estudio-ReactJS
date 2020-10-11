import React from 'react';

export default class App extends React.Component {
    constructor(propiedades){
        super(propiedades);
        this.state={
            valor1:'',
            valor2:'',
            valor3:'react'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        console.log('campo a modificar: '+e.target.name)
        this.setState({[e.target.name]:e.target.value})
        /*switch(e.target.name){
            case 'name':
                this.setState({valor1:e.target.value})
            break;
            case 'mensaje':
                this.setState({valor2:e.target.value})
            break;
            case 'lenguajes':
                this.setState({valor3:e.target.value})
            break;
            default:
                break;
        }*/
    }
    handleSubmit(e){
        event.preventDefault();
        alert('Formulario enviado');
        this.setState({value:''})
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                          <input type="text" value={this.state.valor1} onChange={this.handleChange} name="valor1" />
                    </label>
                    <br/>
                    <label>Mensaje:
                          <textarea value={this.state.valor2} onChange={this.handleChange} name="valor2" />
                    </label>
                    <br/>
                    <select value={this.state.valor3} onChange={this.handleChange} name="valor3">
                        <option value="react">ReactJS</option>
                        <option value="node">NodeJS</option>
                        <option value="typescript">TypeScript</option>
                        <option value="javascript">JavaScript</option>
                    </select>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}