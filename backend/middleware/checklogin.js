module.exports = {
    checklogin: function checklogin(req,res,next){
        if(!req.session.username){
            console.log('未登录');
            return res.redirect('admin/login');
        }
        next();
    },
    checknotlogin: function checknotlogin(req,res,next){
        if(req.session.username){
            console.log('已经登录');
            return res.redirect('/');
        }
        next();
    }
}