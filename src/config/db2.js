import admin from "firebase-admin";
import fs from "fs"

var serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("🔥 conectados a Firestore")

const db2 = admin.firestore()

export default db2

// const products = db.collection('products')

// const product1 = await products.add({title: "prod2", price: 20, thumbnail: "img2"})