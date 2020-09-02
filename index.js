 let express = require('express');
//  let port = process.env.PORT || 1234;
let port = 3000;
 let app = express();
 app.get('/meetly',(req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.json({
         "meetings": [{
            "date": "01/01/2020",
              "type": "AGM",
              "department": "DevOps",
              "attendees": "20",
         },
         {
            "date": "02/01/2020",
            "type": "weekly",
            "department": "Frontend",
            "attendees": "10"
        }]
     })
 });
 app.listen(port,() => {
     console.log('its live on heroku!');
 })


