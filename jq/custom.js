var screen = $("#intro_page").outerHeight();
var screen_about = $("#about_page").outerHeight();
var about = $("#about_page").offset();
var portfolio = $("#pt_page").offset();
var screen_portfolio = $("#pt_page").outerHeight();
var contact = $("#cont_page").offset();
var video = $("#pt_page h3:nth-of-type(2)").offset();
var design = $(".design_frame").outerHeight();
var h = $(window).height() / 2

//상단메뉴
$(document).ready(function () {
    $("a[href*='intro_page']").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    })
    $("h1>a").click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 600)
    })
    $("a[href*='pt_page']").click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: portfolio.top
        }, 600)
    })
    $("a[href*='about_page']").click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: about.top
        }, 600)
    })
    $("a[href*='cont_page']").click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: contact.top
        }, 600)
    })
})
$("#menu_button").click(function () {
    $("nav").addClass("menu")
    $("#close_menu").show();
    $("#menu_button").hide();
})
$("#close_menu").click(function () {
    $("nav").removeClass("menu")
    $("#close_menu").hide();
    $("#menu_button").show();
})
// 인트로 텍스트 추가
$(".slide_text>span").append("<br>노력하는")

//팝업창
$(".pt_design li").click(function (e) {
    var pto = $(".pt_design li")
    if ($(pto).has(e.target).length === 0) {
        $(this).children("details").fadeIn();
        $(".pt_popup_container").fadeIn();
        $("#close").fadeIn();
        scrollDisable('details');
    }
})
$("#close").click(function () {
    $(this).fadeOut();
    $(".pt_design li").children("details").fadeOut();
    $(".pt_popup_container").fadeOut();
    scrollAble('details');
})
$(document).mouseup(function (e) {
    if ($("details").has(e.target).length === 0) {
        $("details").fadeOut();
        $(".pt_popup_container").fadeOut();
        $("#close").fadeOut();
        scrollAble('details');
    }
})
function scrollDisable(k) {
    $(k).on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}
function scrollAble(k) {
    $(k).off('scroll touchmove mousewheel');
}

//웹 중앙정렬
var user_screen = $(".pt_frame").width();
var li_first = $("#pt_web li").slice(0, 2).clone();
$("#pt_web").append(li_first)
var li_length = $("#pt_web li").length;
$("#pt_web").width(li_length * 100 + "%")
var li_gap = parseInt($("#pt_web").css("gap"));
var li_width = $("#pt_web li").width();
var li_size = li_width + li_gap
var li_center = (user_screen / 2) - (li_width / 2) - li_width - li_gap; //두번째 li가 중앙일때 margin left값
$("#pt_web").css({ "marginLeft": li_center });

//비디오 중앙정렬
var vd_first = $("#pt_video li").slice(0, 2).clone();
$("#pt_video").append(vd_first)
var vd_length = $("#pt_video li").length;
$("#pt_video").width(vd_length * 100 + "%")
var vd_gap = parseInt($("#pt_video").css("gap"));
var vd_width = $("#pt_video li").width();
var vd_size = vd_width + vd_gap
var vd_center = (user_screen / 2) - (vd_width / 2) - vd_width - vd_gap; //두번째 li가 중앙일때 margin left값
$("#pt_video").css({ "marginLeft": vd_center });

// 버튼형 슬라이드
var n = 0;
$("#web_bt button").click(function () {
    var web_bt = $("#web_bt button").index(this);
    console.log(web_bt)
    if (web_bt == 0) {
        if (n == 0) {
            $("#pt_web").addClass("no_more_left")
            return false;
        }
        $("#pt_web").removeClass("no_more_left")
        $("#pt_web").removeClass("no_more_right");
        n--;
    } else {
        if (n <= li_length - 3) {
            $("#pt_web").removeClass("no_more_left");
            $("#pt_web").removeClass("no_more_right");
            n++;
        }
        if (n > li_length - 3) {
            n -= 1;
            $("#pt_web").addClass("no_more_right")
            return false;
        }
    }
    $("#pt_web").stop().animate({
        marginLeft: li_center - li_size * n
    }, 700)
});

