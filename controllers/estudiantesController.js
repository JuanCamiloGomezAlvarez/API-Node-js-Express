class EstudiantesController{
  constructor(){

  }

  consultar(req, res){
    res.json({mensaje: "Consulta estudiantes desde clase"});
  }

  consultarDetalle(req, res){
    res.json({mensaje: "Consulta de un estudiante desde clase"});
  }

  ingresar(req, res){
    res.json({mensaje: "Ingreso de estudiante desde clase"});
  }

  actualizar(req, res){
    res.json({mensaje: "Actualización de estudiante desde clase"});
  }

  borrar(req, res){
    res.json({mensaje: "Eliminacion de estudiante desde clase"});
  }
}

module.exports = new EstudiantesController();