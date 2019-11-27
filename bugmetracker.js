var httpRequest;
var firstName;
var lastName;
var passWord;
var eMail;
var loginBtn;
var logoutBtn;
var homeBtn;
var addUserBtn;
var newIssueBtn;
var logoutBtn;
var loginString;
var response;
var emailRegex = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");
var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

window.onload =  function (){
    
    httpRequest = new XMLHttpRequest();
    loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", checkfield);
    logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", logoutUser);
    
    function checkfield(event){
        firstName = document.getElementById("firstName").value.trim;
        lastName = document.getElementById("lastName").value.trim;
        passWord = document.getElementById("passWord").value.trim;
        eMail = document.getElementById("eMail").value.trim;
        if (!firstName){
            document.getElementById("firstName").innerHTML = "Please enter First Name";
        }
        if(!lastName){
            document.getElementById("lastName").innerHTML = "Please enter Last Name";
        }
        if (!(passRegex.test(passWord))){
            document.getElementById("passWord").innerHTML = "Password must contain at least one number and one letter, and one capital letter and are at least 8 characters long";
        }
        if (!(emailRegex.test(eMail))){
            document.getElementById("eMail").innerHTML = "E-Mail must be in the format email.example.com";
        }
        if(firstName && lastName && (passRegex.test(passWord)) && (emailRegex.test(eMail))){
            loginUser(firstName,lastName,passWord,eMail)
        }
    }
    
    function loginUser(firstName,lastName,passWord,eMail){
        event.preventDefault();
        loginString += "?firstname=" + firstName;
        loginString += "?lastName=" + lastName;
        loginString +="?password="+  passWord;
        loginString += "?email=" + eMail;
        
        httpRequest.onreadystatechange = forward;
        httpRequest.open('POST');
        httpRequest.send(loginString);
    }
    
    function sucessfulLogin(checking){
        if (response == "Login was successful"){
            window.location.assign(dasboard.html);
        }
    }
    
    function forward(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
                response = httpRequest.responseText;
                sucessfulLogin(response);

            }
        }
    }
}