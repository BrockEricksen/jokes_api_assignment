const Joke = require("../models/jokes.models");

// create
const createJoke = (req,res) => {
    Joke.create(req.body)
    .then( e => res.json(e) )
    .catch( e => res.json(e) )
}

// read all
const getAllJokes = (req, res) => {
    Joke.find()
    .then((jokes)=>{
        res.json(jokes)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// read one
const getJokeById = (req,res)=> {
    Joke.findOne({_id:req.params._id})
    .then((joke)=>{
        res.json(joke)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// update
const updateJoke = (req,res)=> {
    Joke.findOneAndUpdate({_id:req.params._id},req.body,{new:true,runValidators:true})
    .then((updatedJoke)=>{
        res.json(updatedJoke)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// delete
const deleteJoke = (req,res)=> {
    Joke.deleteOne({_id: req.params._id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = { getAllJokes, createJoke, getJokeById, updateJoke, deleteJoke }