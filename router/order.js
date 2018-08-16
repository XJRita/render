const express = require('express');
const route = express.Router();

route.get('/order/list',function(req,res,next){
    // 第一个参数是视图的名称，如果是.ejs文件，必须省略后缀名，如果是.html,.jsp,.def,.abc或者自定义的后缀名则必须加后缀名。
    // 第二个参数是视图需要的数据（向视图传递的数据）
    // 响应渲染,()中为渲染的内容
    res.render('order',{
        title:"我是订单列表业",
        content:"<h2>我是标题2</h2>",
        person:{
            name:"张三",
            age:20,
            sex:true,
            fav:["读书","听音乐","逛街"]
        }
    });
})













module.exports = route;