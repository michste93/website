jQuery(document).ready(function($){
     //$.datepicker.setDefaults($.datepicker.regional['it']);
        $("#datepicker").datepicker();
        alert("ma che oh");
 /*    var url = window.location.href;
     if (url.charAt(url.length-1) == '/') {
         url = url.substr(0,url.length - 1);
   }
   var curPage = url.split('/').pop().toLowerCase();
   
   
 if (curPage.toLowerCase() == "summer.html"){
        $('head').append('<style>#cd-intro-fix::after{background: transparent url(../img/summer.jpg) no-repeat;}</style>');
        //document.getElementById("cd-intro-fix::after").style.backgroundImage="url('img/summer.jpg')";
    }
   */ 

	 //on mobile - open/close primary navigation clicking/tapping the menu icon
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

