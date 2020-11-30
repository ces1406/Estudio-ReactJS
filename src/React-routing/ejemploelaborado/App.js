import React from 'react';
import { Route, Link, Switch, NavLink,BrowserRouter as Router } from 'react-router-dom';
import { Personal, Materias, Trabajos, Error404 } from './Pages'
import { FaHome } from 'react-icons/fa';
import { Navbar , Col, Row, Jumbotron} from 'react-bootstrap';
import { IconContext } from "react-icons";


/*
  0-Menu principal->cabecera Home fija
    1-Pagina personal(cabecera fija)
      1.1-Cuenta
      1.2-Contactos
      1.3-Publicaciones
        1.3.1-Ventas
        1.3.2-Compras
    2-Materias(cabecera fija)
      2.1-Principales
      2.2-Secundarias
    3-Trabajos
*/
function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/">{Home}</Route>  
            <Route path="/personal" component={Personal} />
            <Route path="/materias">{Materias}</Route>
            <Route path="/trabajos" component={Trabajos} />              
            <Route component={Error404} />
          </Switch>
      </Router>
  );
}
const Home = ()=>
  <div >
    <Navbar bg="dark" expand="lg">
      <Col md={{offset:5}}>
        <h1><Link to="/"><FaHome style={{ marginBottom: "0.2em", marginRight: "0.4em" }} />Home</Link></h1>
      </Col>
    </Navbar>
    <Jumbotron>
    <Row>
      <Col><NavLink to="/personal"><h2 style={{color:"rgb(15,22,64)"}}>Personal</h2></NavLink></Col>
      <Col><NavLink to="/materias"><h2 style={{color:"rgb(15,22,64)"}}>Materias</h2></NavLink></Col>
      <Col><NavLink to="/trabajos"><h2 style={{color:"rgb(15,22,64)"}}>Trabajos</h2></NavLink></Col>
    </Row>    
    </Jumbotron>
  </div>;
  
export default App;
