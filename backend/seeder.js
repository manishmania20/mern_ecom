import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/usersModel.js'
import Product from './models/productsModel.js'
import Order from './models/ordersModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const insertData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Inserted!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse)
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Deleted!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    deleteData()
}
else {
    insertData()
}

