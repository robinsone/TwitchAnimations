$(document).ready(function() {
    function showpanel() {
        $("#alertwidth").attr('class', 'animated slideOutRight');
		setTimeout(hidepanel, 90000) //Time betweeen showing it
    }
	
	function hidepanel() {
		$("#alertwidth").attr('class', 'animated slideInRight');
		setTimeout(showpanel, 15000) //Time between showing and hiding
	}

    setTimeout(showpanel, 10000)
});
