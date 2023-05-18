const express = require('express');

const bodyParser = require('body-parser');
const connectdb=require('./config/database')
const app = express();
const router=require('./router/index')
const cors =require('cors');
// Body parser middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
// MongoDB connection string
// const mongoURI = 'mongodb://localhost/EntrancePlus';

// Connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// Define a schema for the user data


// Create a model for the user data


// Define a route for saving the user data

app.use('/',router);
// Start the server
// const port = process.env.PORT || 3001;
app.listen(3001,async () =>{
    await connectdb();
    // console.log(`Server started on port ${port}`)
    console.log("Server started at 3001")
}
);
