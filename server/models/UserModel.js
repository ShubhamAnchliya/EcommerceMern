// const mongoose = require("mongoose");
// const validator = require("validator");

// const bcrypt = require("bcryptjs");

// const jwt = require("jsonwebtoken");

// const crypto =  require("crypto");



// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required:[true, "Please enter your name"],
//         maxLength:[30, "Name cannot exceed 30 characters"],
//         minLength:[4, "Name should have min 4 characters"],
//     },
//     email: {
//         type: String,
//         required:[true, "Please enter your email"],
//         unique: true,
//         validate:[validator.isEmail, "Please enter valid email"]
//     },
//     password: {
//         type: String,
//         required: [true, "Please enter your password"],
//         minLength: [6, "Name should have min 6 characters"],
//         select: false
//     },
    
//     avatar: 
//         {
//             public_id: {
//                 type: String,
//                 required: true
//             },
//             url: {
//                 type: String,
//                 required: true
//             },
//         }
//     ,
//     role: {
//         type: String, 
//         default: "user",
//     },

//     resetPasswordToken: String,
//     resetPasswordExpire: Date,
    
// });

// userSchema.pre("save", async function(next){

//     if(!this.isModified("password")){
//         next();
//     }

//     this.password = await bcrypt.hash(this.password,10)

// });


// // jwt
// userSchema.methods.getJWTToken = function() {
//     return  jwt.sign({id: this._id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRE
//     });
// };

// // compare password
// userSchema.methods.comparePassword = async function(enteredpassword) {
//     return await bcrypt.compare(enteredpassword, this.password);

// };



// // generating password reset token

// userSchema.methods.getResetPasswordToken = function() {

//     // generate token

//     const resetToken = crypto.randomBytes(20).toString("hex");


//     // hashing and adding resetPasswordToken to schema

//     this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//     this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    
//     return  resetToken;


// };




// module.exports = mongoose.model('User', userSchema);







//24  add address and phone , dob

const mongoose = require("mongoose");
const validator = require("validator");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const crypto =  require("crypto");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please enter your name"],
        maxLength:[30, "Name cannot exceed 30 characters"],
        minLength:[4, "Name should have min 4 characters"],
    },
    email: {
        type: String,
        required:[true, "Please enter your email"],
        unique: true,
        validate:[validator.isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Name should have min 6 characters"],
        select: false
    },
    address:
        {
       
            place : {
                type: String,
                // required:[true, "Please enter your place"],
                default: ""
            },
            city: {
                type: String,
                // required:[true, "Please enter your city"],
                default: ""
            },
            state: {
                type: String,
                // required:[true, "Please enter your state"],
                default: ""
            },
            country: {
                type: String,
                // required:[true, "Please enter your country"],
                default: ""
            },
            pincode: {
                type: Number,
                // required:[true, "Please enter your pincode"],
                default: ""
            },
        }
    ,
    phoneNo: {
        type: Number,
        // required:[true, "Please enter your phoneNo"],
        default: ""
    },
    avatar: 
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ,
    role: {
        type: String, 
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
});

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10)

});


// jwt
userSchema.methods.getJWTToken = function() {
    return  jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// compare password
userSchema.methods.comparePassword = async function(enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);

};



// generating password reset token

userSchema.methods.getResetPasswordToken = function() {

    // generate token

    const resetToken = crypto.randomBytes(20).toString("hex");


    // hashing and adding resetPasswordToken to schema

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    
    return  resetToken;


};




module.exports = mongoose.model('User', userSchema);

