// pickup drop toggle script
function toggleOn() {
	$('#toggle-trigger').bootstrapToggle('on')
}
// datepicker
$(function() {
	$( "#datepicker" ).datetimepicker({
		timeFormat: 'hh:mm p',
		maxHour: 24,
        maxMinutes: 60,
	});
});

// veiw port
jQuery(document).ready(function() {
    jQuery('.post').addClass("ani_hidden").viewportChecker({
        classToAdd: 'ani_visible animated fadeInUp',
        offset: 100
       });
});