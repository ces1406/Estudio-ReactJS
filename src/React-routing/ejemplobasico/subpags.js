import React from 'react';
import { NavLink, HashRouter as Router, Route,Switch,Link } from 'react-router-dom';
//import MainMenu from './mainmenu';

//-----------------HOME------------------------------------
export const Home = ()=> <PageTemplate>
    <section>
        <h1>[HOME]</h1>
    </section>
</PageTemplate>;

//----------------ABOUT------------------------------------
export const About = ()=> {
    return (
        <PageTemplate>
            <section>
                <h1>[ABOUT]</h1>
            </section>            
            <section>
                <Route component={SubmenuAbout}/>
                <Route exact path="/about/company" component={Company}/>
                <Route path="/about/history"><History/></Route>
                <Route path="/about/services" component={Services}/>
                <Route path="/about/location" component={Location}/>
            </section>
        </PageTemplate>
)};
const Company =()=><section><h2>Company</h2><p>Our Company bla, bla, bla.....</p></section>;
const History =()=><section><h2>History</h2><p>Our history bla, bla, bla....</p></section>;
const Services=()=><section><h2>Services</h2><p>Our services bla, bla, bla...</p></section>;
const Location=()=><section><h2>Location</h2><p>Our location bla, bla, bla...</p></section>;
const SubmenuAbout=({match})=><div>
    <h3>-SUBMENU-</h3>
        <li> <NavLink to={`/about/company`}>[COMPANY]</NavLink> </li>
        <li> <NavLink to={`/about/history`}>[HISTORY]</NavLink> </li>
        <li> <NavLink to={`/about/services`}>[SERVICES]</NavLink>  </li>
        <li> <NavLink to={`/about/location`}>[LOCATION]</NavLink>  </li>
</div>;

//--------------EVENTS-------------------------------------
export const Events = ()=><PageTemplate>
    <h1>[EVENTS]</h1>
</PageTemplate>;

//-------------CONTACT------------------------------------
export const Contact = ()=><PageTemplate>
<section>
    <h1>[CONTACT]</h1>
</section>
</PageTemplate>;

//-------------PRODUCTS-----------------------------------
export const Products = ()=><PageTemplate>
<section>
    <h1>[PRODUCTS]</h1>
</section>
</PageTemplate>;

//-------------PAG404--------------------------------------
export const Pag404 = ({location})=><div><h1>`No se encontró {location.pathname}` </h1></div>;


//-------------PAGE TEMPLATE---------------------------------
const PageTemplate = ({children})=>
    <div>
        <header>[Company Website]</header> 
        <MainMenu/>
        {children}
    </div>;

//-------------MAIN MENU--------------------------------------
const MainMenu = ()=> {
    return (
      <nav>    
          <NavLink to="/"> [HOME]</NavLink> 
          <NavLink to="/about">[ABOUT]</NavLink>
          <NavLink to="/events">[EVENTS]</NavLink>
          <NavLink to="/products">[PRODUCTS]</NavLink>
          <NavLink to="/contact">[CONTACT]</NavLink> 
      </nav>
    );
  }

//----------ESTILO-----------------------------------------
const SelectedStyle ={backgroundColor:"white",color:"stategray"}