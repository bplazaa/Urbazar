import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import '../css/MainComponent.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (  
     <>   
        <Navbar color='faded' dark className='navbar'>
        <NavbarToggler onClick={toggle} className="toggler mr-2 custom-toggler"/>
        {/* hacer el menu del toggler */}
        <NavbarBrand href='/' className='logo'>UrbazApp</NavbarBrand>
        <NavbarBrand href='/' className='logo2'>UApp</NavbarBrand>

        <form className='mr-auto search_form'>
          <input type='text' placeholder='Buscar...' name='search'/>
          <button type='submit'><i className='fas fa-search mr-auto'></i></button>
        </form>

        <p id='p_bienvenido'>Bienvenido!</p>
        <p id='nombre_user'>Walther López</p>

        <button type='button' className='button_nav'><i className='fas fa-bell fa-lg'></i></button>
        <button type='button' className='button_nav'><i className='fas fa-shopping-cart fa-lg'></i> </button>

      </Navbar>

    </>
    );
}
 
export default NavbarComponent;