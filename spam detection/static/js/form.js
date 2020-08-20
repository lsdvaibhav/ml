$(document).ready(function(){
	$('.form')on('submit', function(event){
	textval = $('#message').val();
	$.ajax({
		url: '/spam'
		type :'POST'
		dataType : 'text',
		data: textval,
		
	})
	.done(function(data){
		$('#result').text(data).show();
		
	});
	
	
	event.preventDefault();
	
});
	
});