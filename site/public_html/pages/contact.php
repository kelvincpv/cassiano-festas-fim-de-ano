<!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title pb-0">
          <h1>Fale Conosco</h1>
        </div>
      </div>

      <div class="container" data-aos="fade-up">
        <div class="row mt-5">
          <div class="col-lg-12 mt-5 mt-lg-0">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Nome" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Assunto" required>
                </div>
                <div class="col-md-6 form-group mt-3">
                  <input type="text" class="form-control" name="cel" id="cel" placeholder="Celular" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="8" placeholder="Mensagem" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Enviar</button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->