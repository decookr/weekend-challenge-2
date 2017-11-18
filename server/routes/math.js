var express = require('express');
var router = express.Router();
var numbers = [1,2,3];

// var x = 1;
// var y = 3;

// var add = x+y;

// router.get('/', function(req, res){
//     console.log('this is working');
//     res.send({add});  
    
// });

router.post('/addition', function(req, res){
    res.send(numbers);
    console.log(req.body);
    
    // var numberArray = req.body.numbers;
    // var addedNumbers = 0;
    // addedNumbers = numberArray[0] + numberArray[1];
    // console.log('this is now working');
    res.sendStatus(200);
});//end addition


router.get('/addition', function(req,res){
    console.log(numbers);
    res.send(numbers);
})

module.exports = router;
