import './src/config/db.js'
import express from 'express';
import { productsRouter } from './src/router/productos.js'
import { cartRouter } from './src/router/carrito.js'


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

//Routes
app.use("/productos", productsRouter);
app.use("/carrito", cartRouter);


//en caso de solicitar una ruta no implementada
app.get('*', (req, res) => {
  res.status(404).json({error: "Not Found", ruta: req.originalUrl, metodo: req.method});
})

const server = app.listen(8080, ()=>{
console.log(`server started http://localhost:8080`)
})
server.on('error', (err)=> console.log(err))