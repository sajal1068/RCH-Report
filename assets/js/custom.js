
 
$(function() {
	// Menu Tabular
	var $menu_tabs = $('.menu__tabs li a'); 
	$menu_tabs.on('click', function(e) {
		e.preventDefault();
		$menu_tabs.removeClass('active');
		$(this).addClass('active');

		$('.menu__item').fadeOut(300);
		$(this.hash).delay(300).fadeIn();
	});

});




$(document).ready(function(){	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

$('#mytable tr td').each(function(){
	
		var cellValue = $(this).html();
		
	//	if(!isNaN(parseFloat(cellValue))) {
		  if (cellValue == "Good") {			
			$(this).css({ "background-color": "#D9534F", "color": "#fff" }) 
		  }
	   
		  if(cellValue == "Poor"){		  
		   $(this).css({ "background-color": "#5CB85C", "color": "#fff" })
		  }
		 
		   if(cellValue == "Avarge"){	
			   $(this).css({ "background-color": "#F0AD4E", "color": "#fff" })
		   }	 
		
	//	}
	  });

	
    

    