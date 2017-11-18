console.log('JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');
    
   $('body').on('click', '#addition', sendAddition);
//    $('body').on('click', '#subtraction', sendSubtraction);
//    $('body').on('click', '#multiplication', sendMultiplication);
//    $('body').on('click', '#division', sendDivision);

//extra test data
    // $.ajax({
    //     method: 'GET',
    //     url: '/math',
    //      success: function (response){
    //      console.log('math response', response);
    //      $('body').append(response);
    //      }
    //  })

});//end DocumentReady

function sendAddition(){
    console.log('submit addition numbers');    
    $.ajax ({
       method: "POST",
       url: '/math/addition',
       data: {number_one:$('#number1').val(), number_two:
            $('#number2').val()},
        success: function(response){
            console.log(response);
            //placeholder for append to DOM***
            getAddition();
        }
   })
}//end sendAddition

function getAddition(){
    $.ajax({
        method: 'GET',
        url: '/math/addition',
        success:  function(response){
            console.log(response);
        }
    })
}


// function sendSubtraction() {
//     console.log('submit subtraction numbers');
//    $.ajax ({
//        method: "POST",
//        url: '/math/subtraction',
//        data: {numbers:
//             [ $('#number1').val(),
//             $('#number2').val()]},
//         success: function(response){
//         //placeholder for append to DOM***
//         }
//    })
// }//end sendSubtraction