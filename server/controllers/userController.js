// const ErrorHandler = require("../utils/errorhandler");
// const catchAsyncError = require("../middleware/catchAsyncError");

// const User = require("../models/UserModel");


// // post user SignUp

// exports.userSignUp = catchAsyncError( 
//     async (req, res, next) =>  {

//         const { name, email, password } = req.body;

//         const user = await User.create({

//             name,
//             email,
//             password,
//             avatar: {
//                 public_id: "this is sample id",
//                 url: "profileimage"
//             },
//         });

//         const token = user.getJWTToken();

//         res.status(201).json({
//             success: true,
//             // user,
//             token
//         });

//     }
// );




// // post login user


// exports.userLogIn = catchAsyncError(
//     async(req, res, next) => {
//         const { email, password } = req.body;

//         if(!email || !password){
//             return next(new ErrorHandler("Please enter your email & password", 400));
//         }

//         const user = await User.findOne({email}).select("+password");

//         if(!user) {
//             return next(new ErrorHandler("Invalid email & password"), 401);
//         }

//         const isPasswordMatched = user.comparePassword(password);

//         if(!isPasswordMatched) {
//             return next(new ErrorHandler("Invalid email & password"), 401);
//         }


//         const token = user.getJWTToken();

//         res.status(200).json({
//             success: true,
//             // user,
//             token
//         });



//     }
// );










//p4 

const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/UserModel");
const sendToken = require("../utils/jwtToken");

const sendEmail = require("../utils/sendEmail");

const crypto = require("crypto");

// post user SignUp

exports.userSignUp = catchAsyncError( 
    async (req, res, next) =>  {

        const { name, email, password } = req.body;

        const user = await User.create({

            name,
            email,
            password,
            avatar: {
                public_id: "this is sample id",
                url: "profileimage"
            },
        });

        // const token = user.getJWTToken();

        // res.status(201).json({
        //     success: true,
        //     // user,
        //     token
        // });

        sendToken(user, 201, res);

    }
);




// post login user


exports.userLogIn = catchAsyncError(
    async(req, res, next) => {
        const { email, password } = req.body;

        if(!email || !password){
            return next(new ErrorHandler("Please enter your email & password", 400));
        }

        const user = await User.findOne({email}).select("+password");

        if(!user) {
            return next(new ErrorHandler("Invalid email & password", 401));
        }

        const isPasswordMatched = await  user.comparePassword(password);

        if(!isPasswordMatched) {
            return next(new ErrorHandler("Invalid email & password", 401));
        }


        // const token = user.getJWTToken();

        // res.status(200).json({
        //     success: true,
        //     // user,
        //     token
        // });


        sendToken(user, 200, res);


    }
);




// get logout


exports.logOut = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success : true,
        message: "Logged Out",
    });


});





// post forgot password 

exports.forgotPassword = catchAsyncError(async(req, res, next) => {

    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false });

    const resetPasswordUrl = ` ${req.protocol}://${req.get(
        "host"
    )}/api/resetpassword/${resetToken}`;


    const message = `Your password reset token is \n\n ${resetPasswordUrl} \n\n If you didn’t request this change, please ignore it. `


    try {

        await sendEmail({
            email: user.email,
            subject: 'Mern_Ecommerce Password Reset',
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    }

    catch(error) {

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));

    }


});





// put reset password

exports.resetPassword = catchAsyncError(async (req, res, next) =>
    {
        //creating hash token

        const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

        const user = await User.findOne({
            resetPasswordToken,
            // resetPasswordExpire: { $gt: Date.now() },
        });

        if(!user){
            return next(new ErrorHandler("Reset Password Token is invalid or has been expired ", 400));
        }



        if( req.body.password != req.body.confirmPassword ){
                return next(new ErrorHandler("Password doesn't match confirmPassword ", 400));
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;


        await user.save();

        sendToken(user,200, res);

    }
);




// get user details

exports.getUserDetails = catchAsyncError(async( req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    })

})





//put update login password

exports.updatePassword = catchAsyncError(async( req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await  user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched) {
        return next(new ErrorHandler("old password is incorrect", 401));
    }


    if( req.body.newPassword !== req.body.confirmPassword ){
        return next(new ErrorHandler("Password doesn't match confirmPassword ", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user,200, res);

})





//put update user profile

exports.updateProfile = catchAsyncError(async( req, res, next) => {

   const newUserData = {

        name : req.body.name,
        email: req.body.email  

   };


   const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new : true,
        runValidators: true,
        useFindAndModify: false,
   });

   res.status(200).json({
        success: true,
        // user,
   });

});



// GET ALL USER  admin

exports.getAllUsers = catchAsyncError(async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users

    });

});





// GET USER by Id admin

exports.getUserById = catchAsyncError(async(req, res, next) => {

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User doesn't exist with  id : ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user

    });

});






//put update user role
exports.updateUserRole = catchAsyncError(async( req, res, next) => {

   const newUserData = {

        name : req.body.name,
        email: req.body.email,
        role: req.body.role  

   };


    await User.findByIdAndUpdate(req.params.id, newUserData, {
        new : true,
        runValidators: true,
        useFindAndModify: false,
   });

   res.status(200).json({
        success: true,
        // user,
        message: "User role updated successfully"
   });

});






//delete user by admin id
exports.deleteUser = catchAsyncError(async( req, res, next) => {

    const user = await User.findById(req.params.id,);

    if(!user){
        return next(
            new ErrorHandler(`User doesn't exist with id : ${req.params.id}`)
        );
    }

    await user.remove();
 
    res.status(200).json({
        success: true,
         // user,
        message: " User Deleted Successfully "
    });
 
 });
 
 
 
 
 
 
 
 
 
 
 
 
 







