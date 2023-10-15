const express = require('express');
const bodyParser = require('body-parser');
const {rateLimit} = require('express-rate-limit');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const mongoose = require('mongoose'); //*******//
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const Router = require('./src/Routes/api');





const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
});


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());
app.use(limiter);

app.use(Router);

//mongoose connection:
let URI = `mongodb://127.0.0.1:27017/Student_Register`;

mongoose.connect(URI)
    .then(()=>{
        console.log('local mongodb server is connected!');
    })
    .catch(err=>{
        console.log(err.message);
    })






//For Home page: 
app.use('/', (req, res)=>{
    res.status(200).send('<h1 style= "text-align: center; background-color: lightBlue; color: darkBlue;">Home page</h1>')
})



//For unknown routes: 
app.use('*', (req, res)=>{
    res.status(500).send('<h1 style= "text-align: center;">Not Found!</h1>');
})



module.exports = app;