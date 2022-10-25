import db2 from "../config/db2.js";

export class ControllerFirestore{

    async getAll(req , res) {
        try{
            let response = [];
            const snapshot = await db2.collection("products").get()
            await snapshot.forEach(doc => response.push({
                id: doc.id,
                ...doc.data()
                }));
            return res.status(200).json(response) ;
        }catch(err){
            return res.status(400).json({error: error, ruta: req.originalUrl, metodo: req.method})
        }
    }

    async getById(req, res){
        try {
            const { id } = req.params
            //Validations
            if (!id) return res.status(400).json({message: "ID requerido"});
            const item = await db2.collection("products").doc(id).get()
            
            if (item.exists) {
                let product = { id:id, ...item.data() }
                return res.status(200).json(product)
            }else{
                return res.status(404).json({ message: "Producto no existente"})
            }       
        } catch(err) {
            return res.status(400).json({ message:"Producto no encontrado!"});
        }
    }

    async add(req, res){
        let { body } = req;
        try {
            const response = await db2.collection("products").add(req.body)
            res.status(200).json({message: `Producto agregado con id: ${response.id}`})
        }catch (error){
            res.status(400).json({error: error, ruta: req.originalUrl, metodo: req.method})
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params
            if (!id) return res.status(400).json( {message: "ID requerido"});
            const productDeleted = await db2.collection("products").doc(id).delete()
            if (!productDeleted) return res.status(404).json({ message: 'Producto no existente'})
            return res.status(200).json({ message: 'Producto borrado!'})
        }catch(err){
            console.log(err);
            return res.status(400).json({ message: 'Falló borrar el producto'})
        }
    }
    

    async update(req, res){
        try {
            const { id } = req.params
            if (!id) return res.status(400).json( {message: "ID requerido"});
            const item = await db2.collection("products").doc(id).get()
            if (item.exists) {
                await db2.collection("products").doc(id).set(req.body)
                return res.status(200).json({ message: 'Producto actualizado!'})
            }else{
                return res.status(404).json({ message: 'Producto para actualizar no encontrado!' })
            }
        } catch(err) {
            console.log(err);
            return res.status(400).json({ message: 'Falló actualizar el producto'})
        }
    }
}