var k = 0;
$("#video_bt button").click(function () {
    var vd_bt = $("#video_bt button").index(this);
    if (vd_bt == 0) {
        if (k == 0) {
            $("#pt_video").addClass("no_more_left")
            return false;
        }
        $("#pt_video").removeClass("no_more_left")
        $("#pt_video").removeClass("no_more_right");
        k--;
    } else {
        if (k <= vd_length - 3) {
            $("#pt_video").removeClass("no_more_left");
            $("#pt_video").removeClass("no_more_right");
            k++;
        }
        if (k > vd_length - 3) {
            k -= 1;
            $("#pt_video").addClass("no_more_right")
            return false;
        }
    }
    $("#pt_video").stop().animate({
        marginLeft: vd_center - vd_size * k
    }, 700)
});

// 그래픽디자인 중앙정렬
var user_screen2 = $(".design_frame").width();
var de_first = $(".pt_design li").eq(0).clone();
if ($(document).width() < 755) { $(".pt_design").append(de_first) }
var de_length = $(".pt_design li").length;
if ($(document).width() < 755) $(".pt_design").width(de_length * 100 + "%")
var de_gap = parseInt($(".pt_design").css("gap"));
var de_width = $(".pt_design li").width();
var de_size = de_width + de_gap
var de_center = (user_screen2 / 2) - (de_width / 2)  //두번째 li가 중앙일때 margin left값
if ($(document).width() < 755) { $(".pt_design").css({ "marginLeft": de_center }); }

//무한슬라이드 + 마우스 오버시 정지
var m = 0;
var auto1 = true,
    auto2 = true,
    auto3 = true;
var drag1 = false,
    drag2 = false,
    drag3 = false;
var web_x = 0,
    web_left = 0;
var video_x = 0,
    video_left = 0;
var design_x = 0,
    design_left = 0;
