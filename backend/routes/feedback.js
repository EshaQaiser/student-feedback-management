const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/feedbacks', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

router.get('/feedbacks/:subject', async (req, res) => {
  const feedbacks = await Feedback.find({ subject: req.params.subject });
  res.json(feedbacks);
});

module.exports = router;
