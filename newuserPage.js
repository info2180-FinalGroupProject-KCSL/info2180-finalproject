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
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

window.onload =  function (){
    
    httpRequest = new XMLHttpRequest();
    loginBtn = document.getElementById("submit");
    loginBtn.addEventListener("click", checkfield);
    logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", logoutUser);
    
    function checkfield(event){
        firstName = document.getElementById("form").elements["fname"].value.trim();
        lastName = document.getElementById("form").elements["lname"].value.trim();
        passWord = document.getElementById("form").elements["psw"].value.trim();
        eMail = document.getElementById("form").elements["email"].value.trim();
        if (!firstName){
            alert("Please enter First Name");
        }
        if(!lastName){
            alert("Please enter Last Name");
        }
        if (!(passRegex.test(passWord))){
            alert("Password must contain at least one number and one letter, and one capital letter and are at least 8 characters long");
        }
        if (!(emailRegex.test(eMail))){
            alert("E-Mail must be in the format email@example.com");
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
            $("login").load("issue.html")
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