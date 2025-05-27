const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  subject: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: String
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
