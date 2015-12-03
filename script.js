$(document).ready(function(){
    
    var s = 0;
    
	$('#add').click(function(){
		
		var $item = $('#inp').val();
		event.preventDefault();
        if ($item) {
            $('ul').append('<li class="item">'+$item+'<div class="x">x</div>'+'</li>');
            document.getElementById("inp").value = "";
            s++;
            if(s === 1){
            $('#sum').html(s +' item');
        } else{
        	$('#sum').html(s +' items');
        }
        }
	});
	
	$(document).on('click', '.x', function(){
	    $(this).parent().addClass("strikethrough");
	    $(this).parent().hide('slow', function(){ $(this).remove(); });
	    s--;
	    if(s === 1){
            $('#sum').html(s +' item');
        } else{
        	$('#sum').html(s +' items');
        }
	});
    
    $(document).on('click', '.item', function(){
        $(this).toggleClass("strikethrough");
    });
    
    $('#delete').click(function(){
        $('ul').empty();
        s = 0;
        if(s === 1){
            $('#sum').html(s +' item');
        } else{
        	$('#sum').html(s +' items');
        }
    });
    
});
