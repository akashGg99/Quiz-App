const mongoose= require('mongoose')

const questionsSchema = new mongoose.Schema({
    Question:{type:String, required:true},
    Answer:{type:String,required:true},
    option1:{type:String},
    option2:{type:String},
    option3:{type:String},
    option4:{type:String},
    IsDeleted:{type:Boolean, default:false}
},{timestamps:true}
)


module.exports= mongoose.model("question",questionsSchema)