function validateForm() {
   let x = document.forms["myForm"]["fname"].value;
   let y = document.forms["myForm"]["pass"].value;
   if (x == "") {
     document.getElementById("error_n").innerHTML="name is required";
     return false;
   }else if(y == ""){
     document.getElementById("error_p").innerHTML="password is required";
     return false;
   }else{
      alert("successfull");
   }
 }