$(document).ready(function() {
    if ($('#alertSuccess').text().trim() == "") {
        $('#alertSuccess').hide();
    }

    $('#alertError').hide();
})

// SAVE
$(document).on("click","#btnSave", function(event) {
    // Clear alerts
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide();

    // Form validation
    var status = validateCusForm(); 
    if (status != true) 
    { 
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return; 
    } 

    // if hidCusIDSave value is null set as POST else set as PUT
    var type = ($("#hidCusIDSave").val() == "") ? "POST" : "PUT";

    // ajax communication
    $.ajax({
        url: "CliMngAPI",
        type: type,
        data: $("#formCustomer").serialize(),
        dataType: "text",
        complete: function(response, status) {
            onCusSaveComplete(response.responseText, status);
        }
    });
});

// after completing save request
function onCusSaveComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully saved");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divCusGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while saving");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while saving");
        $("#alertError").show();
    } 

    //resetting the form
    $("#hidCusIDSave").val("");
    $("#formCustomer")[0].reset();
}

// UPDATE
//to identify the update button we didn't use an id we used a class
$(document).on("click", ".btnUpdate", function(event) 
{ 
    //get cus id from the data-cusid attribute in update button
    $("#hidCusIDSave").val($(this).data('cusid')); 
    //get data from <td> element
    $("#Cus_id").val($(this).closest("tr").find('td:eq(0)').text()); 
    $("#name").val($(this).closest("tr").find('td:eq(1)').text()); 
    $("#NIC").val($(this).closest("tr").find('td:eq(2)').text()); 
    $("#Email").val($(this).closest("tr").find('td:eq(3)').text()); 
    $("#Phone").val($(this).closest("tr").find('td:eq(4)').text()); 
    $("#Location").val($(this).closest("tr").find('td:eq(5)').text()); 
    $("#Password").val($(this).closest("tr").find('td:eq(6)').text()); 
    $("#age").val($(this).closest("tr").find('td:eq(7)').text()); 
    $("#Assign_eid").val($(this).closest("tr").find('td:eq(8)').text()); 
    
}); 


// DELETE
$(document).on("click",".btnRemove", function(event) {
    // ajax communication
    $.ajax({
        url: "CliMngAPI",
        type: "DELETE",
        data: "Cus_id=" + $(this).data("cusid"),
        dataType: "text",
        complete: function(response, status) {
            onCusDeleteComplete(response.responseText, status);
        }
    });
});


// after completing delete request
function onCusDeleteComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully deleted");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divCusGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while deleting");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while deleting");
        $("#alertError").show();
    } 
}



// VALIDATION
function validateCusForm() { 
    // Cus id 
    if ($("#Cus_id").val().trim() == "") 
    { 
        return "Insert Customer ID."; 
    } 
    
    // NAME 
    if ($("#name").val().trim() == "") 
    { 
        return "Insert Customer Name."; 
    } 
    
    // NIC
    if ($("#NIC").val().trim() == "") 
    { 
        return "Insert NIC."; 
    } 
    
    // Email
    if ($("#Email").val().trim() == "") 
    { 
        return "Insert Email."; 
    } 
    
    
    // Phone
    if ($("#Phone").val().trim() == "") 
    { 
        return "Insert Phone."; 
    } 
    
    // Location
    if ($("#Location").val().trim() == "") 
    { 
        return "Insert Location."; 
    } 
    
    // Password
    if ($("#Password").val().trim() == "") 
    { 
        return "Insert Password."; 
    } 
    
    
    // Age
    if ($("#age").val().trim() == "") 
    { 
        return "Insert Age."; 
    } 
    
    
    // Assign Employee ID
    if ($("#Assign_eid").val().trim() == "") 
    { 
        return "Insert Assign Employee ID."; 
    } 
    
    return true; 
} 

