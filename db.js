// db.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://imsarthakshrma:Bittu@1411@cluster0.dezl8qq.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Define schema for waitlist entries
const waitlistSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Create a model based on the schema
const WaitlistEntry = mongoose.model('WaitlistEntry', waitlistSchema);

module.exports = WaitlistEntry;
