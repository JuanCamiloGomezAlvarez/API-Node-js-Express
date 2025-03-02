const express = require("express");

const app = express();  

const port = 6500;

app.get("/", (req, res ) => {
  res.send("Hola mundo");
});

app.listen(port, () =>{
  console.log("servicio escuchando en el puerto " + port);
});