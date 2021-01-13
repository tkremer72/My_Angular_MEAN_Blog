require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.DB;
const PORT = process.env.PORT || 5000

const authRoute = require('./routes/auth.routes');
const adminRoute = require('./routes/admin.routes');
const userRoute = require('./routes/user.routes');
const blogRoute = require('./routes/blog.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//define routes for images and frontend access to backend.
app.use('/backend/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'angular-mean-blog')));
//Set the CORS Policy manually
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});
//Set the automatic CORS policy
app.use(cors());

app.use('/api/auths', authRoute);
app.use('/api/admins', adminRoute);
app.use('/api/users', userRoute);
app.use('/api/blogs', blogRoute);
//The next line that is commented out is for running front and backend from the backend folder.
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular-mean-blog', 'index.html'))
});


mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to Mongo DB Atlas.')
  }).catch(() => {
    console.log('Connection failed!')
  });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('Connected to Mongo DB Atlas.')
// })
app.listen(PORT, function(req, res) {
  console.log(`Server started on port: ${PORT}`)
});

module.exports = app;
