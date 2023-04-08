const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', userRoutes);

//error handling for bad requests
app.use((req, res) => {
    console.log("Bad request");
    const error = new Error("Bad request");
    res.status = 404;
    res.json({
        error: error
    });
});


//hard coded url and password for mongodb atlas
const url = "mongodb+srv://akesh:gsDkxiQMf6SxjXDe@assighment.zt9d53g.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(url, {useNewUrlParser: true} 
                    , {useMongoClient: true });

const db = mongoose.connection;

db.on('open',() => {
    console.log('Connected to MongoDB');
})


//hard coded port number
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})