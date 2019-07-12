module.exports = (app) => {
    const User = app['src'].models.user;

    let controller = {
        verifyUser: (req, res) => {
            console.log(req.body);

            User.findOne({
                email: req.body.login,
                password: req.body.password
            }).lean().exec(function (e, collection) {

                found = false;
                if (collection != null) {
                    found = true;
                }

                res.json({
                    found: found
                })
            });
        },
    }
    return controller;
}