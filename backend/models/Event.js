const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  imageUrl: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
