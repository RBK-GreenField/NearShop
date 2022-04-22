const { insertMany } = require('../database-mongo/Comment.model.js');
const Comment = require('../database-mongo/Comment.model.js');

var addComment=function (req,res) {
    var {description,product_id,user_id}=req.body
console.log(description)
Comment.insertMany({description,product_id,user_id}).then(()=>{
    res.send('added')
}).catch(()=>{
res.send('err')
})
}

var deleteComment=function(req,res){
    var id=req.params.id 
    Comment.findByIdAndRemove(id).then(()=>{
res.send('deleted')
    }).catch(()=>{
        res.send('error')
    })
}
module.exports = {addComment,deleteComment };