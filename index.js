const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

//Middleware to parse JSON

app.use(express.json());

//Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParer: true,
    useUnifiedTopology: ture
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect MongoDB", err));


//Routes

app.use('/users', userRoutes);

//Start the server
app.listen(port, () => {
    console.log(`Server runing on PORT=${process.env.PORT}`)
})