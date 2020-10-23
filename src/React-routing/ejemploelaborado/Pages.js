import React from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap';
import { Switch,NavLink, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Nav , Col, Row, Breadcrumb,Table,ListGroup} from 'react-bootstrap';

/*
  0-Menu principal
    1-Pagina personal(cabecera fija)
      1.1-Cuenta
      1.2-Contactos
      1.3-Publicaciones
        1.3.1-Ventas
        1.3.2-Compras
    2-Materias(cabecera fija)
      2.1-Principales
        2.1.1-Materia principal id:
      2.2-Secundarias
        2.2.1-Materia secundaria id:
    3-Trabajos
*/
const materiasPrincipales=[
    {nombre:'Matematicas',id:0},
    {nombre:'Historia',id:3},
    {nombre:'Geografías',id:10},
    {nombre:'Pepateticas',id:8},
    {nombre:'Ciencias',id:9},
    {nombre:'Justiteticas',id:20}]
const materiasSecundarias=[{
    nombre:'Seemi-Matematicas',id:10},
    {nombre:'HistoriaV',id:3},
    {nombre:'GeografíasIX',id:10},
    {nombre:'SemiPepateticas',id:8},
    {nombre:'CienciasII',id:39},
    {nombre:'Ramboticas',id:20}]
const mPrincipales=[
    {duracion:4,horario:'sabades 20hs',carrera:'Mecanica',nombre:'Matematicas',id:0,profesor:'Lopez, Jorge'},
    {duracion:4,horario:'jueves 20hs',carrera:'Industria',nombre:'Historia',id:3,profesor:'Lazzarez, Juan'},
    {duracion:2,horario:'miercoles 20hs',carrera:'Sistemas',nombre:'Geografías',id:10,profesor:'Damaras, Serge'},
    {duracion:3,horario:'lunes 10hs',carrera:'Mecatronica',nombre:'Pepateticas',id:8,profesor:'Hernandez, Robert'},
    {duracion:4,horario:'miercoles 12hs',carrera:'Sistemas',nombre:'Ciencias',id:9,profesor:'Cucaez, Belen'},
    {duracion:3,horario:'jueves 11hs',carrera:'Mecanica',nombre:'Justiteticas',id:20,profesor:'Portoski, Chechenge'}]
const mSecundarias=[
    {duracion:4,horario:'miercoles 20hs',carrera:'Sistemas',nombre:'Seemi-Matematicas',id:10,profesor:'Tutic, Yesaica'},
    {duracion:3,horario:'martes 7hs',carrera:'Mecanica',nombre:'HistoriaV',id:3,profesor:'Lazzarez, Juan'},
    {duracion:4,horario:'miercoles 20hs',carrera:'Sistemas',nombre:'GeografíasIX',id:10,profesor:'Padtamaras, Solange'},
    {duracion:2,horario:'jueves 20hs',carrera:'Mecanica',nombre:'SemiPepateticas',id:8,profesor:'Hernandez, Robert'},
    {duracion:4,horario:'miercoles 20hs',carrera:'Sistemas',nombre:'CienciasII',id:39,profesor:'Fecucaez, Belen'},
    {duracion:2,horario:'jueves 20hs',carrera:'Mecanica',nombre:'Ramboticas',id:20,profesor:'OrtoPortoski, Pipenge'}]

export function Personal(){
    return(
        <div>               
                
            <Navbar bg="dark" expand="lg">
                <Col md={{offset:5}}>
                    <h1><Link to="/"><FaHome style={{ marginBottom: "0.2em", marginRight: "0.4em" }} />Home</Link></h1>
                </Col>
            </Navbar>
            <Jumbotron><h2 style={{color:"rgb(15,22,64)"}}>Personal</h2></Jumbotron>
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to="/personal/cuenta">Cuenta</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/personal/contactos">Contactos</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/personal/publicaciones">Publicaciones</NavLink></Breadcrumb.Item>
            </Breadcrumb>         
            <Route exact path="/personal/cuenta" component={Cuenta}/>  
            <Route exact path="/personal/contactos" component={Contactos} />
            <Route path="/personal/publicaciones" component={Publicaciones} />
        </div>
    )
}
export function Materias(){
    return(
        <div>
            <Navbar bg="dark" expand="lg">
                <Col md={{offset:5}}>
                    <h1><Link to="/"><FaHome style={{ marginBottom: "0.2em", marginRight: "0.4em" }} />Home</Link></h1>
                </Col>
            </Navbar>
            <Jumbotron><h2 style={{color:"rgb(15,22,64)"}}>Materias</h2></Jumbotron>
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to="/materias/principales">Principales</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/materias/secundarias">Secundarias</NavLink></Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
                <Route path="/materias/principales">{Principales}</Route>  
                <Route path="/materias/secundarias">{Secundarias}</Route> 
            </Switch>
        </div>
    )
}
export function Trabajos(){
    return(
        <div>        
            <Navbar bg="dark" expand="lg">
                <Col md={{offset:5}}>
                    <h1><Link to="/"><FaHome style={{ marginBottom: "0.2em", marginRight: "0.4em" }} />Home</Link></h1>
                </Col>
            </Navbar>
            <Jumbotron><h2 style={{color:"rgb(15,22,64)"}}>Trabajos</h2></Jumbotron>
            <h4>Sección de Trabajos de la persona</h4>
        </div>
    )
}
export function Error404(){
    return(
        <div>Error 404</div>
    )
}



