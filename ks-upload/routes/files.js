var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.post('/list',(req,res)=>{
	var param = "/tmp";
	fs.stat(param, function (err, stats) {
        //如果是目录的话，遍历目录下的文件信息
        if (stats.isDirectory()) {
			var result = [];
            fs.readdir(param, function (err, file) {
                file.forEach((e,index) => {
                    //遍历之后递归调用查看文件函数
                    //遍历目录得到的文件名称是不含路径的，需要将前面的绝对路径拼接
                    var absolutePath = path.resolve(path.join(param, e));
					result[index] = e;
                })
	      res.json(result);
        })
		  
        } else {
        //如果不是目录，打印文件信息
            console.log(param)
        }
    })
});

router.post('/delete',(req,res)=>{
   console.log("delete====>")		
   fs.unlink('/tmp/'+req.body.path, function(err){
	  console.log("delete error===="+JSON.stringify(err))
      res.json('删除成功');
  })
});

router.get('/test', function(req, res, next) {
  res.send('respond 1111');
});


module.exports = router;