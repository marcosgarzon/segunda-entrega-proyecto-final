import db2 from "../config/db2.js";
import {ControllerFirestore} from './productsControllerFirestore.js';

export class cartsController{
    
    async getAll(req , res) {
        try{
            let response = [];
            const snapshot = await db2.collection("carts").get()
            await snapshot.forEach(doc => response.push({
                id: doc.id,
                ...doc.data()
                }));
            return res.status(200).json(response) ;
        }catch(err){
            return res.status(400).json({error: error, ruta: req.originalUrl, metodo: req.method})
        }
    }

    async add(req, res){
        let { body } = req;
        try {
            const now = new Date();
            const timestamp = now.toLocaleString();
            const products = [];
            products.push(req.body)
            const createdCart = await db2.collection("carts").add({timestamp, products});
            res.status(200).json({message: `Carrito agregado con id: ${createdCart.id}`})
        }catch (error){
            res.status(400).json({error: error, ruta: req.originalUrl, metodo: req.method})
        }
    }

    async delete(req, res){
        const { id } = req.params
        try {
            if (!id) return res.status(400).json( {message: "ID requerido"});
            const cartDeleted = await db2.collection("carts").doc(id).delete()
            if (!cartDeleted) return res.status(404).json({ message: 'Carrito no existe'})
            res.status(200).json({message: `Carrito con id: ${id}, eliminado`})
        }catch (error){
            res.status(400).json({error: error, ruta: req.originalUrl, metodo: req.method})
        }
    }

    async getById(req, res){
        try {
            const { id } = req.params
            if (!id) return res.status(400).json({message: "ID requerido"});
            const item = await db2.collection("carts").doc(id).get()
            if (item.exists) {
                let cart = { id:id, ...item.data() }
                return res.status(200).json(cart)
            }else{
                return res.status(404).json({ message: "Carrito no existente"})
            }       
        } catch(err) {
            return res.status(400).json({ message:"Carrito no encontrado"});
        }
    }

    async update(req, res){
        try {
            const { id } = req.params
            if (!id) return res.status(400).json( {message: "ID requerido"});
            const item = await db2.collection("carts").doc(id).get()
            if (item.exists) {
                await db2.collection("carts").doc(id).set({product: req.body})
                return res.status(200).json({ message: 'Carrito actualizado!'})
            }else{
                return res.status(404).json({ message: 'Carrito para actualizar no encontrado!' })
            }
        } catch(err) {
            console.log(err);
            return res.status(400).json({ message: 'Falló actualizar el carrito'})
        }
    }
}
