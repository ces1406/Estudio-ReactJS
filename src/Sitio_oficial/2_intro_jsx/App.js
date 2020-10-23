import React from 'react';

function formatName(usuario){
    return usuario.firstName+' '+usuario.lastName;
}
const usuario1 ={
    firstName: 'Juan',
    lastName: 'Perez'
};
// Reactjs escapa cualquier intento de inyeccion:
const inyeccionMaliciosa = '<script>alert("soy maloso")</script>'

// expresiones embebidas dentro de JSX:
const elemento1 =
    <div>
        <h1 style={{borderColor:'rgb(144,122,233)',borderStyle:'solid'}}>
            Hola {formatName(usuario1)} !
        </h1>
        {inyeccionMaliciosa}
    </div>;

class App extends React.Component {
    render(){
        return(
            elemento1
        )
    }
}

export default App;