function validate() {
  var uname = document.getElementById('uname').value;
  var pwd = document.getElementById('pwd').value;
  // alert(uname + pwd);
  if(pwd.length<8){
    document.getElementById('pwd').value='';
    alert("Password too short");
  }
  // window.redirect("/index.html");
  if (pwd="qwertyuiop") {
    alert("Valid Password");
    window.location.href = "index.html";
  } else {
    alert("Invalid Password");
  }
}
