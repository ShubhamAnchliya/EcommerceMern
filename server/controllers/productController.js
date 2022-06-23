// const Product = require("../models/ProductModel");


// // post api  createProduct
//  exports.createProduct = async (req, res, next)=> {
//     const product = await Product.create(req.body);

//     res.status(201).json({
//         success: true,
//         product
//     })
// }




// // get api getAllProducts
// exports.getAllProducts =  async (req, res) =>{

//     const products = await Product.find();

//         res.status(200).json({
//             success: true,
//             products
//             // message:"product route working fine"
//         })
// }


// //put api update Product by id
// exports.updateProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return res.status(500).json({
//             success: false,
//             message:"Product not found"
        
//         })

//     }

//     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false
//     });

//     res.status(200).json({
//         success: true,
//         product
//     })
       
// }


// //  Delete Api delete product by id


// exports.deleteProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return res.status(500).json({
//             success: false,
//             message:"Product not found"
        
//         })

//     }

//     product = await product.remove()

//     res.status(200).json({
//         success: true,
//         message: "Product deleted successfully"
//     })
       
// }




// //  get product by id

// exports.getProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return res.status(500).json({
//             success: false,
//             message:"Product not found"
        
//         })

//     }

//     res.status(200).json({
//         success: true,
//         product
//     })
       
// }









// // p2

// const Product = require("../models/ProductModel");
// const ErrorHandler = require("../utils/errorhandler");
// const catchAsyncError = require("../middleware/catchAsyncError");



// // post api  createProduct
//  exports.createProduct = async (req, res, next)=> {
//     const product = await Product.create(req.body);

//     res.status(201).json({
//         success: true,
//         product
//     })
// }




// // get api getAllProducts
// exports.getAllProducts =  async (req, res) =>{

//     const products = await Product.find();

//         res.status(200).json({
//             success: true,
//             products
//             // message:"product route working fine"
//         })
// }


// //put api update Product by id
// exports.updateProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return next(new ErrorHandler("Product not found",404))
//     }

//     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false
//     });

//     res.status(200).json({
//         success: true,
//         product
//     })
       
// }


// //  Delete Api delete product by id


// exports.deleteProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return next(new ErrorHandler("Product not found",404))
//     }

//     product = await product.remove()

//     res.status(200).json({
//         success: true,
//         message: "Product deleted successfully"
//     })
       
// }




// //  get product by id

// exports.getProductById =  async (req, res, next) =>{

//     let product = await Product.findById(req.params.id);

//     if(!product){
//         return next(new ErrorHandler("Product not found",404))
//     }

//     res.status(200).json({
//         success: true,
//         product
//     })
       
// }





// p3

const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const { rawListeners } = require("../models/ProductModel");



// post api  createProduct
 exports.createProduct = catchAsyncError(
    
    async (req, res, next)=> {

        req.body.user = req.user.id;

        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        });
    }
    
 );



// get api getAllProducts
exports.getAllProducts =  catchAsyncError(
    
    async (req, res) =>{

        const resultPerPage = 5;

        const productCount = await Product.countDocuments();

        const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

        // const products = await Product.find();

        const products = await apiFeatures.query;

        res.status(200).json({
            success: true,
            products
            // message:"product route working fine"
        })
    }
);




// Get All Product (Admin)
exports.getAdminProducts = catchAsyncError(async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });



//put api update Product by id
exports.updateProductById = catchAsyncError(

    async (req, res, next) =>{

        let product = await Product.findById(req.params.id);

        if(!product){
            return next(new ErrorHandler("Product not found",404))
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })
        
    }
);

//  Delete Api delete product by id


exports.deleteProductById =  catchAsyncError(

    async (req, res, next) =>{

        let product = await Product.findById(req.params.id);

        if(!product){
            return next(new ErrorHandler("Product not found",404))
        }

        product = await product.remove()

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
        
    }

);


//  get product by id

exports.getProductById =   catchAsyncError( 

    async (req, res, next) =>{

        let product = await Product.findById(req.params.id);

        if(!product){
            return next(new ErrorHandler("Product not found",404))
        }

        res.status(200).json({
            success: true,
            product,
            // productCount
        })
        
    }

);





//  create and review update

exports.createProductReview = catchAsyncError(async (req, res, next) =>{

    const {rating, comment, productid} = req.body;

    const review = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productid);

    const isReviewed = product.reviews.find((rev)=> rev.user.toString() === req.user._id.toString());

    if(isReviewed){

        product.reviews.forEach((rev)=> {
            if(rev.user.toString() === req.user._id.toString())
        rev.rating = rating,
        rev.comment = comment

        })

    }

    else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach(rev => {
        avg+=rev.rating;
    });

    product.ratings = avg/product.reviews.length;

    await product.save({validateBeforeSave: false});


    res.status(200).json({
        success: true,
        message: "Successfully Reviewed"
    });


});




// GET all reviews of a product

exports.getProductReviews = catchAsyncError(async(req, res, next) => {

    const product = await Product.findById(req.query.id);

    if(!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        reviews: product.reviews
    })

});




// delete review 

exports. deleteProductReview = catchAsyncError(async(req, res, next) => {


    const product = await Product.findById(req.query.productId);

    if(!product) {
        return next(new ErrorHandler("Product not found",404));
    }

   const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id);

   let avg = 0;

   reviews.forEach(rev => {
        avg+=rev.rating;
    });

   const ratings = avg/reviews.length;

   const numOfReviews = reviews.length;

   await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews

   },{
        new: true,
        runValidators: true,
        useFindAndModify:false

   });


    res.status(200).json({
        success:true,
        message: "Review deleted successfully"
     
    })


})