const Event = require('../models/Event');

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  const { title, description, date, venue, imageUrl } = req.body;
  const event = new Event({ title, description, date, venue, imageUrl });

  try {
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEvents, createEvent };
