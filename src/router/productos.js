import express from "express"
import { Controller } from "../controllers/productsController.js"

const productsController = new Controller
export const productsRouter = express.Router()

//get products all
productsRouter.get("/", productsController.getAll)

//get product id
productsRouter.get("/:id", productsController.getById)

//add product
productsRouter.post("/", productsController.add)

//delete product by id
productsRouter.delete("/:id", productsController.delete)

//update product by id
productsRouter.put("/:id", productsController.update)