var path = require("path");
var friendsArray = require('../data/friends.js');


module.exports = function (app) {

    // display table data in json format
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    
    });

    app.post('/api/friends', function(req, res) {
    var singleInput = req.body;
    //  console.log('singleInput = ' + JSON.stringify(singleInput));

    var singleFeedback = singleInput.singleScores;
    // console.log('singleFeedback = ' + singleFeedback);

    // Compute best friend match
    var singleMatchName = '';
    var singleMatchPhoto = '';
    var difference = Infinity; 

    // Examine all existing friends in the list
    for (var i = 0; i < friendsArray.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));

        // Compute differences for each question
        var diff = 0;
        for (var j = 0; j < singleFeedback.length; j++) {
            console.log(friendsArray[i].singleScores[j])
            console.log(singleFeedback[j])
            diff += Math.abs(friendsArray[i].singleScores[j] - singleFeedback[j]);
        }
        // console.log('diff = ' + diff);
      
        // If lowest difference, record the friend match
        if (diff < difference) {
            // console.log('Closest match found = ' + diff);
            // console.log('Friend name = ' + friends[i].name);
            // console.log('Friend image = ' + friends[i].photo);
            console.log("working");
            difference = diff;
            singleMatchName= friendsArray[i].singleName;
            singleMatchPhoto= friendsArray[i].singlePhoto;
             
        }
    }

    // Add new user
    friendsArray.push(singleInput);

    // Send appropriate response
    res.json({status: 'OK', singleName: singleMatchName, singlePhoto: singleMatchPhoto});
});

    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsArray = [];
       
    
        console.log(friendsArray);
      });
    };
    
    
