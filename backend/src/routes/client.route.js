const express = require("express");

const router = express.Router();

const clientController = require("../controllers/client.controller");

// Create a new client
router.post("/clients", clientController.createClient);
router.post("/get-client", clientController.getAClients);

module.exports = router;