module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/mern', {useNewUrlParser: true});

    return mongoose;
}