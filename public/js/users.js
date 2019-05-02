$("#submit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newUser = {
    name: $(".login-form input[type='text']").val(),
    email: $(".login-form input[type='email']").val(),
    password: $(".login-form input[type='password']").val()
  };

  // Send the POST request.
  $.ajax("/register", {
    type: "POST",
    data: newUser
  }).then(function(outcome) {
    console.log(outcome);
    if (outcome.success === false) {
      alert("Sorry the email is taken");
    } else {
      window.location.href = "/userProfile";
    }

    // Reload the page to get the updated list
  });
});

$("#loginSubmit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var currUser = {
    email: $(".login-form input[type='email']").val(),
    password: $(".login-form input[type='password']").val()
  };

  // Send the POST request.
  $.ajax("/login", {
    type: "POST",
    data: currUser
  }).then(function(outcome) {
    console.log(outcome);
    if (outcome.success === false) {
      alert("Incorrect User Name or Password");
    } else {
      window.location.href = "/userProfile" + "?UserEmail=" + currUser.email;
    }

    // Reload the page to get the updated list
  });
});

$(".logout-btn").on("click", function(event) {
  event.preventDefault();

  $.ajax("/", {
    type: "POST"
  }).then(function(outcome) {
    if (outcome.success === true) {
      console.log("User Logged Out");
    }
  });

  window.location.href = "/";
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(".events").on("click", function() {
  window.location.href = "/events" + window.location.search;
});
