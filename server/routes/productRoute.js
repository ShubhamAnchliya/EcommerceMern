// const express = require("express");
// const { getAllProducts, createProduct, updateProductById, deleteProductById, getProductById } = require("../controllers/productController");
// const { isAuthenticatedUser } = require("../middleware/auth");

// const router = express.Router();


// router.route("/products").get(isAuthenticatedUser ,getAllProducts);

// router.route("/product/new").post(createProduct);

// // router.route("/product/:id").put(updateProductById);

// router.route("/product/:id").put(updateProductById).delete(deleteProductById).get(getProductById);


// module.exports = router;









// // p4

// const express = require("express");
// const { getAllProducts, createProduct, updateProductById, deleteProductById, getProductById } = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// const router = express.Router();


// router.route("/products").get( getAllProducts);

// router
//     .route("/product/new")
//     .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// // router.route("/product/:id").put(updateProductById);

// router
//     .route("/product/:id")
//     .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductById)
//     .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById)
//     .get(getProductById);


// module.exports = router;










// p5

const express = require("express");
const { getAllProducts, createProduct, updateProductById, deleteProductById, getProductById, createProductReview, getProductReviews, deleteProductReview, getAdminProducts } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/products").get( getAllProducts);

router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"),getAdminProducts);

router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// router.route("/product/:id").put(updateProductById);

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductById)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById)
    .get(getProductById);


router.route("/product/:id").get(getProductById);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/reviews").get(getProductReviews).delete(deleteProductReview);



module.exports = router;