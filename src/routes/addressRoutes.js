// routes/addressRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('basic-auth');
const addressController = require("../controllers/addressController");

// Basic autentikáció
router.use((req, res, next) => {
  const user = auth(req);
  if (!user || user.name !== 'admin' || user.pass !== 'password') {
    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
    return res.status(401).send('Unauthorized');
  }
  next();
});

router.get("/", addressController.getRandomAddresses);
router.post("/", addressController.createAddress);

module.exports = router;