function Cuenta(){
    return(
        <div>
        <h4>Cuenta</h4>
        </div>
    )
}
function Contactos(){
    return(
        <div>
        <h4>Contactos</h4>
        </div>
    )
}
function Publicaciones(){
    return(
        <div>            
        <h4>Publicaciones</h4>
        <ul>
            <li><NavLink to="/personal/publicaciones/ventas">Ventas</NavLink></li>
            <li><NavLink to="/personal/publicaciones/compras">Compras</NavLink></li>
        </ul>    
        <Switch>
            <Route path="/personal/publicaciones/ventas" component={Ventas}/>
            <Route path="/personal/publicaciones/compras" component={Compras}/>
        </Switch>
        </div>
    )
}
function Principales(){
    return(
        <div>
            <h4>Materias principales</h4>
        <Switch>
            <Route exact path="/materias/principales" component={ListaP}/>
            <Route path="/materias/principales/detalle/:id" component={MateriaP}/>            
        </Switch>
        </div>
)}
function Secundarias(){
    return(
        <div>
        <h4>Materias secundarias</h4>
        <Switch>
            <Route exact path="/materias/secundarias" component={ListaS}/>
            <Route path="/materias/secundarias/detalle/:id" component={MateriaS}/>            
        </Switch>
        </div>
)}
function ListaP(){
    return(
        <div>        
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Enlace</th>
            </tr>
            </thead>
            <tbody>
        {
            materiasPrincipales.map(mat=>{
                return(
                    <tr>
                        <td>{mat.id}</td>
                        <td>{mat.nombre}</td>
                        <td><NavLink to={"/materias/principales/detalle/"+mat.id}>Detalle</NavLink></td>
                    </tr>
                )
            })
        }
            </tbody>
        </Table>
        </div>
    )
}
function ListaS(){
    return(
        <div>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Enlace</th>
            </tr>
            </thead>
            <tbody>
        {
            materiasSecundarias.map(mat=>{
                return(
                    <tr>
                        <td>{mat.id}</td>
                        <td>{mat.nombre}</td>
                        <td><NavLink to={"/materias/secundarias/detalle/"+mat.id}>Detalle</NavLink></td>
                    </tr>
                )
            })
        }
            </tbody>
        </Table>
        </div>
    )
}
function MateriaP({match}){
    console.log('MateriaP: ',match)
    let materia = mPrincipales.find((valor,indice,vector)=>{
        return valor.id==match.params.id
    })
    return(
        <div>
        <ListGroup>
            <ListGroup.Item action variant="dark">Nombre: {materia.nombre}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Carrera: {materia.carrera}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Profesor: {materia.profesor}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Horario: {materia.horario}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Duracion: {materia.duracion} hs.</ListGroup.Item>
        </ListGroup>
        <p>{JSON.stringify(match)}</p>
        </div>
    )
}
function MateriaS({match,location}){
    console.log('MateriaS: ',match)
    let materia = mSecundarias.find((valor,indice,vector)=>{
        return valor.id==match.params.id
    })
    return(
        <div>
        <ListGroup>
            <ListGroup.Item action variant="dark">Nombre: {materia.nombre}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Carrera: {materia.carrera}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Profesor: {materia.profesor}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Horario: {materia.horario}</ListGroup.Item>
            <ListGroup.Item action variant="dark">Duracion: {materia.duracion} hs.</ListGroup.Item>
        </ListGroup>
        <p><b>match:</b>{JSON.stringify(match)}</p>
        <p><b>location:</b>{JSON.stringify(location)}</p>
        </div>
    )
}
function Ventas(){
    return(
        <div>
            <h5>Ventas</h5>
        </div>
    )
}
function Compras(){
    return(
        <div>
            <h5>Compras</h5>
        </div>
    )
}