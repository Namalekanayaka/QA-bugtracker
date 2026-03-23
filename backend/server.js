const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bugRoutes = require('./routes/bugs');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bugs', bugRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
    res.send('QA Bugtracker API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
