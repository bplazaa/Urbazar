import React from 'react';
import NavbarComponent from './navbarComponent';
import CategoriaComponent from './CategoriaComponent';
import { UncontrolledCarousel, Col } from 'reactstrap';
import '../css/MainComponent.css';
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

function Main() {

  const src_kitten ='https://static.toiimg.com/photo/msid-68523832/68523832.jpg?1137762';
  const src_cupcake = 'https://preppykitchen.com/wp-content/uploads/2016/07/Chocolate-cupcakes-recipe-light.jpg';
  const src_boots = 'https://i.pinimg.com/originals/dd/5c/cc/dd5ccc1e042a6747f07493a1b3943c89.jpg'
  const src_ham = 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'

  /* banner items */
  const items = [
    {
      src: 'https://static.vecteezy.com/system/resources/previews/000/669/988/original/vector-shopping-online-banner.jpg',
      caption: '',
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: 'https://previews.123rf.com/images/vectorgift/vectorgift1608/vectorgift160800109/61622829-sale-discount-background-for-the-online-store-shop-promotional-leaflet-promotion-poster-banner-vecto.jpg',
      caption: '',
      altText: 'Slide 2',
      key: '2'
    },
    {
      src: 'https://st2.depositphotos.com/4063385/9889/v/950/depositphotos_98891888-stock-illustration-online-store-banner.jpg',
      caption: '',
      altText: 'Slide 3',
      key: '3'
    }
  ];


  return (
    <>

      <NavbarComponent />
      <CategoriaComponent />

      {/* banner */}
      <section className='banner_container'>
        <Col xs='12' md='6' lg='6'>
          <UncontrolledCarousel items={items} className='banner'/>
        </Col>
        
      </section>

      {/* contenido productos */}
      <section className='productos_container'>
        <div className='list_productos'>
          <h6>Recientes</h6>
          <hr className="my-2" />
          <div className='productos'>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
            <div className='slide_product'> <img src={src_kitten} alt='kitten'/> </div>
          </div>
        </div>
        <div className='list_productos'>
          <h6>Lo más destacado</h6>
          <hr className="my-2" />
          <div className='productos'>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
            <div className='slide_product'> <img src={src_cupcake} alt='cupcake'/> </div>
          </div>
        </div>
        <div className='list_productos'>
          <h6>Cerca de ti</h6>
          <hr className="my-2" />
          <div className='productos'>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
            <div className='slide_product'> <img src={src_boots} alt='boots'/> </div>
          </div>
        </div>
        <div className='list_productos'>
          <h6>Promociones</h6>
          <hr className="my-2" />
          <div className='productos'>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
            <div className='slide_product'> <img src={src_ham} alt='hamburger'/> </div>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer>
        <p>&copy; 2020 Grupo BatScript - Todos los derechos reservados</p>
      </footer>

    </>

  );
  
}

export default Main;