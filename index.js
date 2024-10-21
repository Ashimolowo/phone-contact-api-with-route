const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact.model');
const contactRoute = require('./routes/contact.route.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
application.use('/api/v1/contacts, contactRoute')

app.get('/v1', (req, res) => {
  res.send("Hello Shaybah 💦");
});

///connecting to mongoose
mongoose.connect("mongodb+srv://royins64:VyCnTUvmhJXB7AUw@cluster0.gwlbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Database connection successful ✅");

    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed ❌", err);
  });
