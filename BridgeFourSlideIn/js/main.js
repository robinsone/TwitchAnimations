$(document).ready(function() {
    function showpanel() {
        $("#alertwidth").attr('class', 'animated slideOutLeft');
		setTimeout(hidepanel, 900000) //Time betweeen showing it
    }
	
	function hidepanel() {
		$("#alertwidth").attr('class', 'animated slideOutLeft');
		setTimeout(showpanel, 15000) //Time between showing and hiding
	}
    

    setTimeout(showpanel, 10000)
});
