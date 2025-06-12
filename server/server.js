const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {reddirSync, readdirSync} = require('fs');

// Load environment variables
require('dotenv').config({ path: '../.env' });

// Connect to MongoDB
connectDB();

//Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '10mb'}));

// Routes 2
// app.use('/api/cars', carRoutes);

// Roustes 3
readdirSync('./routes').map((r) =>
  app.use('/api', require(`./routes/${r}`))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
