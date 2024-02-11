const express = require('express');
const router = express.Router();

// import the index controller
const IndexController = require('../Controllers/index');

/* GET Default Route */
router.get('/', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET About Route */
router.get('/about', (req, res, next)=>
{
    IndexController.DisplayAbout(req, res, next);
});

/* GET Contact Route */
router.get('/contact', (req, res, next)=>
{
    IndexController.DisplayContact(req, res, next);
});

/* GET Resume Route */
router.get('/resume', (req, res, next)=>
{
    IndexController.DisplayResume(req, res, next);
});


/* GET Skills Route */
router.get('/skills', (req, res, next)=>
{
    IndexController.DisplaySkills(req, res, next);
});

module.exports = router;
