const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    let u_no =  req.session.username;
    res.render('index',{title:'recommend',page: 'recommend',username:u_no});
});

module.exports = router;