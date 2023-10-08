// ↓カーソル
var cursor = document.getElementById("cursor");
// カーソル用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});
// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll("a");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("cursor--hover");
  });
  link[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("cursor--hover");
  });
}

// ↓モーダルウィンドウ
$(function () {
  var open = $(".slider li");
  var close = $(".modal-close"),
    container = $(".modal-container");

  /*//読み込んで5秒後にモーダルウィンドウを表示
  setTimeout(() => {
    container.addClass("active");
    return false;
  }, 5000);
  */

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    let target = $(this).data("modal");
    $("." + target).addClass("active");
    $("html, body").css("overflow", "hidden");
    return false;
  });
  //closeボタンをクリックしたらモーダルウィンドウを閉じる
  close.on("click", function () {
    container.removeClass("active");
    $("html, body").removeAttr("style");
  });
  /*//モーダルウィンドウの外側をクリックしたらモーダルウィンドウを閉じる
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active");
      $("body").removeClass("no_scroll");
    }
  });
*/

  // moreをクリックしたら表示されているスライダーのモーダルを表示
  $(".more").on("click", function () {
    let target = $(this).next().find(".slick-current").data("modal");
    $("." + target).addClass("active");
    return false;
  });

  // モーダル内矢印の制御
  $(".modal-next").on("click", function () {
    $(this).closest(".modal-container").removeClass("active");
    $(this).closest(".modal-container").next().addClass("active");
    return false;
  });
  $(".modal-prev").on("click", function () {
    $(this).closest(".modal-container").removeClass("active");
    $(this).closest(".modal-container").prev().addClass("active");
    return false;
  });
});

// ↓ ハンバーガー
//開くボタンをクリックしたらモーダルを表示する
$(function () {
  $(".sp_btn").click(function () {
    $(this).toggleClass("active");
    $(".sp_nav").toggleClass("active");

    // こちらのコードは不要
    // if ($(this).hasClass("active")) {
    //   $(".sp_nav").addClass("active");
    // } else {
    //   $(".sp_nav").removeClass("active");
    // }
  });
});

// test

//スクロールした際の動きを関数でまとめる
function PageTopCheck() {
  var winScrollTop = $(this).scrollTop();
  var secondTop = $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if (winScrollTop >= secondTop) {
    $(".js-scroll").removeClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を除去
    $(".js-pagetop").addClass("scroll-view"); //.js-pagetopにscroll-viewというクラス名を付与
  } else {
    //元に戻ったら
    $(".js-scroll").addClass("scroll-view"); //.js-scrollからscroll-viewというクラス名を付与
    $(".js-pagetop").removeClass("scroll-view"); //.js-pagetopからscroll-viewというクラス名を除去
  }
}

//クリックした際の動き
$(".scroll-top a").click(function () {
  var elmHash = $(this).attr("href"); //hrefの内容を取得
  if (elmHash == "#area-2") {
    //もし、リンク先のhref の後が#area-2の場合
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, pos); //#area-2にスクロール
  } else {
    $("body,html").animate({ scrollTop: 0 }, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
  return false; //リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopCheck(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopCheck(); /* スクロールした際の動きの関数を呼ぶ*/
});
