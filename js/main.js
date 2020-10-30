$(document).ready(function(){
    $('.openMOgnb').click(function(){
        // $(".header_cont").css('display','block');
        //header아이디영역 백그라운드 추가
        $(".header_cont").slideDown('slow');
        $("#header").addClass('on');
    	//상단으로 바로가기 버튼 클릭
		$('.to_top a').smoothScroll();
});

$(".closePop").click(function(){
    // $(".header_cont").css("display","none");
    $(".header_cont").slideUp('fast');
    $("#header").removeClass('on');

});

});