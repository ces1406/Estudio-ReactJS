import React from 'react';

class Reloj extends React.Component {
    constructor(props){
        console.log('-->Reloj.constructor()')
        super(props);
        this.state = {
            hora : new Date().getTime()
        }
    }
    componentDidMount(){
        //this.idTimer = setInterval(()=>this.tic(),12000) 
        this.idTimer = setTimeout(()=>this.tic(),4000)
        console.log('-->Reloj.componentDidMount()')
    }  
    getDerivedStateFromProps(nextProps,prevState){
        console.log('-->Reloj.getDerivedStateFromProps:')
        console.log('   -->Reloj.getDerivedStateFromProps->nextProps:',nextProps)
        console.log('   -->Reloj.getDerivedStateFromProps->prevState:',prevState)
        return null;
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log('-->Reloj.shouldComponentUpdate:')
        console.log('   -->Reloj.shouldComponentUpdate->prevprops:',nextprops)
        console.log('   -->Reloj.shouldComponentUpdate->prevstate:',nextstate)
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('-->Reloj.getSnapshotBeforeUpdate:')
        console.log('   -->Reloj.getSnapshotBeforeUpdate->prevprops:',prevprops)
        console.log('   -->Reloj.getSnapshotBeforeUpdate->prevstate:',prevstate)
        return null
    }
    componentDidUpdate(prevprops,prevstate){
        console.log('-->Reloj.componentDidUpdate:')               
        console.log('   -->Reloj.componentDidUpdate->prevprops:',prevprops)
        console.log('   -->Reloj.componentDidUpdate->prevstate:',prevstate)
    }
    componentWillUnmount(){
        clearInterval(this.idTimer)
        console.log('--Reloj.componentWillUnmount')
    }
    tic (){
        this.setState({hora: new Date().getTime()})
    }
    render(){
        console.log('-->Reloj.render()')
        return(
            <div>
                <h1>Hola, mundo!</h1>
                <h2>son las {this.state.hora}</h2>
            </div>            
        )
    }
}

function Cabecera(props){
    return(
        <div>
            <h1 style={{color:'rgb(12,14,172)',backgroundColor:'rgb(214,222,233)'}}>Página de prueba de State and Lifecycle methods</h1>
            <p>{props.subitulo}</p>
        </div>
    )
}

class App extends React.Component {      
    componentDidMount(){
        console.log('->App.componentDidMount()')
    }  
    getDerivedStateFromProps(nextProps,prevState){
        console.log('->App.getDerivedStateFromProps:')
        console.log('   ->App.getDerivedStateFromProps->nextProps:',nextProps)
        console.log('   ->App.getDerivedStateFromProps->prevState:',prevState)
        return null;
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log('->App.shouldComponentUpdate:')
        console.log('   ->App.shouldComponentUpdate->prevprops:',nextprops)
        console.log('   ->App.shouldComponentUpdate->prevstate:',nextstate)
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('->App.getSnapshotBeforeUpdate:')
        console.log('   ->App.getSnapshotBeforeUpdate->prevprops:',prevprops)
        console.log('   ->App.getSnapshotBeforeUpdate->prevstate:',prevstate)
        return null
    }
    componentDidUpdate(prevprops,prevstate){
        console.log('->App.componentDidUpdate:')
        console.log('   ->App.componentDidUpdate->prevprops:',prevprops)
        console.log('   ->App.componentDidUpdate->prevstate:',prevstate)
    }
    componentWillUnmount(){
        console.log('->App.componentWillUnmount')
    }
    render(){
        console.log('->App.render()')
        return (        
            <div>
                <Cabecera subitulo={'esto es una prueba para los distintos metodos del ciclo de vida de los componentes'} />  
                <Reloj />
            </div>              
        )
    }
}

export default App;