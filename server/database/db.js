const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log("error occured", error);
    }
};

module.exports = ConnectDB;