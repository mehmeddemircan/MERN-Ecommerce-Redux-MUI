require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require('./routes/productRoutes');
const products = require("./data/products")
const errorMiddleware = require('./middleware/error')
const morgan = require('morgan')
const app = express();

// Connecting to database
connectDB();


if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev')) 
}

// Middlewares
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connecting Routes
app.use("/api", userRoutes);
app.use('/api',productRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});



// Error Middleware usage
app.use(errorMiddleware)



// Handle uncaught exceptions
process.on('uncaughtException',(err)=>{
  console.log(`ERROR : ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1)
})



const server = app.listen(PORT,()=> 
{
  console.log(`Server Started at Port ${PORT}
  => http://localhost:${PORT}  in ${process.env.NODE_ENV} mode`)

})

// Handle Unhandled Promise rejections
process.on('unhandledRejection',(err)=>{
  console.log(`ERROR :  ${err.message}`);
  console.log(`Shutting down the server due to Unhandled rejection`);

  server.close(()=> {
      process.exit(1)
  })
})
