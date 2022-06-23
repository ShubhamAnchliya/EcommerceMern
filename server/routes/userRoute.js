const express = require("express");
const { userSignUp, userLogIn, logOut, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getUserById, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/signup").post(userSignUp);

router.route("/login").post(userLogIn);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:token").put(resetPassword);

router.route("/updatepassword").put(isAuthenticatedUser, updatePassword);

router.route("/userdetails").get(isAuthenticatedUser  , getUserDetails);

router.route("/logout").get(logOut);

router.route("/updateprofile").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers);

// router.route("/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getUserById);
// router.route("/updateuserrole").put(isAuthenticatedUser, updateUserRole);


router
    .route("/admin/user/:id")
    .get(isAuthenticatedUser,authorizeRoles("admin"),getUserById)
    .put(isAuthenticatedUser,authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser,authorizeRoles("admin"), deleteUser);



module.exports = router;