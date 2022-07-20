const express = require('express');
const Student = require('../models/student');

const router = new express.Router();
router.post('/stud', async (req, res) => {
    const stud = new Student(req.body);
    try {
        
        console.log(req.body)
        await stud.save();
        res.status(201).send(stud);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get('/stud', async (req, res) => {
    try {
        const studs = await Student.find({});
        res.send(studs);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/show', async (req, res) => {
    try {

        const show = await Student.find({ present: true });
        if (!show) return res.sendStatus(404);
        return res.send(show);
    }
    catch (e) {
        return res.status(400).send(e);
    }
})

router.get('/check/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const studout = await Student.findOneAndUpdate({ _id: _id }, { $set: { checkout: new Date().getTime()+(5*60+30)*60000} })
           const total = new Date(studout.checkout).getTime() - new Date(studout.checkin).getTime();
        console.log(studout.updatedAt,studout.createdAt)
        
           hours = (Math.floor((total) / 1000)) / 3600;
    console.log(hours)
        min = hours * 60
        roundoff=Math.ceil(min/5)*5;
        fine=(roundoff/5)*10
        // window.fine=fine
        
            return res.send(studout)
        
    }
    catch (e) {
        return res.status(400).send(e)
    }
})
router.patch('/check/:id', async (req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
  
    try {
      const cinema = await Student.findById(_id);
      updates.forEach((update) => (cinema[update] = req.body[update]));
      await cinema.save();
      if (!cinema) return res.sendStatus(404);
      return res.send(cinema);
    } catch (e) {
      return res.status(400).send(e);
    }
  });
router.get('/studs/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const studs = await Student.find({_id:_id});
        res.send(studs);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get('/display/:id',async(req,res)=>{
    const _id = req.params.id;
    try {
        const stud1 = await Student.findOneAndUpdate({ _id:_id},{$set:{present:false}})
    return !stud1 ? res.sendStatus(404): res.send(stud1);}
catch (e) {
    res.status(400).send(e);
}

})
router.get('/student/:id',async(req,res)=>{
    const _id = req.params.id;
    try {
        const studs = await Student.find({_id:_id});
        res.send(studs);
    } catch (e) {
        res.status(400).send(e);
    }
}
)
router.get('/out', async (req, res) => {
    try {

        const show = await Student.find({ present: false });
        if (!show) return res.sendStatus(404);
        return res.send(show);
    }
    catch (e) {
        return res.status(400).send(e);
    }
})

module.exports = router;
