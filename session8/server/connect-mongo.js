const mongoose = require('mongoose')

// const connectionString = 'mongodb://localhost:27017/test'
// Cài trên máy 

// Cài trên Atlas ( bản online)
const connectionString = 'mongodb+srv://ninoorta:hidden99@cluster0-n9vx6.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    // options

     useNewUrlParser: true,
     useUnifiedTopology: true
})
    .then(() => {
        console.log('Connect success to MongoDB');

    })
    .catch(err => {
        console.error('Connect failed to MongoDB');
        console.error(err);
    })



// Schema 
// Model
