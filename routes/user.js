const express = require('express');
const User = require('../models/user');

const router = new express.Router();
router.get('/hi',async(req,res)=>{
    res.status(201).send("hi");
    console.log("hi")
})
router.post('/users/register', async (req, res) => {
  try {
    console.log("hi")
    const user = new User(req.body);
    await user.save();
    
    console.log(user.password)
    
    res.status(201).send({user});
  } catch (error) {
    res.status(400).send({ error: { message: 'Already Registered' }});
  }
});

router.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
      console.log(users);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  

// Login User
router.post('/users/login', async (req, res) => {
  const email=req.body.email
  const password=req.body.password
  try {
    const user = await User.findByCredentials(email, password);
    
    res.send({ user });
  } catch (e) {
    res.status(400).send({
      error: { message: 'You have entered an invalid email or password' },
    });
  }
});



// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
    console.log(users);
  } catch (e) {
    res.status(400).send(e);
  }
});



router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (e) {
    res.sendStatus(400);
  }
});


module.exports = router;
