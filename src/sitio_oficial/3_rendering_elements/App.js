import React from 'react';

function tick(){
    return(
        <div>
            <h1>Hola mundo!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

// Este ejemplo no se puede aplicar porque trata de modificar el ReactDOM.render() que esta en el index.js
// Lo dejamos así.
function App(){
    return tick();
}

export default App;