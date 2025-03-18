const { Address } = require("../models");

const generateRandomAddress = () => {
  const streets = ['Széles utca', 'Keskeny utca', 'Hosszú utca', 'Rövid utca'];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomNumber = Math.floor(Math.random() * 100);
  return `${randomStreet} ${randomNumber}`;
};

const getRandomAddresses = async (req, res) => {
  try {
    // Random cím generálása
    const randomAddress = generateRandomAddress();

    // Cím mentése az adatbázisba
    const newAddress = await Address.create({ address: randomAddress });

    // Válasz küldése
    res.json(newAddress);
  } catch (error) {
    console.error('Hiba történt a cím lekérése során:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createAddress = async (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }
  const newAddress = await Address.create({ address });
  res.status(201).json(newAddress);
};

module.exports = { getRandomAddresses, createAddress };
