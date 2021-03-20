

require('dotenv').config()
const Product = require('../models/Product')

const connectDB = require('../config/db')

const products = require('../data/products')


// Connecting databasecd
connectDB()

const seedProducts = async () => {

        try {
            
            await Product.deleteMany()
            console.log('Products are deleted');

            await Product.insertMany(products)
            console.log('All products are added');

            process.exit()

        } catch (error) {
            console.log(error.message);
            process.exit()
        }
}

seedProducts()