const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/productsController")
const multer = require ("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/images/products")
    },

    filename: (req, file, cb)=>{
        const namePicture = Date.now() + "-" + file.originalname
        //  + path.extname(file.originalname)
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
router.patch("/edicionProducto/:id", upload.any(), mainController.productUpdate);

router.get("/eliminacionProducto/:id", mainController.productDelete)
router.delete("/eliminacionProducto/:id", mainController.productDeleted)



module.exports = router;