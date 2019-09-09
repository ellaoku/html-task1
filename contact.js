function validation(){
    var title = document.getElementById("title").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;
    var error_message = document.getElementById("error_message");
​
if(title.value <2){
    text = "Please Enter Valid Title";
    error_message.innerHTML = text;
    return false;
}

if(name.value <2){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
}

if(email.indexof("@") == -1 || email.length <6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
}

if(textarea.length <=140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
}

alert("Form Submitted Successfully!")
return true;
required
}
