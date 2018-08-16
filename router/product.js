const express = require('express');
const route = express.Router();

route.get('/product/list',function(req,res,next){
    res.render('product',{
        title:"我是商品页面",
        content:"<h2>产品列表</h2>",
        product:[
            {id:1,name:"荣耀v10",price:"3299",sum:"168"},
            {id:2,name:"oppoR15",price:"2999",sum:"518"}
        ]
    });
})















module.exports = route;