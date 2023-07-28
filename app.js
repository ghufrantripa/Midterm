const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');
const productRoutes = require('./routes/productRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api/videos', videoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
