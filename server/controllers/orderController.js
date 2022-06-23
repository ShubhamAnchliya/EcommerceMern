const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");


exports.newOrder = catchAsyncError( async(req, res, next) => {

        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body;


        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user._id,

        });

        res.status(201).json({
            success: true,
            order,
        });

    }
);




//  get single order by id

exports.getOrderById = catchAsyncError(async(req, res, next)=>{
  
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );

        if(!order){
           
            return next(new ErrorHandler("Order not found by entered id",404))

        }

        res.status(200).json({
            success: true,
            order
        });
        
    }
);



//   get  logged in user order

exports.getUserAllOrders = catchAsyncError(async(req, res, next)=>{
  
    const orders = await Order.find({user: req.user._id});

    res.status(200).json({
        success: true,
        orders
    });
    
}
);


//   get  all users order by admin

exports.getAllUsersOrders = catchAsyncError(async(req, res, next)=>{
  
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    });
    
}
);



// PUT UPDATE ORDER  ADMIN


exports.updateOrder = catchAsyncError(async(req, res, next)=> {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
          }

        if(order.orderStatus === "Delivered") {
            return next(new ErrorHandler("Order have been already delivered",400));
        }

        order.orderItems.forEach(async(order) => {
            await updateStock(order.Product, order.quantity);
        });

        order.orderStatus = req.body.status;

        if (req.body.status === "Delivered") {
            order.deliveredAt = Date.now();
        }

        await order.save({ validateBefore : false });

        res.status(200).json({
            success: true
        });


    } 
);

async function updateStock (id, quantity) {

    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false})

}





//   delete order by admin

exports.deleteOrder = catchAsyncError(async(req, res, next)=>{
  
    const order = await Order.findById(req.params.id);

    if(!order){
           
        return next(new ErrorHandler("Order not found by entered id",404))

    }

    await order.remove()

    res.status(200).json({
        success: true,
        // totalAmount,
        // orders
    });
    
}
);





