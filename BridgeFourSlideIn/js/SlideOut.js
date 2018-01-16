$(document).ready(function () {
    function UpdateData() {
        GetFollower();
        GetTopDonation();
        GetLatestDonation();
        // $('#Follower').html(follower);
        
        // jQuery.get('TA/most_recent_donator.txt', function (data) {
        //     $('#Donation').html(data)
        // });
        
        // jQuery.get('TA/all_time_top_donator.txt', function (data) {
        //     $('#TopDonation').html(data)
        // });
        
        // jQuery.get('TA/total_follower_count.txt', function (data) {
        //     $('#Goal').html(data + '/250')
        // });


    }

    function GetFollower() {
        $.getJSON('https://api.twitch.tv/kraken/channels/judgementally/follows?client_id=qa97cn8hixpuvetd0nktdmqx2k1pg4&limit=1').done(function(data) {
            $('#Follower').html(data.follows["0"].user.display_name);
            $('#Goal').html(data._total + '/250');
        });
    }

    function GetTopDonation() {
        $.ajax({
            url: 'https://api.streamelements.com/kappa/v2/tips/5a5d2bee6f08520001e45a29/top',
            type: 'GET',
            dataType: 'json',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWE1ZDJiZWU2ZjA4NTIwMDAxZTQ1YTI4IiwiY2hhbm5lbCI6IjVhNWQyYmVlNmYwODUyMDAwMWU0NWEyOSIsInByb3ZpZGVyIjoidHdpdGNoIiwicm9sZSI6Im93bmVyIiwiaWF0IjoxNTE2MDU1NTM0LCJpc3MiOiJTdHJlYW1FbGVtZW50cyIsImp0aSI6IjhjNmU5ZjJlLTJjOWQtNDQ2ZS04MGQ3LWQ1ODQyMDJiOTgwZCJ9.gFODwIECeYa-G5hguFhC0Rwn0MTQY8D1noc81K9jpOs"
            },
            success: function(data) {
                 $('#TopDonation').html(data["0"].username + " $" + data["0"].total); 
            },
            error: function() {}
          });
    }

    function GetLatestDonation() {
        $.ajax({
            url: 'https://api.streamelements.com/kappa/v2/tips/5a5d2bee6f08520001e45a29',
            type: 'GET',
            dataType: 'json',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWE1ZDJiZWU2ZjA4NTIwMDAxZTQ1YTI4IiwiY2hhbm5lbCI6IjVhNWQyYmVlNmYwODUyMDAwMWU0NWEyOSIsInByb3ZpZGVyIjoidHdpdGNoIiwicm9sZSI6Im93bmVyIiwiaWF0IjoxNTE2MDU1NTM0LCJpc3MiOiJTdHJlYW1FbGVtZW50cyIsImp0aSI6IjhjNmU5ZjJlLTJjOWQtNDQ2ZS04MGQ3LWQ1ODQyMDJiOTgwZCJ9.gFODwIECeYa-G5hguFhC0Rwn0MTQY8D1noc81K9jpOs"
            },
            success: function(data) {
                 $('#Donation').html(data.docs["0"].donation.user.username + " $" + data.docs["0"].donation.amount); 
            },
            error: function() {}
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

    // GetFollower();
    // GetLatestDonation()
    UpdateData();
    setTimeout(showpanel, 15000);

});