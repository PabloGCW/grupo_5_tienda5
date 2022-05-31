const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/productsController")
const multer = require ("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,file , cb)=>{
        cb(null, "public/images/products")
    },

    filename: (req,file , cb)=>{
        const namePicture = file.fieldname +  "-" + Date.now() + path.extname(file.originalname)
        cb (null, namePicture)
    }
}

)

const upload = multer({storage: storage})

router.get("/carrito", mainController.productCart);

router.get("/productSend", mainController.productSend);

router.get("/detalleProducto/:id", mainController.productDetail);

router.get("/creacionProducto", mainController.productCreate);
router.post("/creacionProducto", upload.any(), mainController.store)


router.get("/edicionProducto/:id", mainController.productEdition);



module.exports = router;