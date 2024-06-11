const mongoose=require("mongoose")
const schema= mongoose.Schema(
    {

        "productname":{type:String,required:true},
        "productcode":{type:String,required:true},
        "productdescription":{type:String,required:true},
        "category":{type:String,required:true}
    }
)
let productmodel=mongoose.model("products",schema);
module.exports={productmodel}