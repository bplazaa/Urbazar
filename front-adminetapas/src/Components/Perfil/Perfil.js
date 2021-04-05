import { Card } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { Container, Row ,Col, CardImg, CardBody,CardTitle,CardSubtitle,Button } from 'reactstrap';
import { Redirect} from 'react-router-dom';
import Formulario from './Formulario';
import DatosPerfil from  './DatosPerfil';
import axios from 'axios';
const Perfil = () => {
    const auth = parseInt(localStorage.getItem("auth"), 10)
    const role= localStorage.getItem("role");
    const [editar,setEditar] = useState(false);
    const [load,setLoad] = useState(false)
    const [user,setUser] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/personas/${localStorage.getItem("userId")}`).then((result) => {
            setUser(result.data);
            setLoad(true)
        })
    }, []);
  
    if(auth && role=="2"){
        return (
            <Container className="mt-5 ml-3">
                <Container>
                    <Row>
                        <Col sm="4">                  
                            <Card>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                <CardImg className="rounded-circle mx-auto px-auto w-75" src="https://via.placeholder.com/150" alt="perfil">
                                </CardImg>
                                </div>
                                <CardBody className="text-center">
                                <CardTitle tag="h5">@{user.username}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Urbanizacion la Joya</CardSubtitle>
                                <button className="btnUapp" onClick={e => {setEditar(!editar)}}>Editar Perfil</button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="8">
                            <Card>
                                <CardBody>
                                    { load ? editar ?  <Formulario user={user}></Formulario> :<DatosPerfil user={user}></DatosPerfil> : <div></div> }
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
    else{
        return <Redirect to="/"/>
    }
}

export default Perfil;
