  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();



(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=275548259187268";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var anchor = '',
    pageOffset = '',
    scrollPos = '';
$(function() {
    $("a[href*='#']").click(function(e) {
        e.preventDefault();
        anchor = $(this).attr('href');
		if (anchor == "#download") {
		    viewOffset = 600;
			}
			if (anchor == "#about") {
		    viewOffset = 120;
			}
			if (anchor == "#faq") {
		    viewOffset = 140;
			}
        pageOffset = $("a[name='" + anchor + "']").offset();
        scrollPos = pageOffset.top - viewOffset
        $('html, body').animate({
            scrollTop: scrollPos
        }, '50');
    });
});



function hideDF(){
$('#rose').hide();
$('#kevin').hide();
$('#jack').show();
}

function hideDA(){
$('#jack').hide();
$('#kevin').hide();
$('#rose').show();
}

function hideFA(){
$('#jack').hide();
$('#rose').hide();
$('#kevin').show();
}

$(document).scroll(function(){
	var $window = $(window);
var posNow = $window.scrollTop();

var top1 = $("#extension").offset().top;
var start1 = top1 - $window.height();
var ext = top1 + $("#extension").height();

var top2 = $("#b").offset().top;
var start2 = top2 - $window.height();
var faq = top2 + $("#b").height();

var top3 = $("#parker").offset().top;
var start3 = top3 - $window.height();
var abt = top2 + $("#parker").height();

if (posNow > 0 && posNow < ext) {
hideFA();	
}
else if (posNow > ext && posNow < faq) {
hideDA();	
}
else if (posNow > faq && posNow < abt) {
hideDF();	
}
});
