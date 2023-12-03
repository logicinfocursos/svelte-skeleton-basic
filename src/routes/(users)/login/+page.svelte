<script>
  import { loginSubmitForm, formVerify } from "../../../lib/components/users";
</script>

<div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">bem vindo de volta!</h3>

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

              <form on:change={formVerify}>
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
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="a sua senha"
                    on:change={formVerify}
                  />
                  <label for="password">senha de acesso</label>

                  <p
                    id="passwordErrorMessage"
                    class="form-text text-danger"
                    style="display:none"
                  >
                    <strong>[senha]</strong> inválida ou não preenchida!!!
                  </p>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="stayConnected"
                  />
                  <label class="form-check-label" for="stayConnected">
                    me manter conectado
                  </label>
                </div>

                <div class="d-grid">
                  <button
                    on:click={loginSubmitForm}
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="button">entrar</button
                  >
                  <div class="text-center">
                    <a class="small" href="/forgotPassword"
                      >esqueceu a sua senha?</a
                    >
                    <br />
                    <a class="small" href="/register">criar uma conta?</a>

                    <br />
                    <a class="small" href="/home">entre sem se logar</a>
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
