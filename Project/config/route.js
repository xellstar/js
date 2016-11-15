const homeController = require('./../controllers/user');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/user/register', homeController.registerGet);
    app.post('/user/register', homeController.registerPost);
};