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

function onFormUpdate() {
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

function onUpdateButtonClick() {
  $(".userinfo").addClass("update-btn");
  $(".loginregister").removeClass("update-btn");

  var userInfo = sessionStorage.getItem("readerInfo");
  var userInfoJSON = JSON.parse(userInfo);
  $("#firstName_0").val(userInfoJSON._firstName);
  $("#lastName_0").val(userInfoJSON._lastName);
  $("#email_0").val(userInfoJSON._email);
  $("#password_0").val(userInfoJSON._password);
}

function onDeleteButtonClick() {
  sessionStorage.setItem("readerInfo", null);
  alert("Successfully Deleted");

  window.location.assign("register.html");
}

function onUpdateRecord() {
  var firstname = $("#firstName_0").val();
  var lastname = $("#lastName_0").val();
  var Email = $("#email_0").val();
  var Password = $("#password_0").val();

  var userInfo = {
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  sessionStorage.setItem("readerInfo", JSON.stringify(userInfo));

  alert("Successfully Updated!");

  window.location.assign("readers.html");
}
