import {searchUser, formVerify} from "./index"




export const loginSubmitForm = async () => {

    document.getElementById("alertErrorMessage").style.display = "none";
    document.getElementById("alertSuccessMessage").style.display = "none";

    if (formVerify) {
      const _email = document.getElementById("email");
      const _password = document.getElementById("password");

      const _searchResult = await searchUser(_email.value, _password.value);

      if (_searchResult) {
        document.getElementById("alertSuccessMessage").style.display = "block";

        setTimeout(() => {
          document.getElementById("alertSuccessMessage").style.display = "none";
          _email.value = "";
          _password.value = "";
          window.location.href = "/home";
        }, 1000);
      } else {
        document.getElementById("alertErrorMessage").style.display = "block";

        setTimeout(() => {
          document.getElementById("alertErrorMessage").style.display = "none";
          _email.value = "";
          _password.value = "";
          document.getElementById("email").focus();
        }, 2000);
      }
    }
  };