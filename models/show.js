const mongoose = require('mongoose');

const { Schema } = mongoose;
const showSchema = new Schema({
 
 show:{
   type:String,
   type:Schema.Types.ObjectId,
  ref:'Student',
  // required:true
 },
 
});

const showstud = mongoose.model('show', showSchema);

module.exports = showstud;
