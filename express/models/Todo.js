const mongoose=require('mongoose')
const todoschema=new mongoose.Schema(
    {
        task:String,
        completed :{type:Boolean,default:false}
    }
)
module.exports=mongoose.model('Todo',todoschema)