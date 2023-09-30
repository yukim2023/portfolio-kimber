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
  }, 100);
  */

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    let target = $(this).data("modal");
    $("." + target).addClass("active");
    /* $("body").addClass("no_scroll"); // 背景固定/*/
    return false;
  });

  //closeボタンをクリックしたらモーダルウィンドウを閉じる
  close.on("click", function () {
    container.removeClass("active");
  });

  //モーダルウィンドウの外側をクリックしたらモーダルウィンドウを閉じる
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active");
    }
  });

  // moreをクリックしたら表示されているスライダーのモーダルを表示
  $('.more').on('click', function(){
    let target = $(this).next().find('.slick-current').data('modal');
    $("." + target).addClass('active');
    return false;
  });

  // モーダル内矢印の制御
  $('.modal-next').on('click', function(){
    $(this).closest('.modal-container').removeClass('active');
    $(this).closest('.modal-container').next().addClass('active');
    return false;
  });
  $('.modal-prev').on('click', function(){
    $(this).closest('.modal-container').removeClass('active');
    $(this).closest('.modal-container').prev().addClass('active');
    return false;
  });

});

// ↓ ハンバーガー
//開くボタンをクリックしたらモーダルを表示する
$(function () {
  $(".sp_btn").click(function () {
    $(this).toggleClass("active");
    $('.sp_nav').toggleClass("active");

    // こちらのコードは不要
    // if ($(this).hasClass("active")) {
    //   $(".sp_nav").addClass("active");
    // } else {
    //   $(".sp_nav").removeClass("active");
    // }
  });
});
