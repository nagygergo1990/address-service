// server.js
const express = require('express');
const winston = require('winston');
const addressRoutes = require('./routes/addressRoutes');
const { initDB } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use('/addresses', addressRoutes);

// Logolás
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'address-service.log' }),
  ],
});

initDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});