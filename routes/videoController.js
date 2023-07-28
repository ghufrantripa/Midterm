const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
  try {
    // Fetch videos from MongoDB and return the data as response
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
};
