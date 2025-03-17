const { Address } = require("../models");

const getAllAddresses = async (req, res) => {
  const addresses = await Address.findAll();
  res.json(addresses);
};

const createAddress = async (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }
  const newAddress = await Address.create({ address });
  res.status(201).json(newAddress);
};

module.exports = { getAllAddresses, createAddress };
