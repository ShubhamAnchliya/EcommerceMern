// const app = require("./app");


// const dotenv = require("dotenv");
// const connectDB = require("./config/database");


// dotenv.config({path :'./config/config.env'});

// const port = process.env.PORT


// connectDB();


// app.listen(port,() =>{
//     console.log(`Server is running on http://localhost:${port}`)
// })








// p2

const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./config/database");

process.on("uncaughtException", err => {
    console.log(`Error:${err.message}`);
    console.log(`shuting down the server due to uncaught Exception`);

    server.close(() => {
        process.exit(1);
    });
});

dotenv.config({path :'./config/config.env'});

const port = process.env.PORT

connectDB();

const server = app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
});


// console.log(rgre);       //  it will show uncaught exception error

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`shuting down the server due to unhandled Rejection`);

    server.close(() => {
        process.exit(1);
    }); 

});





