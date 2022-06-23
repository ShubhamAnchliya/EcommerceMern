const express = require("express");
const { newOrder, getOrderById, getUserAllOrders, getAllUsersOrders, updateOrder, deleteOrder ,} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getOrderById);

router.route("/userorders").get(isAuthenticatedUser, getUserAllOrders);

router.route("/admin/allusersorder").get(isAuthenticatedUser,authorizeRoles("admin"), getAllUsersOrders);

router
    .route("/admin/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);


module.exports = router;