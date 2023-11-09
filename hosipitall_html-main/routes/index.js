const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controllers/home_controller');
const status= require('../controllers/status')

router.get('/',homeController.home);
// router.use('/register',require('/.'))
router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports)


module.exports = router;