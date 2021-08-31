$(document).ready(function(){
  $(".accordion-btn-1").click(function(){
    var chk = $('#year2018').hasClass('move-top')
    if(!chk){
        $('#year2018').addClass('move-top');
    } else {
        $('#year2018').removeClass('move-top');
    }
    var chk2 = $('#list-item').hasClass('border-on')
    if(!chk2){
        $('#list-item').addClass('border-on');
    }else{
        $('#list-item').removeClass('border-on');
    }
  });
});