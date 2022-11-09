const express = require('express')
const path = require('path')

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
require('./db/db-connection')

const Product = require('./models/product.model')

app.get('/', (req, res) => {
    res.render('index-page')
})

// app.get('/shopping', (req, res) => {
//     Product
//         .find()
//         .then(allProducts) => {
//         res.render('shopping', invent: allProducts})
//         })
//         .catch (err=> console.log(err))
//     })




app.get('/shopping', (req, res) => {

    Product
        .find()
        .sort({ price: 1 })
        .then(allProducts => {
            res.render('shopping', { invent: allProducts })
        })
        .catch(err => console.log(err))
})


app.listen(5005, () => console.log('APP LISTENING'))