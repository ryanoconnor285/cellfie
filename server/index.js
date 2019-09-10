const express = require("express");
const bodyParser = require('body-parser');
const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const upload = require('./routes/api/upload');
const scheduler = require('./routes/api/scheduler');

// Use Routes
app.use('/upload', upload);
app.use('/scheduler', scheduler);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening ${port}`));
