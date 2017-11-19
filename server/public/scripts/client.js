console.log('JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');
    
   $('body').on('click', '#addition', sendAddition);
   $('body').on('click', '#subtraction', sendSubtraction);
   $('body').on('click', '#multiplication', sendMultiplication);
   $('body').on('click', '#division', sendDivision);

});//end DocumentReady

function sendAddition(){
    $.ajax ({
       method: 'POST',
       url: '/math/addition',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            getMath();
        }
   })
}//end sendAddition to server

function sendSubtraction(){
    $.ajax ({
       method: 'POST',
       url: '/math/subtraction',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            getMath();
        }
   })
}//end sendSubraction to server

function sendMultiplication(){
    $.ajax ({
       method: 'POST',
       url: '/math/multiplication',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            getMath();
        }
   })
}//end sendMultiplication to server

function sendDivision(){
    $.ajax ({
       method: 'POST',
       url: '/math/division',
       data: {numbers:[$('#numberOne').val(), $('#numberTwo').val()]},
        success: function(response){
            console.log('the numbers go here', response);
            getMath();
        }
   })
}//end sendDivision to server

function getMath(){ //takes array and puts it on client consola
    $.ajax({
        method: 'GET',
        url: '/math/addition',
        success:  function(response){
            console.log('testing tester',response);
            $('div').append('<h3>Your calculation is:  ' + response + '</h3>');
            $('input').val('');            
        }
    })
}//end getMath