// console.log("test")
// const path = require('path');
// var express = require('express');
// var app = express();
// const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017/newdb",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
//     if(!err) console.log("connected");
//     else console.log("error")
// })


// const userRouter = require('./routes/user');
// app.use(express.json());
// app.use(userRouter);
// app.get('/get',function(req,res){
// res.send('Hello')
// })

// app.listen(3000, () =>{console.log(`app is running in PORT: 3000`)});

// require('dotenv').config();
// const express=require('express');
// const path=require('path');
// const passport = require('passport');
// const cors=require('cors');
// const bodyParse=require('body-parser');
// const mongoose=require('mongoose')
// const app=express()

// app.use(cors())
// app.use(express.json())
// app.use(bodyParse.urlencoded({ extended: false }));
// const normalroutes=require('./routes/showtime.js')
// app.use('/', normalroutes);
// const userRouters=require('./routes/UserRoute.js')
// app.use('/users',userRouters)
// app.use(passport.initialize());
// require('./routes/passport.js')
// require('./auth/auth.js');
// const port=process.env.PORT || 3000
// app.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
//     res.send('hello world')
// })
// // app.use(function(err, req, res, next) {
// //     res.status(err.status || 500);
// //     res.json({ error: err.message });
// //   });
// mongoose.connect(process.env.MONGODB,{useUnifiedTopology:true,useNewUrlParser:true,})
// .then(()=>{
//     app.listen(port,()=>{       
//     console.log('app running')
// })

// }).catch(err=>console.log(err))


const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

require('./db/mongoose');

// Routes
const userRouter = require('./routes/user');
const studRouter=require('./routes/student')
const usermodel=require('./models/user')


const app = express();

app.disable('x-powered-by');
const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  );

  next();
});
app.use(express.json());
app.use(userRouter);
app.use(studRouter)


app.listen(port, () => console.log(`app is running in PORT: ${port}`));

