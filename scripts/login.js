
    
    //var smt=document.getElementById("submit");

    $("#submit").click(function() {
        
        let dta={
           
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val()
        };

        console.log(dta);
        $.ajax({
            url:"http://localhost:3000/employees",
            type:"POST",
            data:dta,
            success:function(result){
              console.log(result);
              window.location.href='../pages/dashboard.html';
            },
        });
    });
