<script>
  import Breadcrumb from "../../lib/components/layout/breadcrumb.svelte";
</script>

<div class="container px-5 my-5" id="contactform">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <Breadcrumb currentPage="contato" />
      <div class="card border-0 rounded-3 shadow-lg mt-5">
        <div class="card-body p-4">
          <div class="text-center">
            <div class="h1 fw-light">fale conosco!</div>
            <p class="mb-4 text-muted">
              estamos à disposição para conversar, quando desejar.
            </p>
          </div>

          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <!-- Name Input -->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Name"
                data-sb-validations="required"
              />
              <label for="name">nome</label>
              <div class="invalid-feedback" data-sb-feedback="name:required">
                [nome] é um campo requirido.
              </div>
            </div>

            <!-- Email Input -->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                data-sb-validations="required,email"
              />
              <label for="emailAddress">e-mail</label>
              <div
                class="invalid-feedback"
                data-sb-feedback="emailAddress:required"
              >
                [e-mail] é um campo requirido.
              </div>
              <div
                class="invalid-feedback"
                data-sb-feedback="emailAddress:email"
              >
                o [e-mail] informado é inválido.
              </div>
            </div>

            <!-- Message Input -->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                id="message"
                type="text"
                placeholder="Message"
                data-sb-validations="required"
              ></textarea>
              <label for="message">mensagem</label>
              <div class="invalid-feedback" data-sb-feedback="message:required">
                [mensagem] é um campo requirido.
              </div>
            </div>

            <!-- Submit success message -->
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">o envio com sucesso</div>
              </div>
            </div>

            <!-- Submit error message -->
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">
                [ERRO!] - mensagem não enviada, por gentileza, tente novamente!
              </div>
            </div>

            <!-- Submit button -->
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg disabled"
                id="submitButton"
                type="submit">enviar</button
              >
            </div>
          </form>
          <!-- End of contact form -->
        </div>
        <div class="p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3668.7788876529103!2d-46.56753192495616!3d-23.141756046310245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m5!1s0x94cec1087217a789%3A0x4f42675e836f961f!2sAv.%20Paulista%2C%201000%20-%20Piqueri%2C%20Atibaia%20-%20SP%2C%2012947-414!3m2!1d-23.141761!2d-46.564957!4m0!5e0!3m2!1spt-BR!2sbr!4v1701550427264!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
