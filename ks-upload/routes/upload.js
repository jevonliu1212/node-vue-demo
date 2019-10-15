var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

const upload = multer({
  dest:'/tmp'
})
router.post('/uploadfile',upload.single('file'),(req,res)=>{
	 fs.rename('/tmp/'+req.file.filename,'/tmp/'+req.file.originalname, function(err){
       console.log(err);
    })
  res.json({
    file:req.file
  })
})
module.exports = router;