const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Middleware for parsing form data
const mainRoutes = require('./routes/mainRoutes');
const specialRoutes = require('./routes/specialRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', specialRoutes);


// Middleware function to process the form submission
app.post('/submit-form', (req, res) => {

  const formData = req.body;

  res.send('Form submitted successfully!');
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});