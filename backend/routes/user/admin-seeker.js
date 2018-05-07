var express = require('express'),
    router = express.Router(),
    AdminS = require('../../models/user-seeker'),
    crypto = require('crypto'),
    TITLE_REG = '注册';

router.get('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log(req.body);

    //接收参数
    var param = req.query || req.params;
    console.log('username:'+param.userName);
    console.log('userpassword'+param.userPwd);
    var userName = param.userName;
    var userPwd = param.userPwd;
  
    //创建UserS对象
    var newUser = new AdminS({
      username: userName,
      userpass: userPwd
    });

    //检查用户名是否存在
    AdminS.getUserNumByName(newUser.username, function (err, results) { 
      
      console.log(results[0]['num']);
      console.log('result'+results);

      if(results[0]['num'] == 0){
        console.log('success!');

        //返回相应数据
        res.send('0');

        //向数据库存储数据
        newUser.save({username:newUser.username,userpass:newUser.userpass},function(err,result){
          if(err){
            res.locals.error = err;
            return;
          }
          console.log(result);
        })   
        
      }

      if(results[0]['num'] > 0){
        res.send('1');
        console.log('用户名已存在');
      }
    
    });
});

module.exports = router;