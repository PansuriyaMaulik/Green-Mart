const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerceOrders', {useNewUrlParser: true}, (error) => {
    if(!error) {
        console.log('MongoDB connection established')
    } else {
        console.log('error: ' + error);
    }
});

require('./order.model');