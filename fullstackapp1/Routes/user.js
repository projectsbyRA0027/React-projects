exports.login = function(req,res){
    var message = '';
    var sess = req.session;

    if(req.method == 'POST'){
        var post = req.body;
        var username = post.username;
        var password = post.password;

        var sql = "SELECT id,first_name,last_name,username FROM `users` WHERE `username`= '+username' and password = '+password+'";
        db.query(sql,function(err,results){
            if(results.length){
                req.session.userId = results[0].id;
                req.session.user = results[0];
                console.log(results[0].id);
                res.redirect('/home/dashboard');
            }
            else{
                message = 'you have entered invalid user name password.';
                res.render('index.ejs',{message:message});
            }
        });
        
    };
}