import express from "express"
import { cartsController } from "../controllers/cartsControllerFirestore.js"

const cartsControllerFirestore = new cartsController
export const cartsRouterFirestore = express.Router()

//get products all

cartsRouterFirestore.get("/", cartsControllerFirestore.getAll)

//get product id

cartsRouterFirestore.get("/:id", cartsControllerFirestore.getById)

//add product

cartsRouterFirestore.post("/", cartsControllerFirestore.add)

// delete product by id

cartsRouterFirestore.delete("/:id", cartsControllerFirestore.delete)

//update product by id

cartsRouterFirestore.put("/:id", cartsControllerFirestore.update)