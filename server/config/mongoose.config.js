const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Established connection to the database"))
    .catch(err => console.log("something's not letting me connect to the database", err));

