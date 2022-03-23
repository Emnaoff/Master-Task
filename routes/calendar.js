const express = require ('express');
const router = express.Router();
const{getToCalendar , addToCalendar}= require('../controllers/calendar.controllers');


router.post('/addToCalendar', addToCalendar );

router.get('/getToCalendar', getToCalendar );

module.exports = router;