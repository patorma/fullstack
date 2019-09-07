const mongoose = require('mongoose')
    //el objeto Schema nos sirve para crear los modelos
const Schema = mongoose.Schema

// Se ejecuta Schema como si fuera una funcion
const ProductSchema = Schema({
    name: String,
    size: Number, //cantidad
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    //esto permite que nuestras colecciones se le agregue por default una propiedad createAt
    //para mostrar cuando se creo y cuando se modifico
    timestamps: true
})

//luego exportamos 
//primer parametro como se llamara la coleccion y el schema que lo define
module.exports = mongoose.model('Products', ProductSchema)