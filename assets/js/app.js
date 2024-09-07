$(document).ready(() => {
  const userInput = $("#userName");
  const passInput = $("#password");
  const signInBtn = $("#signinbtn");
  const userValidation = $(".user-validation");
  const errorSet = (errortext) => {
    userValidation.text(errortext);
  };
  userValidation.empty();

  signInBtn.on("click", (e) => {
    const interUser = userInput.val();
    const interPass = passInput.val();
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const matchingAcc = accounts.find((acc) => {
      return acc.username === interUser && acc.password === interPass;
    });
    if (matchingAcc) {
      errorSet("✔you enter successfully");
      $(".user-validation").css({ color: "green" });
    } else if (interUser === "" || interPass === "") {
      errorSet("*please fill the fields");
      $(".user-validation").css({ color: "red" });
    } else {
      errorSet("*please enter the correct info");
      $(".user-validation").css({ color: "red" });

      userInput.val("");
      passInput.val("");
    }
  });
});
