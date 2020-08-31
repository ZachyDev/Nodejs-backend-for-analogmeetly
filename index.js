let express = require('express');
let port = process.env.PORT || 1234;
let app = express();
app.get('/meetly',(req,res,next) => {
    res.json({
        "meeting_details": [{
            "date": "10/02/2020",
            "type": "AGM",
            "department": "finance",
            "attendees": "20"
        }]
    })
});
app.listen(port,() => {
    console.log('its live on heroku!');
})
