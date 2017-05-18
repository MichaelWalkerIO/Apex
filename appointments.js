$(document).ready(function(){
    $("#submit").click(getAppointments($("#submitText").val()));
    
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
        }else{// Button is add
            var dateTime = $("#datetime").val(),
                desc = $("#desc").val();
            addAppointment(dateTime, desc);
            getAppointments(dateTime, desc);
            $("#newButton").val("New");
            $("#newFields").hide();
            $("#cancelAdd").hide();  
        }

    });
});

function addAppointment(dateTime, desc){
        $.ajax({
        type: "POST",
        dataType : 'application/json',
        url: "http://localhost:2200/appointments/cgi-bin/add_appointments.cgi",
        data : {
            'dateTime' : dateTime,
            'description' : desc
            },
    }).done(function(msg){
            console.log(msg);
        });
}

function getAppointments(searchParam){
    $.ajax({
        type: "POST",
        dataType : 'application/json',
        url: "http://localhost:2200/appointments/cgi-bin/get_appointments.cgi",
        data : {'searchParam' : searchParam},
    }).done(function(msg){
            console.log(msg);
        });
}
