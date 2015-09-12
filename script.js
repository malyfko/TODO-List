$(document).ready(function(){
    
    var s = 0;
    
	$('button').click(function(){
		
		var $item = $('#inp').val();
		event.preventDefault();
		$('ul').append('<li class="item">'+$item+'<div class="x"><div class="x1"></div><div class="x2"></div></div>'+'</li>');
		document.getElementById("inp").value = "";
		s++;
		$('.sum').html(s +' elements');
	});
	
	$(document).on('click', '.x', function(){
	    $(this).parent().addClass("strikethrough");
	    $(this).parent().hide('slow', function(){ $(this).remove(); });
	    s--;
	    $('.sum').html(s +' elements');
	});
    
    $(document).on('click', '.item', function(){
        $(this).toggleClass("strikethrough");
    });
    
    
});
