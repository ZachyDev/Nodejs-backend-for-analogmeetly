let express = require('express');
let port = 3000
let app = express();
let meetings = [
        {
            "date": "01/01/2020",
            "type": "AGM",
            "department": "devops",
            "attendees": "20",
        },
        {
            "date": "02/01/2020",
            "type": "weekly",
            "department": "frontend",
            "attendees": "10",
        },
        {
            "date": "03/01/2020",
            "type": "monthly",
            "department": "backend",
            "attendees": "11",
        },
        {
            "date": "04/01/2020",
             "type": "monthly",
             "department": "finance",
             "attendees": "5",
        }
];
// all meetings
app.get(`/meetings`, (request, response) => {
  response.json(meetings);
});
// meeting by department
app.get(`/meetings/:department`, (request, response,next) => {
    const dept = String(request.params.department);
    const getDept = meetings.find((meeting) => meeting.department === dept);
  
    if (!getDept) {
      response.status(500).send('Meeting not found.')
    } else {
      response.json(getDept);
    }
    next()
  })
// meeting type
app.get(`/meetings/:type`, (request, response,next) => {
  const type = String(request.params.type);
  const getType = meetings.find((meeting) => meeting.type === type);

  if (!getType) {
    response.status(500).send('Meeting not found.')
  } else {
    response.json(getType);
  }
});
app.listen(port,() => {
    console.log('live on heroku')
})