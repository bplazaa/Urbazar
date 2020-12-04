import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Producto = ({nombre, precio, foto_src, id}) => {
    
    /* const {nombre, foto, precio} = producto_card; */
    
    return (  
        <a href='/productdetail'>
        <div className='slide_product'> 
            {/* importar card */}
            <Card onClick={ console.log("Dio click")}>
                <CardImg className="img" top width='100%' src={foto_src} alt={nombre} />
                <CardBody>
                    <CardTitle id="name_product" tag='h5'>{nombre}</CardTitle>
    <               CardSubtitle tag='h6' className='mb-2 text-muted'>${precio}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
        
        </a>
        );
        
}
 
export default Producto;