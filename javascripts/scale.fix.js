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

$window.scroll(function() {
    var scrollTop = $window.scrollTop();
    if(scrollTop > 0 && scrollTop < 800) {
        hideDF();
    } else if(scrollTop > 800 && scrollTop < 1300) {
        hideDA();
    } else if(scrollTop > 1300 && scrollTop < 6300) {
        hideFA();
    }
});​



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