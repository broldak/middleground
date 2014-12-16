$('document').ready(function(){
	var myFirebaseRef = new Firebase("https://middleground.firebaseio.com/");

	$('#join-submit').on('click', function(evt){
		var fname,
				lname,
				email;

		fname = $('#first_name').val();
		lname = $('#last_name').val();
		email = $('#email_address').val();

		if (fname && lname && email){
			myFirebaseRef.push({
  			first_name: fname,
  			last_name: lname,
  			email: email
			}, function(err){
				if (err){
					console.log(err);
				} else {
					window.location.href('/thank_you.php');
				}
			});
		}

		return false;
	});

	
	$('.faq-link').on('click', function(evt){
		evt.preventDefault();
		var answer = $(this).parent().find('.faq-answer');
		answer.slideToggle('fast');
	});

	$('#arrow').click(function(){
		$('html, body').animate({
			scrollTop: $('#aboutus-section').offset().top
		}, 1000);
	});

	$('.arrow').hover(function(){
		$(this).attr('src', '/assets/arrow-dglow.png');
	},function(){
		$(this).attr('src', '/assets/arrow-d.png');
	});

	$('.join-btn-top').on('click', function(){
		$('html, body').animate({
			scrollTop: $('#join-section').offset().top
		}, 1000);
	});


});
