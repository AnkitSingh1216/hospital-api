const express = require("express");
const router = express.Router();
router.get('/' , (req,res)=>{
    res.header('Content-type', 'text/html');
    return res.end('<h1>Get Started :</h1><ul><li>Open Postman start sending request on "(above url)/doctor/patients/reports</li></ul>');
});

// Route for handling doctor registration and login.
router.use('/doctor', require("./doctor"));

// Route for handling pateint data.
router.use('/patients', require("./patients"));

// Route for handling report generation.
router.use('/reports', require("./reports"));

module.exports = router;