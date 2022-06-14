let certificationWriteBackground = document.querySelector('.certificationWriteBackground');
let typeDownButton = document.querySelector('.typeDownButton');
let typeUpButton = document.querySelector('.typeUpButton');
let warningDownButton = document.querySelector('.warningDownButton');
let warningUpButton = document.querySelector('.warningUpButton');
let projectInfoDropDown = document.querySelector('.projectInfoDropDown');
let warningDropDown = document.querySelector('.warningDropDown');
let certificationWriteButton = document.querySelector('.certificationWriteButton');


let $certificationBackButton = $('.certificationBackButton > button.backButton');
let $certificationBackBackButton = $('.certificationBackButton > button.backBackButton');
let $certificationNextButton = $('.certificationNextButton > button.nextButton');
let $certificationNextNextButton = $('.certificationNextButton > button.nextNextButton');
let $certificationCompleteButton = $('.certificationNextButton > button.completeButton');

let $certificationWriteModal = $('.certificationWriteModal');
let $certificationContent = $('.certificationContent');
let $detailProjectContent = $('.detailProjectContent');
let $detailProjects = $('.detailProjectContentList > div');
let $certificationHeaderLabel = $('.certificationHeaderLabel > strong');
let $modalLight = $('.modalLight');
let $projectAlert = $('.projectAlert');
let $whiteBackground = $('.whiteBackground');


//프로젝트 모달 창 켜는 버튼
function certificationWriteModalShow(){
    certificationWriteBackground.style.display = 'block';
    certificationWriteButton.style.display = 'none';
}

//프로젝트 모달 창 숨기는 버튼,
//이미지 슬라이드와 버튼의 active 클래스를 다시 초기화해줌
function certificationWriteModalHide(){
    certificationWriteBackground.style.display = 'none';
    certificationWriteButton.style.display = 'block';

    $('.certificationImages ul li:first-child').addClass('active');
    $('.certificationImages ul li:first-child').siblings('.active').removeClass('active');
    $('.certificationImages div div:first-child').addClass("active");
    $('.certificationImages div div:first-child').siblings('.active').removeClass('active');
    $('.certificationContentArea > textarea').val('');

    $.each($detailProjects, function(){
        $(this).removeClass("on");
    });

    $detailProjectContent.css("width", "0");
    $certificationWriteModal.css("width", "35%");
    $whiteBackground.css("display", "block");
    $certificationNextButton.css("display", "block");
    $certificationHeaderLabel.text('사진 업로드');
    $certificationContent.css("display", "none");
    $detailProjectContent.css("display", "none");
    $certificationNextNextButton.css("display", "none");
    $certificationBackButton.css("display", "none");
    $certificationBackBackButton.css("display", "none");
    $certificationCompleteButton.css("display", "none");

}



//프로젝트 선택 시 이미지 위에 마우스오버 효과
$.each($detailProjects, function () {
    $(this).mouseover(function () {
        $(this).find('span').css("display", "block");
    });
    $(this).mouseleave(function () {
        $(this).find('span').css("display", "none");
    });
    $(this).on('click', function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
            $(this).siblings(".on").removeClass("on");
        }
    })
});

//모달창 화면 깜빡임 효과
function twinkle() {
    $modalLight.css('display', 'block');
    $modalLight.animate({ 'opacity': 0.8 }, 100, function () {
        $modalLight.animate({ 'opacity': 0 }, 300, function () {
            $modalLight.css('display', 'none');
        });
    });
}

//사진 업로드 후 다음 버튼 누를때 모달창 크기 늘이기
$certificationNextButton.on("click", function () {
    twinkle();
    $certificationWriteModal.css("width", "54%");
    $detailProjectContent.css("width", "74%");
    $detailProjectContent.css("display", "block");
    $whiteBackground.css("display", "none");
    $certificationHeaderLabel.text('프로젝트 선택');
    $certificationNextButton.css("display", "none");
    $certificationNextNextButton.css("display", "block");
    $certificationBackButton.css("display", "block");
});

//다음 버튼 두 번 눌렀을 때
$certificationNextNextButton.on("click", function () {
    if(!$detailProjects.hasClass("on")){
        $projectAlert.css("display","block");
        $projectAlert.animate({"opacity": 1}, 400, function(){
            $projectAlert.animate({"opacity" : 0}, 600, function(){
                $projectAlert.css('display','none');
            })
        })
        return;
    }
    twinkle();

    $certificationContent.css("display", "block");
    $detailProjectContent.css("display", "none");
    $certificationNextNextButton.css("display", "none");
    $certificationCompleteButton.css("display", "block");
    $certificationHeaderLabel.text('새 인증글 작성');
    $certificationBackButton.css("display", "none");
    $certificationBackBackButton.css("display", "block");
})

//이전 화살표 누를 때 모달창 크기 줄이기, 버튼 없애기
$certificationBackButton.on("click", function () {
    twinkle();

    $certificationWriteModal.css("width", "35%");
    $detailProjectContent.css("width", "0");
    $whiteBackground.css("display", "block");
    $certificationHeaderLabel.text('사진 업로드');
    $certificationNextButton.css("display", "block");
    $certificationNextNextButton.css("display", "none");
    $certificationBackButton.css("display", "none");
});

//인증글 작성에서 이전 화살표 누를 시 모달창 안 내용 변경
$certificationBackBackButton.on("click", function () {
    twinkle();

    $certificationContent.css("display", "none");
    $detailProjectContent.css("display", "block");
    $certificationNextNextButton.css("display", "block");
    $certificationCompleteButton.css("display", "none");
    $certificationHeaderLabel.text('프로젝트 선택');
    $certificationBackButton.css("display", "block");
    $certificationBackBackButton.css("display", "none");
});

//인증글 작성 버튼 눌렀을 때


//인증글 작성에서 프로젝트 정보 관련 v자 버튼
typeUpButton.addEventListener("click", function () {
    typeUpButton.style.display = 'none';
    typeDownButton.style.display = 'block';
    projectInfoDropDown.style.height = '0px';
});

typeDownButton.addEventListener("click", function () {
    typeUpButton.style.display = 'block';
    typeDownButton.style.display = 'none';
    projectInfoDropDown.style.height = '100px';
});

//인증글 작성에서 인증글 신고 안내글 관련 v자 버튼
warningUpButton.addEventListener("click", function () {
    warningUpButton.style.display = 'none';
    warningDownButton.style.display = 'block';
    warningDropDown.style.height = '0px';
});

warningDownButton.addEventListener("click", function () {
    warningUpButton.style.display = 'block';
    warningDownButton.style.display = 'none';
    warningDropDown.style.height = '100px';
});

//인증글 작성 textarea 글 길이 검사
$('.certificationContentArea > textarea').on('input',function(){
    let cnt = $(this).val().length
    if(cnt > 400){
        $('.certificationContentButtons > div > div:first-child').css("display","block");
        $(this).val($(this).val().substring(0,400));
        $('.certificationContentButtons > div > div > button > span').text(400);
    }else{
        $('.certificationContentButtons > div > div:first-child').css("display","none");
        $('.certificationContentButtons > div > div > button > span').text(cnt);
    }
});

//버튼형 슬라이더
//이미지 아래 버튼 클릭했을 때 해당하는 이미지로 넘겨주는 기능
$('.certificationImages > .innerImagePageButtons > div').click(function(){
    let $this = $(this);
    let index = $this.index();
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    let $slider = $this.parent().parent();
    let $current = $slider.find('> .certificationImageInner > li.active');
    let $post = $slider.find('> .certificationImageInner > li').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});
