let express = require('express');
let port = process.env.PORT || 1234;
let app = express();
app.get('/meetly',(req,res,next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.json({
        "meeting_details": [{
            "date": "10/02/2020",
            "type": "AGM",
            "department": "finance",
            "attendees": "20",
            "users": "analog",
            "company": "analogteamss"
        }]
    })
});
app.listen(port,() => {
    console.log('its live on heroku!');
})
