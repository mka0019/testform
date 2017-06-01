$("i").click(function(){
			console.log("this is running");
			$(this).toggleClass("ion-android-close");
			// $(this).parent().toggleClass("slidedown");
			 // $(this).closest('div.container').toggleClass("slidedown");
			 $(this).closest('div.header').toggleClass('overlay');
			 $("a").closest('div.main-nav').toggleClass('showactive');
			 
			 // closest.('div.container') => using this cases to add the slidedown properties to only the container class. this doesnt work on id's. closet will go up the tree branch to what element I want to add the 

			// GOAL: using parents cause to add height to header, container, and mobile nav - want to add height to only header/container
		});


//scroll code: https://codepen.io/wesleyvanwyk1979/pen/iAxwr
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

