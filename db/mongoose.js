const mongoose = require('mongoose');

const URI ="mongodb+srv://Bhanu:Bhanu%401234@cluster0.6g4jqy6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});