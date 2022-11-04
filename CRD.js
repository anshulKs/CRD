
    $(document).ready(function(){
    var input1;
    var input2;
    var input3;
    var input4;
    var input5;
    var input6;
    // Add Button
   $("#add-button").click(function(){
       input1=$("#first_name-input").val();
       input2=$("#last_name-input").val();
       input3=$("#email-input").val();
       input4=$("#phoneno-input").val();
       input5= $("#pwd-input").val();
       input6= $("#confirm_pwd-input").val();
    //    Validations
       if(input6==input5){
       if(input1==""){
           $("#first_name-input").addClass("error");
       }
       else if(input2==""){
        $("#first_name-input").removeClass("error");
        $("#last_name-input").addClass("error");
       }
       else if(input3==""){
        $("#first_name-input").removeClass("error");
       $("#last_name-input").removeClass("error");
        $("#email-input").addClass("error");
       }
       else if(input4==""){
        $("#first_name-input").removeClass("error");
       $("#last_name-input").removeClass("error");
       $("#email-input").removeClass("error");
       $("#phoneno-input").addClass("error");
       }
       else if(input5==""){
        $("#first_name-input").removeClass("error");
       $("#last_name-input").removeClass("error");
       $("#email-input").removeClass("error");
       $("#phoneno-input").removeClass("error");
       $("#pwd-input").addClass("error");
       }
       else if(input6==""){
        $("#first_name-input").removeClass("error");
       $("#last_name-input").removeClass("error");
       $("#email-input").removeClass("error");
       $("#phoneno-input").removeClass("error");
       $("#pwd-input").removeClass("error");
       $("#confirm-pwd-input").addClass("error");
       }
    //    validations end here
       else{
       $("#first_name-input").removeClass("error");
       $("#last_name-input").removeClass("error");
       $("#email-input").removeClass("error");
       $("#phoneno-input").removeClass("error");
       $("#first_name-input").val("");
       $("#last_name-input").val("");
       $("#email-input").val("");
       $("#phoneno-input").val("");
       $("#pwd-input").val("");
       $("#confirm_pwd-input").val("");
       $("table").append("<tr><td>"+input1 + "</td><td>"+input2 + "</td><td>"+  input3+"</td><td>"+input4 + "</td><td>"+"<button class='del' type='button' >Del</button>"  +"</td></tr>")
    //    Delete Button and operation
       $(".del").click(function(){
  var r = confirm("Are You sure you want to delete this user?");
  if (r == true) {
    $(this).parent().parent().remove();
       }
   else {
      alert("ok")
  }
        $(this).parent().parent().remove();
       })
    }
}  
else{
    alert("passwords are not same!")
}      
   })
})