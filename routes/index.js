const express = require('express');
const request = require('request');
const moment = require('moment');
const router = express.Router();;

/* GET home page. */

router.get('/', function(req, res, next) {

  request('https://atltechcal.azurewebsites.net/api/getEvents?code=jsQH3PiCJyPTU/o6iA8LyoW1K9Xgq1zLZO2spQnPaRSDnrHu/EKnTw==', (error, response, body) => {

  let results = JSON.parse(body);
  let events = results.events;

  events.map((e, i) => {
    events[i].time = moment(e.time).utcOffset(-240).format('dddd, MMMM Do YYYY, h:mma')
  })

  res.render('index', {title: "Home", events: events});

  });
});

module.exports = router;
