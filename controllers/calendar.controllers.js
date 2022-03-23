const Calendar = require('../models/calendar.models');
const moment = require('moment');

exports.addToCalendar= async (req, res)=>{
    const event =Calendar(req.body);
    await event.save();
    res.status(200).send({msg:'Event saved successfully'})

}

exports.getToCalendar= async (req, res)=>{
    const events = await Calendar.find ({
     start: {$gte: moment(req.query.start).toDate() },
     start: {$lte: moment(req.query.end).toDate() }
    });
 res.send(events);
 }




