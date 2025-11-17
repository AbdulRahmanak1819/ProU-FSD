const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  }
});

module.exports = mongoose.model('Task', TaskSchema);
