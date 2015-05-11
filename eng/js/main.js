jQuery(document).ready(function($){
     var tabs = document.getElementsByClassName('#cd-intro-fix');
     var url = window.location.href;
     if (url.charAt(url.length-1) == '/') {
         url = url.substr(0,url.length - 1);
   }
   var curPage = url.split('/').pop().toLowerCase();
   $('#cd-intro-fix::after').css({"background":"transparent url(../img/winter.jpg) no-repeat;"});

for (i=0; i<tabs.length; i++){
    if (tabs[i].getAttribute('data-link').toLowerCase() == "winter.html"){
        '#cd-intro-fix'.style.backgroundImage = 'url(../img/winter.jpg)';
    }
    if (tabs[i].getAttribute('data-link').toLowerCase() == "summer.html"){
        '#cd-intro-fix'.style.backgroundImage = 'url(../img/summer.jpg)';
    }
}
   
	 //on mobile - open/close primary navigation clicking/tapping the menu icon
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
	});
});
