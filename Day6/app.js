// $(document).ready(function() {
//     $('h1').text('hello')
// })


// $('input').val('2')  // set value = 2
// $('input').val('')   // get value

// // $('button').on("click", function(){
// //     alert('clicked!')
// // })

// // console.log($('h1').children('a'))

// $('button').click(function() {
//     $('h1').append('<a href="">Link</a>')
//     $('h1').css({color : "blue"})
//     $('h1').animate({'font-size': '50px'}, 1000)
//     $('img').animate({width: '100px'}, 1000)
// })



$('button').click(function(event){
    if($('textarea').val() =='' || $('textarea').val().trim() ==''){
        alert('Bạn hãy nhập câu hỏi')
    }
    else{
        alert('Succeeded!')
        alert($('textarea').val().trim())
    }
    event.preventDefault();
})

$("button").click(function(){
  $.ajax({url: "demo_test.txt", success: function(result){
    $("#div1").html(result);
  }});
});