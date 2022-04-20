const mongoose =require("mongoose");
const { stringify } = require("querystring");

const schoolSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
level:{
    type:String,
    required:true
},
Category:{
    type:string,
required:true
    
},
numOfStudents:{
    type:Number,
    required:true
},
location:{
    type:string,
    require:true


},
address : {
    gps:string,
    box:string
},
contact:{
    phone:string,
    fax:string,


}

},{
    timestamps:true
}
)
const School =mongoose.model("School", schoolSchema);
module.exports=School;
