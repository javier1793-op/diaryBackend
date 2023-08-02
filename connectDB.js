const mongoose = require ("mongoose");

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb+srv://javier17utn:N7dEYrAXrD8vBykY@cluster0.8ig9wxj.mongodb.net/diary');
        console.log(`Database Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB