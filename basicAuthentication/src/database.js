const mongoose = require('mongoose');
const { mongodb: {URI} } = require('./config');  // Require URI from mongodb object.

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log(`Database connected succesfully.`))
    .catch(err => console.log(err));