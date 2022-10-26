import express from "express"
import { cartsController } from "../controllers/cartsControllerFirestore.js"

const cartsControllerFirestore = new cartsController
export const cartsRouterFirestore = express.Router()

//get carts all

cartsRouterFirestore.get("/", cartsControllerFirestore.getAll)

//get carts id

cartsRouterFirestore.get("/:id", cartsControllerFirestore.getById)

//add carts

cartsRouterFirestore.post("/", cartsControllerFirestore.add)

// delete carts by id

cartsRouterFirestore.delete("/:id", cartsControllerFirestore.delete)

//update carts by id

cartsRouterFirestore.put("/:id", cartsControllerFirestore.update)