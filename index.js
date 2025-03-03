const express = require("express");
const app = express();  
const estudiantesRoutes = require("./routes/estudiantesRoutes.js");
const port = 6500;

app.get("/", (req, res ) => {
  res.send("Hola mundo");
});

app.use("/estudiantes", estudiantesRoutes);

app.listen(port, () =>{
  console.log("servicio escuchando en el puerto " + port);
});