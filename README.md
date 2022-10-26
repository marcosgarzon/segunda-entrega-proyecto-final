# Segunda-Entrega-Proyecto-Final   
Alumno: Marcos Garzon

En la ruta del repositorio:  
segunda-entrega-proyecto-final/src/config/  
se encuentra db.js (mongo) y db2.js(firestore) para cambiar el punto de conexión.


# MONGO ENDPOINTS  

# PRODUCTOS:  

//GET productso all  
http://localhost:8080/productos/  

//GET producto id  
http://localhost:8080/productos/:id   

//POST producto  
http://localhost:8080/productos/  

BODY EJEMPLO:  
{  
"nombre": "producto1",  
"descripcion": "desc prod 1",  
"codigo": "1",  
"foto": "imagen producto 1",  
"precio": 100,  
"stock": 1  
}  
  
//DELETE product by id  
http://localhost:8080/productos/:id  
  
//update product by id  
http://localhost:8080/productos/:id  
  
BODY EJEMPLO:  
{  
"nombre": "producto 1 ACTUALIZADO",  
"descripcion": "desc prod 1 ACTUALIZADO",  
"codigo": "1",  
"foto": "imagen producto 1 ACTUALIZADO",  
"precio": 101,  
"stock": 2  
}

# CARRITO:    
  
//GET carrito  
http://localhost:8080/carrito/  
  
//POST carrito  
http://localhost:8080/carrito/  
  
BODY EJEMPLO:  
{  
"_id": "1",  
"nombre": "Producto para el carrito 1",  
"descripcion": "producto en carrito 1",  
"codigo": "3",  
"foto": "imagen producto 1 en carrito",  
"precio": 102,  
"stock": 3  
}  
  
//DELETE carrito   
http://localhost:8080/carrito/:id  
  
//GET id de carrito  
http://localhost:8080/carrito/:id(de carrito/productos  
  
//PUT producto en carrito   
http://localhost:8080/carrito/:id/productos  
  
BODY EJEMPLO:  
{  
"_id": "1",  
"nombre": "nuevo add con body 2",  
"descripcion": "desc prod 6",  
"codigo": "6",  
"foto": "imagen producto 6",  
"precio": 600,  
"stock": 6  
}  
  
//DELETE producto en carrito por id  
http://localhost:8080/carrito/:id(carrito)/productos/:_id(producto)  
  
# FIRESTORE ENDPOINTS    
  
# PRODUCTS    
  
//GET products  
  
http://localhost:8080/products  
  
//GET product id  
  
http://localhost:8080/products/:id  
  
//POST product  
  
http://localhost:8080/products/  
  
BODY EJEMPLO:  
{  
"nombre": "Ejemplo body producto 1",  
"descripcion": "prueba 1",  
"codigo": "1",  
"foto": "imagen producto 1",  
"precio": 100,  
"stock": 1  
}  
  
//DELETE product por id  
  
http://localhost:8080/products/:id  
  
//PUT product por id   
  
http://localhost:8080/products/:id  
  
{  
"nombre": "Ejemplo body producto 1 ACTUALIZADO",  
"descripcion": "prueba 1 ACTUALIZADO",  
"codigo": "1",  
"foto": "imagen producto 1 ACTUALIZADO",  
"precio": 200,  
"stock": 2  
}  

# CARTS
    
//GET carts all      
      
http://localhost:8080/carts/     
    
//GET cart por id  
  
http://localhost:8080/carts/:id     
  
//POST cart   
    
http://localhost:8080/carts/   
  
BODY EJEMPLO:  
{    
"nombre": "producto 1",  
"descripcion": "prueba 1",  
"codigo": "1",  
"foto": "imagen producto 1",  
"precio": 100,  
"stock": 1  
}  
   
// DELETE cart por id  
  
http://localhost:8080/carts/:id     
  
//PUT product by id

http://localhost:8080/carts/:id(carrito)
  
BODY EJEMPLO:  
  
{      
"nombre": "producto 2",    
"descripcion": "prueba 2",    
"codigo": "2",    
"foto": "imagen producto 2",    
"precio": 200,    
"stock": 2    
}   







