const express = require("express");
const router = express.Router();
const passport = require("passport");
const customMiddleWare = require("../../../config/custom-middleware");
const reportApi=require("../../../controllers/api/reports_api")
const doctorApi = require("../../../controllers/api/doctor_api");
router.post('/reports/create/:id',reportApi.createReport);

router.post('/register', doctorApi.create);
router.delete('/')

router.post('/login', passport.authenticate('local', { session: false, failWithError: true }),
    customMiddleWare.handleError, doctorApi.generateKey);

module.exports = router;


//http://localhost:8000/api/v1/doctor/reports/create/622e0acd4028bd3e18bb1917