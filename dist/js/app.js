/*
 * Designed and created by ScorpioCoding under the MIT license.
 * So enjoy...
 *
 * https://scorpiocoding.net
 */


$(".cross").hide();
$("nav").hide();

$(".hamburger").click(function () {
  Open();
});
$(".cross").click(function () {
  Close();
});

function Open() {
  $("nav").slideToggle("slow", function () {
    $(".hamburger").hide();
    $(".cross").show();
    $(".menu").addClass("show");
    $(".mitem").addClass("show");
  });
}

function Close() {
  $("nav").slideToggle("slow", function () {
    $(".cross").hide();
    $(".hamburger").show();
    $(".menu").removeClass("show");
    $(".mitem").removeClass("show");
  });
}