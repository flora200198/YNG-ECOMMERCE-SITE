
const mongoose = require('mongoose');
require('dotenv').config();
// const fs = require('fs');
// const path = require('path');
const dbName = process.env.DB_NAME;
const connectDB = async () => {
    try {
        const uri = `${process.env.MONGO_BASE_URI}/${dbName}${process.env.MONGO_OPTIONS}`;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${dbName}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Utility to save data to a local file (e.g., data.json in this folder)
// function saveDataToFile(data, filename = 'data.json') {
//     const filePath = path.join(__dirname, filename);
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
// }


module.exports = {
    connectDB,
    
};

