const mongoose = require('mongoose');

// {"username":"Alice"  ,"NIC" : "test"}
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        required: true},
    nic: {
        type: String, 
        required: true}
});

module.exports = mongoose.model('User', userSchema);