module.exports = (app) => {
    const UserController = app['src'].controllers.user;
    app.post('/login-user', UserController.verifyUser);
}