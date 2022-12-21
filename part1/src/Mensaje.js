const Mensaje = (params) => {
    console.log(params);
    return <h1 style ={{color:params.color}}>Hola {params.message}, de {params.age}</h1>;
};
export default Mensaje;
