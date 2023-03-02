$(document).ready(function(){
let id=localStorage.getItem("id");
console.log(id);

$.ajax({
    url:"http://localhost:3000/employees/"+id,
    type:"GET",
    success:function(response)
    {
        console.log(response);
        document.getElementById("firstName").value=response.firstName;
        document.getElementById("lastName").value=response.lastName;
        
    },
});

});

function updateData()
{
    let id=localStorage.getItem("id");
    console.log(id);
    let dta={
           
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
    };

    $.ajax({
        url:"http://localhost:3000/employees/" + id,
            type:"PUT",
            data:dta,
            success:function(response){
              console.log(response);
              window.location.href="../pages/dashboard.html";
              
            },
    });
}