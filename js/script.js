function showMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "0";
}
function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

function onFormSubmit() {
  var firstname = $("#firstName").val();
  var lastname = $("#firstName").val();
  var Email = $("#email").val();
  var Password = $("#password").val();

  var userInfo = {
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  sessionStorage.setItem("readerInfo", JSON.stringify(userInfo));

  window.location.assign("readers.html");
}
