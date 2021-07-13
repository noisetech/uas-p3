const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    namaProduk: {
        type: String
    },
    harga: {
        type: Number
    },
    ukuran: {
        type: String,
        default: '2020'
    },
    jenis: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('produk', MovieSchema)