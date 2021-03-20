const Joke = require('../models/Joke');

module.exports = {
    //C
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(data=>res.json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors}))
    }, 
    //R
    getAllJokes: (req, res) => {
        Joke.find()
            .then(data => res.json( {message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors}))
    },
    getJokeById: (req, res) => {
        Joke.findById(req.params._id)
            .then(data => res.json( {message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors}))
    }, 
    updateJokeById: (req, res) => {
        Joke.findOneAndUpdate({_id:req.params._id}, req.body, 
            {new: true, runValidators: true})
            .then(data => res.json( {message: "success", results: data}))
            .catch(err => res.json( {message: "error", errors: err.errors}))
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne( {_id: req.params._id})
            .then(data => res.json( {message: "success", results: data}))
            .catch(err => res.json( {message: "error", errors: err.errors}))
    },
    randomJoke: (req, res) => {
        Joke.count({}, function(err, count) {
            console.log("Count " + count);
            var rand = Math.floor(Math.random() * count);
            Joke.findOne().skip(rand)
                .then(data => res.json( {message: "success", result: data}))
                .catch(err => res.json( {message: "error", errors: err.errors}))
        })
    }
}