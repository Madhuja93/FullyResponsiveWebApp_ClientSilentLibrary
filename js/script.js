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

  var generatedId = localStorage.length + 1;

  var userInfo = {
    _Id: generatedId,
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  var userInfo = JSON.stringify(userInfo);

  localStorage.setItem("readerInfo_" + generatedId, userInfo);

  window.location.assign("readers.html?Id=readerInfo_" + generatedId);
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

  var userInfo = getreaderInfoRecord();

  localStorage.setItem("readerInfo_", userInfo_Id);

  window.location.assign("readers.html");
}

function onUpdateButtonClick() {
  $(".userinfo").addClass("update-btn");
  $(".loginregister").removeClass("update-btn");

  var userInfo = getreaderInfoRecord();
  $("#firstName_0").val(userInfo._firstName);
  $("#lastName_0").val(userInfo._lastName);
  $("#email_0").val(userInfo._email);
  $("#password_0").val(userInfo._password);
}

function onDeleteButtonClick() {
  
  var userInfo = getreaderInfoRecord();
  localStorage.removeItem("readerInfo_" + userInfo._Id);
  alert("Successfully Deleted");

  window.location.assign("register.html");
}

function onUpdateRecord() {
  
  var firstname = $("#firstName_0").val();
  var lastname = $("#lastName_0").val();
  var Email = $("#email_0").val();
  var Password = $("#password_0").val();

  var existingUser = getreaderInfoRecord();

  var userInfo = {
    _Id: existingUser._Id,
    _firstName: firstname,
    _lastName: lastname,
    _email: Email,
    _password: Password,
  };

  localStorage.setItem(
    "readerInfo_" + existingUser._Id,
    JSON.stringify(userInfo)
  );

  alert("Successfully Updated!");

  window.location.assign("readers.html?Id=readerInfo_" + existingUser._Id);
}

function getreaderInfoRecord() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var userId = url.searchParams.get("Id");

  var _userInfos = localStorage;
  var _userInfo;
  for (var i = 0; i < _userInfos.length; i++) {
    if (
      userId ==
      "readerInfo_" + JSON.parse(localStorage.getItem(userId))._Id
    ) {
      _userInfo = JSON.parse(localStorage.getItem(userId));
    }
  }

  return _userInfo;
}
