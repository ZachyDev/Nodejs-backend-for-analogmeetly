 let express = require('express');
 let port = process.env.PORT || 1234;
 let app = express();
 app.get('/meetly',(req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.json({
         "meeting_details": [{
             "date": "01/01/2020",
             "type":"Weekly",
             "department": "Devops",
             "attendees": 6
         },
         {
            "date": "02/01/2020",
            "type":"AGM",
            "department": "management",
            "attendees": 8
        },
        {
            "date": "03/01/2020",
            "type":"Weekly",
            "department": "frontend",
            "attendees": 22
        },{
            "date": "04/01/2020",
            "type":"Weekly",
            "department": "backend",
            "attendees": 11
        },{
            "date": "05/01/2020",
            "type":"monthly",
            "department": "design",
            "attendees": 10
        },{
            "date": "06/01/2020",
            "type":"Weekly",
            "department": "finance",
            "attendees":5
        }]
     })
 });
 app.listen(port,() => {
     console.log('its live on heroku!');
 })


