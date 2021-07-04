let username=document.getElementById("username");
let password=document.getElementById("password");
let flag=1; 

function validateForm(){
    
    if(username.value == "")
    {
        document.getElementById('userError').innerHTML="User name is empty.";   
       
    }
    if(username.value.length >=1 && username.value.length <3)
    {
        document.getElementById('userError').innerHTML="User name is less than 3 charaters.";   
       
    }
    if(password.value == ""){
        document.getElementById('passError').innerHTML="Password is empty.";   
    }
    else if(password.value.length<8){
        document.getElementById('passError').innerHTML="Password must contain minimum 8 characters at least."; 
    }
    else{
        document.getElementById('username').value="";
        document.getElementById('password').value="";  
    }

}
function abc(){
    
    document.getElementById('username').value="";
    document.getElementById('password').value="";
}