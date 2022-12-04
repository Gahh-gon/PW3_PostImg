const multer = require('multer')

module.exports = (multer({

    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, '../postImg_front/public/upload/users');
        },
        filename:(req,file,cb) =>{
            cb(null, Date.now().toString() +" "+ file.originalname);
        }
    }),
    fileFilter:(req, file, cb) =>{
        const extensaoimg = ['image/png', 'img/jpe', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoimg){
             return cb(null, true);
        }
        return cb(null ,false)
    }
}));