$(document).ready(() => {
  const userInput = $("#userName");
  const passInput = $("#password");
  const confirmpassword = $("#confirmpassword");
  const userValidation = $(".user-validation");
  const userValidation1 = $("#userValidation1");
  const userValidation2 = $("#userValidation2");
  const userValidation3 = $("#userValidation3");
  const signUpbtn = $("#signup");
  userValidation.empty();

  const errorSet = (errortext, element) => {
    element.text(errortext);
  };

  // استفاده از رویداد input برای به روزرسانی آنی
  $("#userName").on("input", () => {
    if (!isuser(userInput.val())) {
      errorSet("نام کاربری معتبر نیست", userValidation1);
    } else {
      errorSet("نام کاربری معتبر است", userValidation1);
    }
  });
  $("#password").on("input", () => {
    if (!isuser(passInput.val())) {
      errorSet("پسورد معتبر نیست", userValidation2);
    } else {
      errorSet(" پسورد معتبر است", userValidation2);
    }
  });

  signUpbtn.on("click", () => {
    if (
      userInput.val() === "" ||
      passInput.val() === "" ||
      confirmpassword.val() === ""
    ) {
      alert("لطفا تمامی فیلدهارا پر نمایید");
    } else if (
      !isuser(passInput.val()) ||
      !isuser(userInput.val()) ||
      confirmpassword.val() !== passInput.val()
    ) {
      alert("لطفا فیلدهارا درست پر کنید");
    } else if (
      isuser(passInput.val()) &&
      isuser(userInput.val()) &&
      confirmpassword.val() === passInput.val()
    ) {
      const newAccount = {
        username: userInput.val(),
        password: passInput.val(),
      };

      // ذخیره اطلاعات در Local Storage
      const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
      accounts.push(newAccount);
      localStorage.setItem("accounts", JSON.stringify(accounts));
      alert("ثبت‌نام با موفقیت انجام شد");
    }
  });

  const isuser = (uservalid) => /^[0-9a-z]{6,16}$/.test(uservalid);
});
