function submitForm(ev){

    // var span= document.querySelectorAll("span");
    // for(var i=0; i<span.length; i++ ){

    // span[i].textContent="";

    
    // }  


     //First Name
    if(!document.querySelector("#disp1").validity.valid)
    {   
        $("#disp1").css("border-color","red");
      //  document.querySelector("#disp1").style.borderColor="red";
        showNameError();
    }
 
      //Last Name
        if(!document.querySelector("#disp2").validity.valid)
        {   
            $("#disp2").css("border-color","red");
            showNameError();
        }

        //Email
        if(!document.querySelector("#disp3").validity.valid)
        {   
            $("#disp3").css("border-color","red");
            showNameError();
        }

        //Address
 
        if(!document.querySelector("#exampleFormControlTextarea1").validity.valid)
        {   
            $("#exampleFormControlTextarea1").css("border-color","red");
            showNameError();
        }


           //Password
 
           if(!document.querySelector("input[type=password]").validity.valid)
           {   
               $("input[type=password]").css("border-color","red");
               showNameError();
           }

           //Dropdown STREAM

           var e = document.getElementById("exampleFormControlSelect1");
        var optionSelIndex = e.options[e.selectedIndex].value;
        // var optionSelectedText = e.options[e.selectedIndex].text;
        if (optionSelIndex == 0) {
            $("#exampleFormControlSelect1").css("border-color","red");
            $("#error6").text("Please enter your specialization!");
            $("#error6").css("color","red");
    // alert("Please select a Course");
        }
        else {
            $("#error6").text("");
            // alert("Success !! You have selected Course : " + optionSelectedText); ;
        }


                //Dropdown CITIES

                var f = document.getElementById("exampleFormControlSelect2");
                var optionSelIndex = f.options[e.selectedIndex].value;
                // var optionSelectedText = e.options[e.selectedIndex].text;
                if (optionSelIndex == 0) {
                    $("#exampleFormControlSelect2").css("border-color","red");
                    $("#error7").text("Please enter your preferred location for work!");
                    $("#error7").css("color","red");
            // alert("Please select a Course");
                }
                else {
                    $("#error7").text("");
                    // alert("Success !! You have selected Course : " + optionSelectedText); ;
                }
   

var span= document.querySelectorAll("span");
 for(var i=0; i<span.length; i++ ){
if(span[i].textContent!=""){
    return false;
}else{
    continue;
}
 }
 
return true;
    
}

function showNameError(){
    //First Name
    if(document.querySelector("#disp1").validity.valueMissing){
        $("#error1").text("The First name is empty");
        $("#error1").css("color","red"); }

    else  if(document.querySelector("#disp1").validity.patternMismatch){
        $("#error1").text("Pattern does not match!");
        $("#error1").css("color","red"); }

 //Last Name
        if(document.querySelector("#disp2").validity.valueMissing){
            $("#error2").text("    The Last name is empty");
            $("#error2").css("color","red"); }
    else  if(document.querySelector("#disp2").validity.patternMismatch) {
        document.querySelector("#error2").textContent="  Pattern does not match";}

 //Email
        if(document.querySelector("#disp3").validity.valueMissing){
            $("#error3").text("Please enter your email!");
        $("#error3").css("color","red"); }
        else  if(document.querySelector("#disp3").validity.patternMismatch) {
            $("#error3").text("Pattern does not match");
        $("#error3").css("color","red"); }

        //Address
        if(document.querySelector("#exampleFormControlTextarea1").validity.valueMissing){
            $("#addr").text("Please enter your address!");
        $("#addr").css("color","red"); }


        //Password
        if(document.querySelector("input[type=password]").validity.valueMissing){
            $("#error4,#error5").text("Please enter a password!");
        $("#error4,#error5").css("color","red"); }
        else if($("input[name=psw]").val()!=$("input[name=cpsw]").val()){

            $("#error4,#error5").text("Passwords does not match, please try again!");
            $("#error4,#error5").css("color","red");
        }

}