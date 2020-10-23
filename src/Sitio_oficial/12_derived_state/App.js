import React from 'react';

// Antipatron: copiar incondicionalmente las props al estado
// El poblema original: Cuando se renderiza el elemento "padre" (MainMenu) provoca la actualizacion (independiente 
// de si le setea alguna propiedad o no) del "hijo" (EmailInput) de manera innecesaria, entonces se  
// usa getDerivedStateFromProps() para evitar que el hijo se renderize innecesariamente.
// Así, al ingresar caracteres en algun input del formulario de MainMenu se provoca su re-renderizado
// y ésto gatilla la re-renderización (innecesaria) de EmailInput
// Entonces getDerivedStateFromProps NO sirve para esta situacion
// SI sirve shouldComponentUpdate()

class EmailInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: this.props.email};
        this.handleChange = this.handleChange.bind(this)
    }    
    handleChange (evento){
        this.setState({email:evento.target.value})
    }
    
    static getDerivedStateFromProps(nextProps,prevState){
        //Siempre debe devolver un objeto (el state o null)
        console.log('--->EmailInput->getDerivedStateFromProps()->nextProps.email:'+nextProps.email+' -- prevState.email:'+prevState.email)
        if(prevState.email !== nextProps.email){
            console.log('--->EmailInput->getDerivedStateFromProps()->es True')
            return {email:nextProps.email}            
        }else{
            console.log('--->EmailInput->getDerivedStateFromProps()->es False')
            return null;
        }
    }*/
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.email !== this.state.email){
            console.log('--->EmailInput->shouldComponentUpdate(cambia estado)->es True')
            return true
        }else{
            console.log('--->EmailInput->shouldComponentUpdate(cambia estado)->es False')
            return false
        }
    }
    render(){
        console.log('--->EmailInput->render()->State: '+JSON.stringify(this.state)+'<-')
        return(
            <input onChange ={this.handleChange} value={this.state.email} />
        )
    }
}

export default class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            valor1:'un nombre',
            valor2:'un mensaje'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        console.log('--->MainMenu->render()->State: '+JSON.stringify(this.state)+'<-')
        return(
            <div>
                <form>
                <label>Name:
                    <input type="text" value={this.state.valor1} onChange={this.handleChange} name="valor1" />
                </label>
                <br/>
                <label>Mail:
                    <EmailInput email='un mail'/>
                </label>
                <br/>
                <label>Mensaje:
                    <textarea value={this.state.valor2} onChange={this.handleChange} name="valor2" />
                </label>
                <br/>
                </form>
            </div>
        )
    }
}