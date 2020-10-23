import React,{Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Nombre:
                          <input type="text" value={this.state.nameUser} onChange={this.handleChange} name="valor1" />
                    </label>
                    <br/>
                    <label>Mensaje:
                          <textarea value={this.state.valor2} onChange={this.handleChange} name="valor2" />
                    </label>
                    <br/>
                    <input type="file"></input>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}