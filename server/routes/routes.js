const controller = require('../controllers/controller');

module.exports = app => {

    app.post('/api/jokes/new', controller.createJoke);

    app.get('/api/jokes', controller.getAllJokes);
    
    app.get('/api/jokes/random', controller.randomJoke);

    app.get('/api/jokes/:_id', controller.getJokeById);

    app.patch('/api/jokes/update/:_id', controller.updateJokeById);

    app.get('/api/jokes/delete/:_id', controller.deleteJoke);
}