if ($(window).outerWidth() < 767) {
    setInterval(function () {
        if (auto1) {
            n++;
            $("#pt_web").animate({
                marginLeft: li_center - li_size * n
            }, 500, function () {
                if (n == li_length - 2) {
                    n = 0;
                    $("#pt_web").css("margin-left", li_center)
                }
            })
        }
        if (auto2) {
            k++;
            $("#pt_video").delay(700).animate({
                marginLeft: vd_center - vd_size * k
            }, 500, function () {
                if (k == vd_length - 2) {
                    k = 0;
                    $("#pt_video").css("margin-left", vd_center)
                }
            })
        }
        if (auto3) {
            m++;
            $(".pt_design").animate({
                marginLeft: de_center - de_size * m
            }, 500, function () {
                if (m == de_length - 1) {
                    m = 0;
                    $(".pt_design").css("margin-left", de_center)
                }
            })
        }
    }, 2000)
    $("#pt_web").on({
        "mousedown touchstart mouseover": function (e) {
            drag1 = true;
            auto1 = false;
            e.type == "mousedown" ? web_x = e.clientX : web_x = e.targetTouches[0].clientX;
            web_left = parseInt($(this).css("margin-left"))
            $(this).addClass("drag1");
            // return false;
        }, "mouseup touchend": function () {
            drag1 = false;
            // auto = true;
            $(".drag1").removeClass("drag1");
        }, "mousemove touchmove": function (e) {
            if (drag1) {
                var x;
                e.type == "mousemove" ? x = web_left + (e.clientX - web_x) * 1.2 : x = web_left + (e.targetTouches[0].clientX - web_x) * 1.2;
                if (x < li_center && x > li_center - li_size * (li_length - 3)) {
                    $(".drag1").css("margin-left", x)
                }
            }
        }
    })
    $("#pt_video").on({
        "mousedown touchstart": function (e) {
            drag2 = true;
            auto2 = false;
            e.type == "mousedown" ? video_x = e.clientX : video_x = e.targetTouches[0].clientX;
            video_left = parseInt($(this).css("margin-left"))
            $(this).addClass("drag2");
            // return false;
        }, "mouseup touchend": function () {
            drag2 = false;
            // auto = true;
            $(".drag2").removeClass("drag2");
        }, "mousemove touchmove": function (e) {
            if (drag2) {
                var x;
                e.type == "mousemove" ? x = video_left + (e.clientX - video_x) * 1.2 : x = video_left + (e.targetTouches[0].clientX - video_x) * 1.2;
                if (x < vd_center && x > vd_center - vd_size * (vd_length - 3)) {
                    $(".drag2").css("margin-left", x)
                }
            }
        }
    })

    $(".pt_design").on({
        "mousedown touchstart": function (e) {
            drag3 = true;
            auto3 = false;
            e.type == "mousedown" ? design_x = e.clientX : design_x = e.targetTouches[0].clientX;
            design_left = parseInt($(this).css("margin-left"))
            $(this).addClass("drag3");
            // return false;
        }, "mouseup touchend": function () {
            drag3 = false;
            // auto = true;
            $(".drag3").removeClass("drag3");
        }, "mousemove touchmove": function (e) {
            if (drag3) {
                var x;
                e.type == "mousemove" ? x = design_left + (e.clientX - design_x) * 1.2 : x = design_left + (e.targetTouches[0].clientX - design_x) * 1.2;
                if (x < de_center && x > de_center - de_size * (de_length - 2)) {
                    $(".drag3").css("margin-left", x)
                }
            }
        }
    })
    // 16:9비율로 고정시키기
    var auto_height = parseInt($(".pt_frame li").css("width")),
        auto_height2 = parseInt($(".pt_design li").css("width"))
    $(".pt_frame li").css("height", auto_height * 9 / 16)
    $(".pt_design li").css("height", auto_height2 * 9 / 16)
    //입장씬(모바일)
    $(window).scroll(function () {
        var value = $(this).scrollTop();
        if (value <= screen / 2) {
            $("nav ul li").eq(0).addClass("here")
        } else {
            $("nav ul li").eq(0).removeClass("here")
        }
        if (value >= 200) {
            $(".about_profile").addClass("about_profile_slide")
            $(".about_frame>h2").addClass("about_profile_slide")
        }
        if (value >= about.top - h && value < portfolio.top - h) {
            $("nav ul li").eq(1).addClass("here")
        } else {
            $("nav ul li").eq(1).removeClass("here")
        }
        if (value >= about.top) {
            $(".about_history").addClass("about_history_slide")
            $(".about_skill").addClass("about_skill_slide")
            $(".skill_bar").addClass("skill_bar_up")
        }
        if (value >= portfolio.top - h * 1.5) {
            $("#pt_page h3:nth-of-type(1)").addClass("pt_slide")
            $("#web_bt").delay(1200).fadeIn(300)
            setTimeout(function () {
                $("#pt_web li").addClass("pt_slide")
            }, 700)
            setTimeout(function () {
                $("#pt_web li").eq(0).addClass("pt_slide")
            }, 300)
            setTimeout(function () {
                $("#pt_web li").eq(2).addClass("pt_slide")
            }, 500)
        }
        if (value < contact.top - h && value >= portfolio.top - h) {
            $("nav ul li").eq(2).addClass("here")
            $("#pt_page h3:nth-of-type(2)").addClass("pt_slide")
            $("#video_bt").delay(1200).fadeIn(300)
            setTimeout(function () {
                $("#pt_video li").addClass("pt_slide")
            }, 700)
            setTimeout(function () {
                $("#pt_video li").eq(0).addClass("pt_slide")
            }, 300)
            setTimeout(function () {
                $("#pt_video li").eq(2).addClass("pt_slide")
            }, 500)
        } else {
            $("nav ul li").eq(2).removeClass("here")
        }
        if (value > portfolio.top + h) {
            $(".cont_text").addClass("cont_text_slide")
            $(".cont_area").addClass("cont_area_slide")
        }
        if (value >= contact.top - h) {
            $("nav ul li").eq(3).addClass("here")
        } else {
            $("nav ul li").eq(3).removeClass("here")
        }
    })
} else {
    //스킬 게이지, 입장씬(웹버전)
    $(window).scroll(function () {
        var value = $(this).scrollTop();
        if (value >= screen) {
            $("nav ul").addClass("fix")
        } else {
            $("nav ul").removeClass("fix")
        }
        if (value >= about.top && value <= portfolio.top) {
            $(".skill_bar").addClass("skill_bar_up")
        } else {
            $(".skill_bar").removeClass("skill_bar_up")
        }
        if (value > screen / 2 && value < portfolio.top) {
            $(".about_profile").addClass("about_profile_slide")
            $(".about_frame>h2").addClass("about_profile_slide")
        } else {
            $(".about_profile").removeClass("about_profile_slide")
            $(".about_frame>h2").removeClass("about_profile_slide")
        }
        if (value > about.top && value < portfolio.top) {
            $(".about_history").addClass("about_history_slide")
            $(".about_skill").addClass("about_skill_slide")
        } else {
            $(".about_history").removeClass("about_history_slide")
            $(".about_skill").removeClass("about_skill_slide")
        }
        if (value >= screen_about / 2 + screen && value <= portfolio.top + screen_portfolio / 2) {
            $("#pt_page h3:nth-of-type(1)").addClass("pt_slide")
            $("#web_bt").delay(1200).fadeIn(300)
            setTimeout(function () {
                $("#pt_web li").addClass("pt_slide")
            }, 700)
            setTimeout(function () {
                $("#pt_web li").eq(0).addClass("pt_slide")
            }, 300)
            setTimeout(function () {
                $("#pt_web li").eq(2).addClass("pt_slide")
            }, 500)
        } else {
            $("#pt_page h3:nth-of-type(1)").removeClass("pt_slide")
            $("#web_bt").css("display", "none")
            $("#pt_web li").removeClass("pt_slide")
        }
        if (value >= portfolio.top && value <= contact.top - h) {
            $("#pt_page h3:nth-of-type(2)").addClass("pt_slide")
            $("#video_bt").delay(1200).fadeIn(300)
            setTimeout(function () {
                $("#pt_video li").addClass("pt_slide")
            }, 700)
            setTimeout(function () {
                $("#pt_video li").eq(0).addClass("pt_slide")
            }, 300)
            setTimeout(function () {
                $("#pt_video li").eq(2).addClass("pt_slide")
            }, 500)
        } else {
            $("#pt_page h3:nth-of-type(2)").removeClass("pt_slide")
            $("#video_bt").css("display", "none")
            $("#pt_video li").removeClass("pt_slide")
        }
        if (value >= contact.top - h) {
            $(".cont_text").addClass("cont_text_slide")
            $(".cont_area").addClass("cont_area_slide")
        } else {
            $(".cont_text").removeClass("cont_text_slide")
            $(".cont_area").removeClass("cont_area_slide")
        }
    })
}


// 메일 보내기
//이름란에 유효성 검사
$("#user_name,#user_address").keyup(function () {
    var name = $(this).val().length;
    if (name >= 2) {     //정상입력
        $(this).next().fadeIn();
        $(this).removeClass("alert")
    } else {           //미입력
        $(this).addClass("alert");
        $(this).next().fadeOut();
    }
});
//메세지란에 유효성 검사
$("#msg").keyup(function () {
    var name = $(this).val().length;
    if (name >= 5) {     //정상입력
        $(this).removeClass("alert")
    } else {           //미입력
        $(this).addClass("alert");
    }
});
$("#send_bt").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var name = $("#user_name").val().length;
    var subject = $("#user_address").val().length;
    var msg = $("#msg").val().length;
    if (name < 2) {
        $("#user_name").addClass("alert").focus();
    } else if (subject < 2) {
        $("#user_address").addClass("alert").focus();
    } else if (msg < 5) {
        $("#msg").addClass("alert").focus();
    } else {
        email();
    }
});

$("#close_send").click(function () {
    $(".send_popup").fadeOut();
    $("#send_complete").fadeOut();
    scrollAble('.send_popup');
})