$(document).ready(function(){
    $('.openMOgnb').click(function(){
        // $(".header_cont").css('display','block');
        //header아이디영역 백그라운드 추가
        $(".header_cont").slideDown('slow');
        $("#header").addClass('on');
    
});

$(".closePop").click(function(){
    // $(".header_cont").css("display","none");
    $(".header_cont").slideUp('fast');
    $("#header").removeClass('on');

});

});