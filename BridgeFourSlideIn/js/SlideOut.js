$(document).ready(function () {
    

    function UpdateData() {
        jQuery.get('TA/most_recent_follower.txt', function (data) {
            $('#Follower').html(data)
        });
        
        jQuery.get('TA/most_recent_donator.txt', function (data) {
            $('#Donation').html(data)
        });
        
        jQuery.get('TA/all_time_top_donator.txt', function (data) {
            $('#TopDonation').html(data)
        });
        
        jQuery.get('TA/total_follower_count.txt', function (data) {
            $('#Goal').html(data + '/250')
        });
    }
    
    function showpanel() {
        UpdateData();
        $("#SlideOut").attr('class', 'animated slideOutUp');
        setTimeout(hidepanel, 60000); //Time betweeen showing it
    }

    function hidepanel() {
        UpdateData();
        $("#SlideOut").attr('class', 'animated slideInDown');
        setTimeout(showpanel, 15000); //Time between showing and hiding
    }

    UpdateData();
    setTimeout(showpanel, 15000);
});