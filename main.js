import admin from 'firebase-admin'
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Base de datos conectada')
const db = admin.firestore()
const productos = db.collection('productos')

// agregar nuevos documentos
// const producto1 = await productos.add({ nombre: 'PC Gamer', precio: 6900, stock: 10})
const producto2 = await productos.add({ nombre: 'Teclado', precio: 100, stock: 100})

// lectura de documentos
const snapshot = await productos.get()
snapshot.forEach(doc => {
    console.log({ id: doc.id, ...doc.data()})
})

//actualizar documento
await productos.doc(producto2.id).update({ stock: 80 })


