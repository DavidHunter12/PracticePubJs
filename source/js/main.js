//=require jquery/dist/jquery.min.js
$(document).ready(function(){
    var $header = $('#header');
    $header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide2');

				});

			});
});