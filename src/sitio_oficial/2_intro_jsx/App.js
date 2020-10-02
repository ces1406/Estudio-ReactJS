import React from 'react';

function formatName(usuario){
    return usuario.firstName+' '+usuario.lastName;
}
const usuario1 ={
    firstName: 'Juan',
    lastName: 'Perez'
};
const elemento1 = <h1>Hola {formatName(usuario1)} !</h1>

class App extends React.Component {
    render(){
        return(
            elemento1
        )
    }
}

export default App;