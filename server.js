const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./server/routes/jokes.routes");
JokeRoutes(app);

app.listen(port, () => console.log(`Express running on port ${port}`));



// const express = require('express');
// const app = express();
// // const mongoose = require('mongoose');
// const port = 8000
// const DB = "jokesdb"
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


// mongoose.connect(`mongodb://localhost/${DB}`)
// .then(()=>{console.log(`Connected to ${DB}`)})
// .catch(()=>{console.log('Error connecting to DB')})

// const JokeSchema = new mongoose.Schema({
//     setup:{type:String},
//     punchLine:{type:String}
// },{timestamps:true})

// const Joke = mongoose.model('Joke', JokeSchema)



// // create
// app.post('/api/jokes',(req,res)=>{
//     const { body } = req;
//     Joke.create(body)
//     .then((joke)=>{
//         res.json(joke)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// // read all
// app.get('/api/jokes',(req,res)=>{
//     Joke.find({})
//     .then((jokes)=>{
//         res.json(jokes)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// // read one
// app.get('/api/jokes/:id',(req,res)=>{
//     Joke.findOne({_id:req.params.id})
//     .then((joke)=>{
//         res.json(joke)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// // update
// app.put('/api/jokes/:id',(req,res)=>{
//     Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
//     .then((joke)=>{
//         res.json(joke)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// // delete
// app.delete('/api/jokes/:id',(req,res)=>{
//     Joke.findOneAndDelete({_id:req.params.id})
//     .then((joke)=>{
//         res.json(joke)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.listen(port,()=>{console.log(`Loaded on port: ${port}`)})