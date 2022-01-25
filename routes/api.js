// Import PatientsController, express, dan router
const PatientsController = require("../controllers/PatientsController");
const express = require("express");
const router = express.Router();

// main routes
router.get("/patients", PatientsController.index);

router.post("/patients", PatientsController.store);

router.get("/patients/:id", PatientsController.show);

router.put("/patients/:id", PatientsController.update);

router.delete("/patients/:id", PatientsController.destroy);


// search routes
router.get("/patients/search/:name", PatientsController.search);

// status routes
router.get("/patients/status/positive", PatientsController.positive);

router.get("/patients/status/recovered", PatientsController.recovered);

router.get("/patients/status/dead", PatientsController.dead);

// export router
module.exports = router;
