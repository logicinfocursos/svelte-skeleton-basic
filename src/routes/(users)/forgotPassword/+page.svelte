<script>

import {apiGET} from '../../../lib/db/dbmethods'

  const loginSubmitForm = async () => {

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

  const searchUser = async (email, password) => {
    let user;
    let verifyResult = false;

    const response = await apiGET({ table: 'users', key: email, fieldSearch: 'email'})
    
    user = response[0];


    if (email && email !== "" && password && password !== "" && user && user.email && user.password) {
      if (user.email === email) {
        if (user.password === password) {
          verifyResult = true;

        } 
      } 
    }

    return verifyResult;
  };

  const formVerify = () => {

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
</script>

<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">esqueceu a sua senha?</h3>
              <h6 class="mb-3">não se preocupe, vamos te enviar outra para o seu email...</h6>
              <div
                class="alert alert-danger"
                role="alert"
                id="alertErrorMessage"
                style="display:none"
              >
                <h4 class="alert-heading">Dados incorretos!</h4>
                <p>nome do usuário e/ou senha incorretos</p>
                <hr />
                <p class="mb-0">Por gentileza, confira os dados digitados</p>
              </div>

              <div
                class="alert alert-success"
                role="alert"
                id="alertSuccessMessage"
                style="display:none"
              >
                <h4 class="alert-heading">Acesso liberado!</h4>
                <p>vai ser ótimo ter você de volta</p>
                <hr />
                <p class="mb-0">redirecionando...</p>
              </div>

              <form on:change={formVerify} >
                <div class="form-floating mb-3">
                  <input
                 
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="o seu email: name@example.com"
                    on:change={formVerify}
                  />
                  <label for="email">e-mail cadastrado</label>
              
                  <p
                    id="emailErrorMessage"
                    class="form-text text-danger"
                    style="display:none"
                  >
                    <strong>[email]</strong> inválido ou não preenchido!!!
                  </p>
                </div>                

                <div class="d-grid">
                  <button
                    on:click={loginSubmitForm}
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="button">entrar</button
                  >
                  <div class="text-center">
                    <a class="small" href="/register"
                      >quer criar uma conta?</a
                    >
                    <br />
                    <a class="small" href="/login">quer realizar o login?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .login {
    min-height: 100vh;
  }

  .bg-image {
    background-image: url("https://source.unsplash.com/WEQbe2jBg40/600x1200");
    background-size: cover;
    background-position: center;
  }

  .login-heading {
    font-weight: 300;
  }

  .btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
  }
</style>
