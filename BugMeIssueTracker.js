var httpRequest;
var firstName;
var lastName;
var passWord;
var eMail;

var loginBtn;
var loginString;
var loginDiv;

var logoutBtn;

var homeBtn;

var addUserBtn;

var newIssueBtn;
var newuserDiv;
var newuserBtn;

var createissueDiv;
var createBtn;

var issuesDiv;
var issueAllBtn;
var issueOpenBtn;
var issueTicketsBtn;

var xssDiv;
var markclosedBtn;
var markprogressBtn;

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var response;

window.onload =  function (){
    
    httpRequest = new XMLHttpRequest();
    
    loginBtn = document.getElementById("loginsubmit");
    loginBtn.addEventListener("click", loginPage);
    
    newuserBtn = document.getElementById("newusersubmit");
    newuserBtn.addEventListener("click", newUserPage);

    
    issueAllBtn = document.getElementById("issueall");
    issueAllBtn.addEventListener("click", issueAllPage);

    issueOpenBtn = document.getElementById("issueopen");
    issueOpenBtn.addEventListener("click", issueOpenPage);
    
    issueTicketsBtn = document.getElementById("issuetickets");
    issueTicketsBtn.addEventListener("click", issueTicketsPage);
    
    createBtn = document.getElementById("create");
    createBtn.addEventListener("click", createIssuePage);
    
    markclosedBtn = document.getElementById("markclosed");
    markclosedBtn.addEventListener("click", xssPage);
    
    markprogressBtn = document.getElementById("markprogress");
    markprogressBtn.addEventListener("click", xssPage);
    
    logoutBtn = document.getElementById("logout");
    //logoutBtn.addEventListener("click", loginPage);
    
    newuserDiv = document.getElementById("newuser");
    loginDiv = document.getElementById("login");
    issuesDiv = document.getElementById("issues");
    createissueDiv = document.getElementById("createissue");
    xssDiv = document.getElementById("xss_vulnerability");
    
    hideDiv(newuserDiv);
    showDiv(loginDiv);
    hideDiv(issuesDiv);
    hideDiv(createissueDiv);
    hideDiv(xssDiv);
    
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

function loginPage(){
    hideDiv(newuserDiv);
    hideDiv(loginDiv);
    showDiv(issuesDiv);
    hideDiv(createissueDiv);
    hideDiv(xssDiv);
    
}

function logoutPage(){
    
}

function issueAllPage(){
    hideDiv(newuserDiv);
    hideDiv(loginDiv);
    showDiv(issuesDiv);
    hideDiv(createissueDiv);
    hideDiv(xssDiv);
    
}

function issueOpenPage(){
    hideDiv(newuserDiv);
    hideDiv(loginDiv);
    showDiv(issuesDiv);
    hideDiv(createissueDiv);
    hideDiv(xssDiv);
    
}

function issueTicketsPage(){
    hideDiv(newuserDiv);
    hideDiv(loginDiv);
    showDiv(issuesDiv);
    hideDiv(createissueDiv);
    hideDiv(xssDiv);
    
}

function newUserPage(){
    
}

function createIssuePage(){
    hideDiv(newuserDiv);
    hideDiv(loginDiv);
    hideDiv(issuesDiv);
    showDiv(createissueDiv);
    hideDiv(xssDiv);
}

function xssPage(){
    
}

function hideDiv(divname){
  divname.style.display ='none';
}

function showDiv(divname){
  divname.style.display ='block';
}

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