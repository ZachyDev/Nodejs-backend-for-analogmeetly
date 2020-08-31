let express = require('express');
let port = process.env.PORT || 1234;
let app = express();
app.get('/meetly',(req,res,next) => {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    res.json({
        "meeting_details": [{
            "date": "10/02/2020",
            "type": "AGM",
            "department": "finance",
            "attendees": "20",
            "users": "analog",
            "company": "analog"
        }]
    })
});
app.listen(port,() => {
    console.log('its live on heroku!');
})
