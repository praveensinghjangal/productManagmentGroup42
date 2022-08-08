const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const cartController = require("../controllers/cartController")

const orderController = require("../controllers/orderController")



const mw = require("../middlewares/auth")



//router.post("/register",userController.createUser)
router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/user/:userId", mw.authenticated,userController.getuserdata)
router.put("/user/:userId", mw.authenticated,userController.updateuser)


router.post("/products", productController.createProduct)
router.get("/products", productController.getproduct)
router.get("/products/:productId", productController.getproductid)
router.put("/products/:productId", productController.updateproduct)
router.delete("/products/:productId", productController.deleteproduct)



router.post("/users/:userId/cart",mw.authenticated, cartController.createCart )
router.put("/users/:userId/cart",mw.authenticated, cartController.updateCart )
router.get("/users/:userId/cart",mw.authenticated, cartController.getCart )
router.delete("/users/:userId/cart",mw.authenticated, cartController.delCart )
 


router.post("/users/:userId/orders",mw.authenticated, orderController.orderCreate )
router.put("/users/:userId/orders",mw.authenticated, orderController.updateOrder )

router.all("/*",(req,res)=>{
    return res.status(404).send({status:false,message:"Url not found"})
});



module.exports = router;