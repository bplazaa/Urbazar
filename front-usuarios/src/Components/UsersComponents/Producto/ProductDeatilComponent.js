
import {Redirect} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Container} from 'reactstrap';
import {LoadStars} from './LoadResourcesProducts';
import '../../../css/product.css';
import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarComponent from "../navBar/navbarComponent";
import ListaProductos from './ListaProductos';
import axios from 'axios';

function ProductComponent() {
    const [calificaciones,setCalificaciones] = useState("");
    const [load,setLoad] = useState(false)
    let lista_productos = ListaProductos("http://localhost:3000/productos"); 
    let url2 = window.location.href;
    let temp = url2.split('/');
    let id_producto = temp[4].toString();

    
    let producto_selec = {};
    lista_productos.map(producto => {
        if(producto.id == id_producto){
            producto_selec = producto
        }
    });
    useEffect(() => {
        fetch("http://localhost:3000/calificaciones")
        .then(response => response.json())
        .then(data =>{
            console.log(data[1])
            for(let i =0 ; i < data.length ; i++ ){
                if(data[i].idProducto === producto_selec.id){
                    setCalificaciones(data[i])
                    console.log("xd")
                    console.log(calificaciones.comentario)
                }
            }
            setLoad(true)
        })
    },[])

    const seleccionarProducto = id => {
        let listaIdProductos = new Map(); // clave: id, valor: [cantidad, id detalle-carrito]
        /* crear post para detail-carrito, 
        pero antes preguntar si el producto ya existe,
        si el producto ya existe, hacer un update de la cantidad de productos
        el id del detail-producto debe ser 'id_usuario + cant_productos' 
        */
       let producto = {}
       for(let prod of lista_productos){
           // encontrar el producto en lista
           if(prod.id == id){
               producto = prod;
           }
       }
       let p = producto
       p.cantidad = 1
       //obtener idCarrito
       axios.get('/carrito', {"where": {"idUsuario": localStorage.getItem('userId')}})
        .then(respuesta => respuesta.data)
        .then(res => {
            console.log(res);
        });

/*        axios.get('http://localhost:3000/detalle-carrito/')
       .then(response => response.data)
       .then( (res)=> {
           console.log(res)
           for(let i=0; i<res.length; i++){
               if(res[i].idCarrito == idCarrito){
                   listaIdProductos.set(res[i].idProducto,
                        [res[i].cantidad, res[i].idDetalle]);
                   cantProductos++;
                   //let temp = cantProductos;
                   //setCantProductos(temp++);
               }
           }
        }
       ); */

        if(localStorage.getItem("carrito")){
            let inCarrito = false;
            let data = JSON.parse(localStorage.getItem("carrito"))
            for(let j of data.carrito){
                //verifica si ya existe en carrito
                if(p.id == j.id){
                    j.cantidad = j.cantidad + 1;
                    inCarrito = true;

/*                     axios.put('/detalle-carrito/{id}', {
                        "where": {
                          "username":"john",
                          "email":"a@b.com"
                        }
                      }) */

                    break;
                }
            }
            if(!inCarrito){
                data.carrito.push(p)
                let items = parseInt(localStorage.getItem("contador_items"));
                localStorage.setItem("contador_items", items+1)
                let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
                val_actual.textContent = items+1;
            }
            
            localStorage.setItem("carrito",JSON.stringify(data))
        }
        else{
            localStorage.setItem("carrito",JSON.stringify({"carrito":[p]}))
            let items = parseInt(localStorage.getItem("contador_items"));
            localStorage.setItem("contador_items", items+1)
            let val_actual = document.getElementById("cont_icon_carrito").getElementsByTagName("p")[0];
            val_actual.textContent = items+1;
        }
        

        
    }
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    
    
    if( auth && (role=="0" || role=="1")){       
        if(load){
        return (
            <>
        <NavbarComponent />
        <Container className='cont_detail'>   
    
            <div className="row justify-content-center">
                <div className="col-sm-6 col-12" id="imgContainer">
                    <div className="card mb-3" id="imgCard">
                        <div className="card-body">
                          <h5 className="card-title name_product">{producto_selec.nombre}</h5>
                        </div>
                        <div id="card-body-img">
                            {/*<UncontrolledCarousel items={producto_selec.imagen} className="card-img-bottom image"/>*/}
                            <img src={producto_selec.source} className="card-img-bottom image" />
                        </div>
                      </div>
                </div>
                <div className="col-sm-6 col-12" id="productoVendedor">
                    <div className="container" id="productoUpRight">
                        <div className="row justify-content">
                            <div className="col-12">
                                <h5>Vendedor</h5>
                            </div>
                            <div className="col-6">
                                <p>Andrea Rodriguez</p> 
                            </div>
                            <div className="col-6 text-right">
                                <p>
                                    Calificación: 
                                    <div id='estrellas_val'>
                                       <LoadStars estrellas={calificaciones.estrellas}/>
                                    </div>
                                    </p>
                            </div>
                            <div className="col-12" id="productoDescripcion"> 
                                <p>{producto_selec.descripcion}</p>                            
                            </div>
                            
                            <div className="col-6">
                                <h6>Distancia</h6>
                            </div>
                            <div className="col-6">
                                <p>{producto_selec.id} Etapas</p>
                            </div>
                            <div className="col-12" id="cont_comentarios">
                                <h5>Comentarios</h5>
                                <div data-list="[producto_selec.comentarios]" id="comentarios">
                                </div>
                               
                                <ul>
                                    {calificaciones.comentario}
                                </ul>
                                
                            </div>  
                        </div>
                    </div>
                </div>
    
                
    
                <div className="col-sm-6 col-12" id="productoPreFactura">
                    <div className="container" id="productoTwoLeft">
                        <div className="row justify-content">
                            <div className="col-6">
                                <p>Precio</p>
                            </div>
                            <div className="col-6 text-right">
                                <p>$ {producto_selec.precio}</p>
                            </div>
                            <div className="col-6">
                                <p>Cantidad</p>
                            </div>
                            <div className="col-6 text-right">
                                <p> +1- </p>
                            </div>
                            <div className="col-6" id="totlabel">
                                <p>Total</p>
                            </div>
                            <div className="col-6 text-right" id = "valtotlabel">
                                <p>$ {producto_selec.precio}</p>
                            </div>
                            <div className="col-12 text-center">
                                <button type="button" id="btnAgregarCarrito" className="btn btn-primary"
                                onClick = { () => seleccionarProducto(id_producto)}><i className='fas fa-shopping-cart fa-lg'></i>{" "}Agregar a carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                                    
    
              </div>
        </Container>
            </>
    
        );
    
    }
  else{
    return (
        <>
    <NavbarComponent />
    <Container className='cont_detail'>   

        <div className="row justify-content-center">
            <div className="col-sm-6 col-12" id="imgContainer">
                <div className="card mb-3" id="imgCard">
                    <div className="card-body">
                      <h5 className="card-title name_product">{producto_selec.nombre}</h5>
                    </div>
                    <div id="card-body-img">
                        {/*<UncontrolledCarousel items={producto_selec.imagen} className="card-img-bottom image"/>*/}
                        <img src={producto_selec.source} className="card-img-bottom image" />
                    </div>
                  </div>
            </div>
            <div className="col-sm-6 col-12" id="productoVendedor">
                <div className="container" id="productoUpRight">
                    <div className="row justify-content">
                        <div className="col-12">
                            <h5>Vendedor</h5>
                        </div>
                        <div className="col-6">
                            <p>Andrea Rodriguez</p> 
                        </div>
                        <div className="col-6 text-right">
                            <p>
                                Calificación: 
                                <div id='estrellas_val'>
                                   <LoadStars estrellas={5}/>
                                </div>
                                </p>
                        </div>
                        <div className="col-12" id="productoDescripcion"> 
                            <p>{producto_selec.descripcion}</p>                            
                        </div>
                        
                        <div className="col-6">
                            <h6>Distancia</h6>
                        </div>
                        <div className="col-6">
                            <p>{producto_selec.id} Etapas</p>
                        </div>
                        <div className="col-12" id="cont_comentarios">
                            <h5>Comentarios</h5>
                            <div data-list="[producto_selec.comentarios]" id="comentarios">
                            </div>
                           {/*<LoadComentarios comentarios={producto_selec.comentarios} />*/}
                            <ul>
                                {"No hay comentarios disponibles por el momento."}
                            </ul>
                            
                        </div>  
                    </div>
                </div>
            </div>

            

            <div className="col-sm-6 col-12" id="productoPreFactura">
                <div className="container" id="productoTwoLeft">
                    <div className="row justify-content">
                        <div className="col-6">
                            <p>Precio</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>$ {producto_selec.precio}</p>
                        </div>
                        <div className="col-6">
                            <p>Cantidad</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>-1+</p>
                        </div>
                        <div className="col-6" id="totlabel">
                            <p>Total</p>
                        </div>
                        <div className="col-6 text-right" id = "valtotlabel">
                            <p>$ {producto_selec.precio}</p>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" id="btnAgregarCarrito" className="btn btn-primary"
                            onClick = { () => seleccionarProducto(id_producto)}><i className='fas fa-shopping-cart fa-lg'></i>{" "}Agregar a carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            

          </div>
    </Container>
        </>

    );
    }
  }
  else if(auth && (role=="2" || role=="3")){
    return  <Redirect to='/admin/dashboard/report'/> 
    }
    else return  <Redirect to='/login'/> 

  


}
  export default ProductComponent;