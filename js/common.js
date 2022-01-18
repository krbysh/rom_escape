/* fastclick */
window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

//背景中央寄せ
function backgroundMargin() {
    var ww = $(window).width();
    var iw = $('#background img').width();
    var w2 = (ww - iw) / 2;
    $('#background').css('margin-left', w2);
}

//スマホの判定
function deviceCechek() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if (windowWidth < 600) {
        if (!$('#view_container').hasClass('device_sp')) {
            $('#view_container').addClass('device_sp');
            $('#view_container').find('#menu').css('height', windowHeight - 30);
        }
    } else {
        if ($('#view_container').hasClass('device_sp')) {
            $('#view_container').removeClass('device_sp');
            $('#view_container').find('#menu').css('height', 'auto');
        }
    }
}

//stage横幅をスマホ閲覧時に調整する
function stageWidthSP() {
    if ($('#view_container').hasClass('device_sp')) {
        var windowWidth = $(window).width();
        $('#stage').css('width', '100%');
    } else {
        $('#stage').css('width', '980');
    };
}

//画面サイズを拾ってページの高さを調整
function stageHeight() {
    var h = $(window).height();
    var ft = $('#footer').height() + 1;
    var mh = h - ft;
    $('#stage').css('min-height', mh + 'px')
}

function toDoubleDigits(num) {
    num += '';
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;
};

function eventCountDown() {
    var from = new Date().getTime();
    var to = new Date("2019/6/28 18:00:00").getTime();

    var countdown = (to - from);
    var tmp = Math.floor(countdown / 1000);
    var sec = toDoubleDigits(tmp % 60);
    var min = toDoubleDigits(Math.floor(tmp / 60) % 60);
    var hou = toDoubleDigits(Math.floor(tmp / 60 / 60) % 24);
    var day = Math.floor(tmp / 60 / 60 / 24);

    if (countdown > 1) {
        $('.countdown_wrapper .countdown1').show();
        $('.countdown_wrapper .countdown1_close').hide();
        $('.countdown_wrapper .countdown1 .countDays').text(day);
        $('.countdown_wrapper .countdown1 .countHours').text(hou);
        $('.countdown_wrapper .countdown1 .countMinitues').text(min);
        $('.countdown_wrapper .countdown1 .countSecounds').text(sec);
    } else {
        $('.countdown_wrapper .countdown1').hide();
        $('.countdown_wrapper .countdown1_close').show();
    };

    setTimeout('eventCountDown()', 1000);
};

function eventCountDown2() {
    var from = new Date().getTime();
    var to = new Date("2019/7/2 00:00:00").getTime();

    var countdown = (to - from);
    var tmp = Math.floor(countdown / 1000);
    var sec = toDoubleDigits(tmp % 60);
    var min = toDoubleDigits(Math.floor(tmp / 60) % 60);
    var hou = toDoubleDigits(Math.floor(tmp / 60 / 60) % 24);
    var day = Math.floor(tmp / 60 / 60 / 24);

    if (countdown > 1) {
        $('.countdown_wrapper .countdown2').show();
        $('.countdown_wrapper .countdown2_close').hide();
        $('.countdown_wrapper .countdown2 .countDays').text(day);
        $('.countdown_wrapper .countdown2 .countHours').text(hou);
        $('.countdown_wrapper .countdown2 .countMinitues').text(min);
        $('.countdown_wrapper .countdown2 .countSecounds').text(sec);
    } else {
        $('.countdown_wrapper .countdown2').hide();
        $('.countdown_wrapper .countdown2_close').show();
    };

    setTimeout('eventCountDown2()', 1000);
};

//クッキーの削除
function deleteCookie() {
    var cookie_name = "squadronlData";
    $('#delete_cookie').click(function () {
        if (!confirm('本当にcookieを削除しますか？')) {
            /* キャンセルの時の処理 */
            return false;
        } else {
            /*　OKの時の処理 */
            $.cookie('squadronlData', "", {
                path: "/squadron_calculater.html",
                expires: -1
            });
            location.reload();
        }
    });
}


