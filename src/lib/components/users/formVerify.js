export   const formVerify = () => {

    let verifyResult = true;

    document.getElementById("emailErrorMessage").style.display = "block";
    document.getElementById("passwordErrorMessage").style.display = "block";

    if (
      document.getElementById("email") &&
      document.getElementById("password")
    ) {
      const _email = document.getElementById("email");
      const _password = document.getElementById("password");

      if (_email.value && _email.value !== "" && _email.value.length > 4) {
        document.getElementById("emailErrorMessage").style.display = "none";

      }else  verifyResult = false;

      if (
        _password.value &&
        _password.value !== "" &&
        _password.value.length > 3
      ) {
        document.getElementById("passwordErrorMessage").style.display = "none";
        
      } else verifyResult = false;
    }

    return verifyResult;
  };