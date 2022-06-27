let count = 0;
let increment = 0;

$('.aumentar').on('click',function() {
    count = count  + increment 
    $('.display').text(count);
})


$('.reset').on('click',function(){
    count = 0;
    increment = 0
    $('.display ,.incre').text(count,increment);
})

$('.sum').on('click',function() {
    increment = increment + 1;
    
    $('.incre').text(increment);
})
$('.sub').on('click',function() {
    increment = increment -1;
    $('.incre').text(increment)
})