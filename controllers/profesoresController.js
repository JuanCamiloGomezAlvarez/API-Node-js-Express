class ProfesoresController{
  constructor(){

  }

  consultar(req, res){
    res.json({mensaje: "Consulta profesores desde clase"});
  }

  consultarDetalle(req, res){
    res.json({mensaje: "Consulta de un profesor desde clase"});
  }

  ingresar(req, res){
    res.json({mensaje: "Ingreso de profesor desde clase"});
  }

  actualizar(req, res){
    res.json({mensaje: "Actualización de profesor desde clase"});
  }

  borrar(req, res){
    res.json({mensaje: "Eliminacion de profesor desde clase"});
  }
}

module.exports = new ProfesoresController();