// const mongoose = require("mongoose");

// const connectDB = () => {

//     mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true, 
//         // useCreateIndex:true
//     }).then(
//         (data)=>{
//             console.log("connected to mongodb");
//             // console.log(`connected to mongodb : ${data.connection.host}`);
//         }
//     ).catch((err)=>{
//         console.log(err)
//     })

// }


// module.exports = connectDB;





// p2

const mongoose = require("mongoose");

const connectDB = () => {

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true, 
        // useCreateIndex:true
    }).then(
        (data)=>{
            console.log("connected to mongodb");
            // console.log(`connected to mongodb : ${data.connection.host}`);
        }
    )

}


module.exports = connectDB;


