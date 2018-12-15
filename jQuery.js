// AJAX NEWBIE

$(document).ready(function() {
            var rezultatas
    $('button').click(function() {
        $.ajax({ 
            url: "bandom.html", 
            type: "GET", 
            dataType: "html",
    
        success: function(data) { 
   $('.rezultatas').html(data);
            alert(labas);
        }});
            
            });
        });

