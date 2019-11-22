var httpRequest;
var loginBtn;
var logoutBtn;
var homeBtn;
var addUserBtn;
var newIssueBtn;
var logoutBtn;
var loginString;
var response;

window.onload =  function (){
    
    httpRequest = new XMLHttpRequest();
    loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", loginUser);
    logoutBtn = document.getElementById("logout");
    logout.addEventListener("click", logoutUser);
    
    function loginUser(event){
        event.preventDefault();
        var firstName = document.getElementById("firstName").value.trim;
        loginString += "?firstname=" + firstName;
        var lastName = document.getElementById("lastName").value.trim;
        loginString += "?lastName=" + lastName;
        var passWord = document.getElementById("passWord").value.trim;
        loginString +="?password="+  passWord;
        var eMail = document.getElementById("eMail").value.trim;
        loginString += "?email=" + eMail;
        
        httpRequest.onreadystatechange = forward;
        httpRequest.open('POST');
        httpRequest.send(loginString);
    }
    
    function sucessfulLogin(checking){
        if (response == "Login was successful"){
            window.location.replace();
        }
    }
    
    function logoutUser(){
        
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