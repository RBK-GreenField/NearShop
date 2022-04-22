
const Comment = require('../database-mongo/Comment.model.js');



var addComment=function (req,res) {
    var description=req.body
console.log(description)
Comment.create(description).then(()=>{
    res.send('added')
}).catch(()=>{
res.send('err')
})
}
module.exports = {addComment };