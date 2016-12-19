function formSubmit(){
	$('#submit-button').css('display', 'none');
	$('#form-loader').css('display', 'block');
	$('#submit-text').css('display', 'none');
	$('#submit-button').attr('disabled', 'true');

	var url = 'https://script.google.com/macros/s/AKfycbzx7_ZODzvjxhakJYLDfr2gFSbMAs_y0arjqF1QJmg3G5WTX90/exec';

    var jqxhr = $.post(url, $('#form').serialize(), function(data) {
    	$('#form-loader').css('display', 'none');
		$('#notification').css('display', 'block');
		$('#notification').html('Thank you for registering, Techkids will contact you as soon as possible');
        console.log("Success! Data: " + data.statusText);
	});

}

$(document).ready(function () {
	$('#form-loader').css('display', 'none');
    $('#form').on('submit', function (e) {
        e.preventDefault();
        formSubmit();
    });

});
