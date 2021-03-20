const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({

    setup:  {
        type: String,
        required: [true, "Joke setup field is required!"],
        minLength: [10, "Joke setup length must be more than 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "The joke punch line is required, of course."],
        minLength: [3, "Punch line must be at least three characters."]
    }
}, { timestamps: true })

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;