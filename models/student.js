const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const { Schema } = mongoose;
const studentSchema = new Schema({
  SID: {
    type: String,
    unique:true,
    required: true,
    trim: true,
  },
  min:{
    type:Number,
    default:0
  },
  fine:{
    type:Number,
    default:0
  },
  checkout:{
    type:Date,
    default:new Date(new Date().getTime()+(5*60+30)*60000)
  },
checkin:{
    type:Date
},
present:{
    type:Boolean,
    default:true
}
},
{
    timestamps:true
});
studentSchema.pre('save', async function(next) {
    const user = this;
    
      user.checkin=new Date(user.createdAt.getTime()+(5*60+30)*60000);
      console.log(new Date().getTime()+(5*60+30)*60000)
});
  
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
