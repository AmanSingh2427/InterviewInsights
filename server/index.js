import express from 'express';
import bcrypt from 'bcrypt'
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Connection from './db/db.js';
import User from './model/user.js';
import Form from './model/interview_experience.js';
import Token from './model/token.js';

dotenv.config();


const app=express();

app.use(cors());

app.use(express.json());


app.post('/signup',async(req,res)=>{

    try{
        const hashedPassword=await bcrypt.hash(req.body.password.toString(),10);
        const user={name:req.body.name,email:req.body.email,password:hashedPassword};
        const newUser=new User(user);
        await newUser.save();
        res.status(201).json({msg:'user registered successfully'});

    }catch(error){
        console.log(error);
    }
})


app.post('/login',async(req,res)=>{
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(req.body.password.toString(), user.password);
        if (match) {

            const accessToken = jwt.sign(user.toJSON(), 'a60327222ffaa884573490fc0574d69f3f5d1925a98479fb4ef184ebc99fab84cbb9edcc41434b58a07b66188a75152916ed7b46b2031afa5b5c0f046cacb726', { expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), 'de37bbab03b0380009e4b2f9c6fa6dcf95ae3acfc63125ce7b580d8d490eb6f92579843a4ce44011998dbec04fab568e5de224b042b2c2cf284acfbe03f1f4a6');
            
            const newToken = new Token({ token: refreshToken });
            await newToken.save();
        
            res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken });
        
        } else {
            res.status(400).json({ msg: 'Password does not match' })
        }
    }catch(err){
        return res.status(500).json({msg:'Error while login user'});
    }
})


// app.post('/contribute', (req, res) => {
//     // Create a new form data object from the request body
//     const formData = new Form({
//       name: req.body.name,
//       collegeName: req.body.collegeName,
//       jobTitle: req.body.jobTitle,
//       company: req.body.company,
//       resumeScreening: req.body.resumeScreening,
//       round1Name: req.body.round1Name,
//       round1: req.body.round1,
//       round2Name: req.body.round2Name,
//       round2: req.body.round2,
//       round3Name: req.body.round3Name,
//       round3: req.body.round3,
//       round4Name: req.body.round4Name,
//       round4: req.body.round4,
//       round5Name: req.body.round5Name,
//       round5: req.body.round5
//     });
  
//     // Save the form data to the database
//     formData.save((error) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         res.send.json({'Form data saved successfully!'});
//       }
//     });
//   });
app.post('/contribute',async(req,res)=>{
    const {name,collegeName,company,jobTitle,resumeScreening,round1Name,round1,round2Name,round2,round3Name,round3,round4Name,round4,round5Name,round5} = req.body;
    try{

        const form = new Form({name,collegeName,company,jobTitle,resumeScreening,round1Name,round1,round2Name,round2,round3Name,round3,round4Name,round4,round5Name,round5});
        await form.save();
        res.status(201).json({msg:'information submitted successfully'});
    }catch(error){
        return res.status(500).json({msg:'Error while submitting the data'});
    }
})

app.get('/interviewdata',async(req,res)=>{
    try{
        const information=await Form.find({});
        res.status(200).json(information);
    } catch(error){
        res.status(500).json({message:error.message})
        console.log(error)
    }
})



app.listen(8000,()=>{
    console.log('server is running on port 8000');
})

Connection();