import express from "express"
import { ControllerFirestore } from "../controllers/productsControllerFirestore.js"

const productsControllerFirestore = new ControllerFirestore
export const productsRouterFirestore = express.Router()

//get products all

productsRouterFirestore.get("/", productsControllerFirestore.getAll)

//get product id

productsRouterFirestore.get("/:id", productsControllerFirestore.getById)

//add product

productsRouterFirestore.post("/", productsControllerFirestore.add)

//delete product by id

productsRouterFirestore.delete("/:id", productsControllerFirestore.delete)

//update product by id

productsRouterFirestore.put("/:id", productsControllerFirestore.update)