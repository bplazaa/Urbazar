
export default {
    container:{
        flex: 1,
        flexDirection:'column'
    },
    contenido:{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,

    },
    headers:{
        fontSize: 15,
        color: "gray",
        marginBottom: 10
    },
    cont_Carrusel:{
        marginTop: 5,
        backgroundColor: 'white',
        padding: 5
    },
    boxProduct:{        
        borderRadius: 5,
        height: 250,
        marginLeft: 5,
        marginRight: 5, 
        borderWidth: 0.5,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
        borderColor: "#e6e6e6"

    },
    line:{
        height: 1,
        backgroundColor: 'rgba(0, 0, 0 ,0.1)',
        alignSelf: 'stretch'
    },
    producto_titulo:{
        fontSize: 30,
        fontWeight: "bold"
    },
    producto_vendedor_titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10
    },
    producto_compra: {
        flexDirection: "row",
    },
    producto_compra_etiqueta:{
        width: "50%",
    },
    producto_compra_valores:{
        width: "50%",
    },
    producto_dist:{
        flexDirection: "row",
    },
    producto_texto:{
        fontSize: 19,
    },
    producto_etapa: {
        fontSize: 19,
        marginTop: 12,
        width: "50%",
    },
    producto_texto_dist:{
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
        width: "50%",
    },
    boton_compra:{
        fontSize: 19,
        marginTop: 5,
    },
}