const express = require('express');
const app = express();

const mainRoutes = require('./routes/mainRoutes');
const specialRoutes = require('./routes/specialRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', specialRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});