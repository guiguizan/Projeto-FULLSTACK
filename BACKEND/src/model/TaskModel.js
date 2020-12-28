const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macadress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    creates: {type: Date, default: Date.now()}

});

module.exports = mongoose.model('Task', TaskSchema);