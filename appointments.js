$(document).ready(function(){
    
    
    
    $("#submit").click(getAppointments);
    
    $("#cancelAdd").click(function(){
        $("#newFields").hide();
        $("#newButton").val("Add");
    });
    
    $("#newButton").click(function(){
        var buttonVal = $("#newButton")[0].value;
        if(buttonVal==="New"){
            $("#newButton").val("Add");
            $("#newFields").show();
            $("#cancelAdd").show();        
        }else{
            $("#newButton").val("New");
            $("#newFields").hide();
            $("#cancelAdd").hide();  
        }

    });
});



function getAppointments(searchQuery){
    $.ajax({
        type: "GET",
        url: "/cgi-bin/appointments.cgi",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            if (data.error) { // script returned error
              console.log('error getting db results');
            } // if
            else { 
              console.log('db searched');
            }
          }
    });
};