//--------------------------------------
//　エイプリルフール2019用リダイレクト処理
//--------------------------------------
// $(function () {
//  //日付の取得
//  var now = new Date();
//  var M = now.getMonth() + 1;
//  var D = now.getDate();
//  //4月1日のみ
//  if (M == '4' && D == '1') {
//      //append to cookie.js
//      $('head').append('<script type="text/javascript" src="./js/jquery.cookie.js" charset="UTF-8"></script>');
//      // 初回アクセスのみの処理
//      if ($.cookie("access_aprilfool2019") == undefined) {
//          //初回アクセスを記録
//          $.cookie("access_aprilfool2019", "onece");
//          //リダイレクト
//          // window.location.href = "http://ff14moo.moo.jp";
//          window.location.href = "http://ff14moomoo.com/retro_design_2019.html";
//      }
//  }
// });


//--------------------------------------
//　Google Adsense
//--------------------------------------

// $(function(){
//     var Adsense = '';

//     Adsense += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n';
//     Adsense += '<script>\n';
//     Adsense += '(adsbygoogle = window.adsbygoogle || []).push({\n';
//     Adsense += 'google_ad_client: "ca-pub-1949810770313293",\n';
//     Adsense += 'enable_page_level_ads: true\n';
//     Adsense += '});\n';
//     Adsense += '</script>\n';

//     $('head').append(Adsense);
// });


//--------------------------------------
//　Googleアナリティクスタグ
//--------------------------------------

$(function () {
    var host = location.host;
    var Analytics = '';
    if (host == '') {
        Analytics += '<!-- Global site tag (gtag.js) - Google Analytics -->';
        Analytics += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-1"></script>';
        Analytics += '<script>';
        Analytics += 'window.dataLayer = window.dataLayer || [];';
        Analytics += 'function gtag(){dataLayer.push(arguments);}';
        Analytics += 'gtag(\'js\', new Date());';
        Analytics += 'gtag(\'config\', \'UA-XXXXXX-1\');';
        Analytics += '</script>';
        $('head').append(Analytics);
    }
});

$(function () {
    var host = location.host;
    var Analytics = '';
    if (host == '' || host == '') {
        Analytics += '<!-- Global site tag (gtag.js) - Google Analytics -->';
        Analytics += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX"></script>';
        Analytics += '<script>';
        Analytics += 'window.dataLayer = window.dataLayer || [];';
        Analytics += 'function gtag(){dataLayer.push(arguments);}';
        Analytics += 'gtag(\'js\', new Date());';
        Analytics += 'gtag(\'config\', \'UA-XXXXXX-2\');';
        Analytics += '</script>';
        $('head').append(Analytics);
    }
});

//汎用トグル
//<a class="commonToggle">もっと見る</a>
//<div class="commonToggleBox"></div>
function commonToggle() {
    $('.commonToggle').css('cursor', 'pointer').addClass('link');
    $('.commonToggleBox').hide();
    $('.commonToggle').click(function (event) {
        $(this).next('.commonToggleBox').slideToggle('fast');
        $(this).remove();
    });
}

$(function () {

    eventCountDown();
    eventCountDown2();
    commonToggle();

    // フッター生成
    $('#footer').append(
        '<a class="go_to_top">></a>', '記載されている会社名･製品名･システム名などは各社の商標または登録商標です。<br>', 'Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.<br>', 'Copyright (C) 2013 - 2020 むーむーのネタ帳 All Rights Reserved.　<a href="http://amzn.asia/eakM0TV " class="link" target="blank" style="font-size:11px">[カンパ]<br>'
    );

    $('#footer .go_to_top').click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "300");
    });

    var url = window.location;
    var path = url.pathname.split('/');
    var file_name = path.pop();

    //スマホチェック
    deviceCechek();
    if (file_name == 'index.html') { } else {
        stageHeight();
    }
    // stageWidthSP();

    //containerに#background追加
    $('#view_container').prepend('<div id="background"><img><div></div></div>')

    //windowリサイズ時に背景の位置調整
    $(window).resize(function () {
        backgroundMargin();
        deviceCechek();
        if (file_name == 'index.html') { } else {
            stageHeight()
        }
        // stageWidthSP();
    });

    $('.tab_menu').click(function () {
        stageHeight()
    })

    // 背景画像指定
    var url = window.location;
    var path = url.pathname.split('/');
    var file_name = path.pop().slice(0, -5);

    var imageCheckUrl = './img/bg/' + file_name;

    $('#background img').attr('src', './img/bg/' + file_name + '.png').error(function () {
        $('#background img').attr('src', './img/bg/default.png');
    })

    $("#background img").bind("load", function () {
        backgroundMargin();
    });

})