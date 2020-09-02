let express = require('express');
let port = 3000
let app = express();
let meetings = require('./store');
// all meetings
app.get(`/meetings`, (request, response) => {
  response.json(meetings);
});
// meeting type
app.get(`/meetings/:type`, (request, response) => {
    const type = String(request.params.type);
    const getType = meetings.find((meeting) => meeting.type === type);
    if (!getType) {
      response.status(500).send('Meeting not found.')
    } else {
      response.json(getType);
    }
  });
// meeting by department
app.get(`/meetings/:department`, (request, response) => {
    const dept = String(request.params.department);
    const getDept = meetings.find((meeting) => meeting.department === dept);
  
    if (!getDept) {
      response.status(500).send('Meeting not found.')
    } else {
      response.json(getDept);
    }
  })
app.listen(port,() => {
    console.log('live on heroku')
})