const multer = require("multer")

const destination = (req ,file, collback) =>{
    collback(null,'uploads/')
}
const filename =(req, file, callback) => {
    callback(null, file.originalname)
}
const storage = multer.diskStorage({destination, filename})
const upload = multer({storage})

module.exports= upload;