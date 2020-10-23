import React from 'react';

const numeros = [1,5,3,4,2,6];
const items = ['uno',1,'5',3,4,'una cadena',2,6];
const vec1 =['one','two',4,990,'otro string',0,0,1,1];

const listItems1 = numeros.map(numero=>{
    return (<li key={numero.toString()}>{numero}</li>)
});
// Cuando no hay un id estable para poner como key, usar "index":
const listItems2 = items.map((item,index)=>{
    return (
        <li key={index}>
            {item.toString()}
        </li>
    )
})


export default class App extends React.Component{    
    render(){
        console.log('listItems: ',listItems1);
        console.log('vec1: ',vec1);
        return(            
            <div>
                <h1>LISTS AND KEYS</h1>
                <ul>
                    {listItems1}
                </ul>
                <ul>
                    {listItems2}
                </ul>
                <ul>
                    {vec1.map((elem,index)=>{
                        return (<li key={index}>value: {elem.toString()}</li>)
                    })}
                </ul>
            </div>
        )
    }
}