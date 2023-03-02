$(document).ready(function(){
        
        $.ajax({
            url:"http://localhost:3000/employees",
            type:"GET",
          
            success:function(result){
              console.log(result);
              var innerHTML="";
              let notesArray=result;
              console.log(notesArray);

              for(const note of notesArray){
                console.log(note.id);

                innerHTML+=`<tr>
                            <td>${note.firstName}</td>
                            <td>${note.lastName}</td>
                            
                            <td><img width="20" height="20" id="${note.id}" src="../assets/delete.png" alt="delete" onclick="remove(this)">&nbsp&nbsp
                            <img width="20" height="20" id="${note.id}" src="../assets/edit.png" alt="edit" onclick="update(this)"></td>
                            </tr>`;
              }
              $("#employeeList").append(innerHTML);
              
            
            },
            error: function (error) {
                console.log(`Error ${error}`);
            },

            
        });
       
    });       
   
    
    function remove(ctl) {
        let id = $(ctl).attr('id');
    $.ajax({
        
        url: 'http://localhost:3000/employees/'+id,
        method: 'DELETE',
        success: function () {
            alert('record has been deleted');
            $(ctl).parents("tr").remove();
        },
        error: function (error) {
            console.log(`Error ${error}`);
        },
    });
}

function update(ctl){
    let id = $(ctl).attr('id');
    localStorage.setItem("id",id);
    window.location.href="../pages/edit.html";
}
   
        
   

    // function update(ctl) {
    //    // window.location.href='../pages/dashboard.html';
    //     let id = $(ctl).attr('id');
    // $.ajax({
        
    //     url: 'http://localhost:3000/Employees/'+id,
    //     method: 'PUT',
    //     data:dta,
    //     success: function () {
    //         alert('record has been deleted');
          
    //     },
    //     error: function (error) {
    //         console.log(`Error ${error}`);
    //     },
    // });
    // }
   
        
    
