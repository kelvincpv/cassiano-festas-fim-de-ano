<style>
  // Popup 
  
  @media screen and (max-width:600){
    .img-popup{
        width: 100%;
    }
  }
</style>

<script type="text/javascript">

//var $fritz2 = $.noConflict(); 
function showPopupBlack() {
  $("#newoverlay").css("display","block");
  $("#newoverlay").css("opacity",0);
  $("#newoverlay").fadeTo(1000,0.7);  
  $(".fechar").parent().show("slow"); 
  $("#newoverlay").click(function(){hidePopupBlack()})
  $(".fechar").parent().css("z-index",10000);
}

function hidePopupBlack(){
  $("#newoverlay").css("display","none");
  $(".fechar").parent().hide("slow");
} 

$(document).ready(function(){ 
  setTimeout( "showPopupBlack()", 1000);
});

</script>

<!-- COMENTAR TAG CENTER PARA OCULTAR POPUP 

<center>

    <div id="newSiteMessage" style="clear:both !important;">

      <a class="fechar" onClick="hidePopupBlack();" style="color:#FFFFFF;cursor:pointer">
          <span class="noticias-titulo" onClick="hidePopupBlack();" >Fechar</span>
      </a>

      <br/> 

      <a href="Cassiano_FimdeAno.pdf" target="_blank">
        <img class="img-popup" src="assets/img/popup.jpg" usemap="#Map" onClick="hidePopupBlack();" />
      </a>

    </div>

    <div id="newoverlay" style="opacity:0.7;" onClick="hidePopupBlack();"></div>

</center>-->

    <!-- ======= About Section ======= -->
    <section id="home" class="events spad" data-background="assets/img/about/bg-about.jpg">
      <div class="container" data-aos="fade-up">
        <div class="events-slider swiper-container" data-aos="fade-up" 
        data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-wrap align-items-center desc">
                  <div>
                    <h3 class="mb-4">Nosso restaurante.</h3>
       			        <p>
       			        O Cassiano é uma referência na culinária portuguesa. Aqui, você encontra todos os sabores e a tradição de uma das cozinhas mais saborosas do mundo, tudo elaborado com ingredientes selecionados. O ambiente agradável e a sofisticação do nosso serviço proporcionam uma experiência única.
       			        </p>
                  </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                  <div class="w-100">
                    <img src="assets/img/about/img_about.jpg" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-wrap align-items-center desc">
                  <div>
                    <h3 class="mb-4">Nossa Adega.</h3>
       			        <p>
       			        Você precisa de 3 coisas para uma perfeita experiência gastronômica: companhia agradável, comida boa e um ótimo vinho. Nossa adega conta com mais de 80 rótulos de diferentes países e mais de 1000 garrafas.
       			        </p>
                  </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                  <div class="w-100">
                    <img src="assets/img/about/img_about2.jpg" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-wrap align-items-center desc">
                  <div>
                    <h3 class="mb-4">Nosso Bar.</h3>
       			        <p>
       			        Com ambiente moderno e intimista, o Piano Bar do Cassiano é o local ideal para um agradável happy hour ou simplesmente passar o tempo acompanhado de nossas deliciosas tapas, a maior carta de bebidas da região e nossa exclusiva carta de drinks assinados e clássicos.
       			        </p>
                  </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                  <div class="w-100">
                    <img src="assets/img/about/img_about3.jpg"  class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <!-- End About Section -->

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us spad">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h1 class="text-center">Estamos abertos todos os dias</h1>
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 mb-4 mt-lg-0">
            <div class="tab-content">

              <div class="tab-pane active show" id="lunch">
                <div class="row">
                  <div class="col-lg-4 text-center order-2 order-lg-1">
                    <img src="assets/img/days/lunch.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-lg-8 details order-1 order-lg-2">
                    <h3>ALMOÇO</h3>
                    <div class="container">
                      <h2>Das 12h ás 15h</h2>
                      <p>À la Carte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="coffee">
                <div class="row">
                  <div class="col-lg-4 text-center order-2 order-lg-1">
                    <img src="assets/img/days/morning.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-lg-8 details order-1 order-lg-2">
                    <h3>CAFÉ DA MANHÃ</h3>
                    <div class="container">
                      <h2>Segunda a Sexta: Das 6h as 10h <br/>
                      Finais de semana/feriados: Das 6h30 as 10h30</h2>
                      <p>Buffet completo de café da manhã.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="tab-pane" id="dinner">
                <div class="row">
                  <div class="col-lg-4 text-center order-2 order-lg-1">
                    <img src="assets/img/days/dinner.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-lg-8 details order-1 order-lg-2">
                    <h3>JANTAR</h3>
                    <div class="container">
                      <h2>Das 18h ás 23h</h2>
                      <p>À la Carte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <ul class="nav nav-tabs we-are-open flex-wrap justify-content-center">
            <li class="nav-item me-3">
              <a class="nav-link button active show" data-bs-toggle="tab" 
              href="#coffee">Café Manhã</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link button" data-bs-toggle="tab" href="#lunch">
              Almoço</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link button" data-bs-toggle="tab" href="#dinner">Jantar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
    <!-- End Why Us Section -->

    <!-- ======= Specials Section ======= -->
    <section id="menu" class="specials spad">
      <div class="container" data-aos="fade-up">
        <div class="section-title d-flex justify-content-center">
          <div class="d-inline-block">
            <h2 class="text-left">poemas</h2>
            <p class="text-center mb-5">DA CULINÁRIA PORTUGUESA</p>
          </div>
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                Bacalhau ao Forno à Portuguesa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                Polvo Grelhado do Chefe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                Camarão Cassiano</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                Bacalhau Nunca Chega</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">
                Arroz de Pato à Cassiano</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
          	<div class="poems-slider" data-aos="fade-up" data-aos-delay="100">
        		<div class="tab-content">
			        <div class="tab-pane active show" id="tab-1">
			            <div class="row">
			               <div class="col-lg-8 details order-2 order-lg-1">
			                  	<h3>BACALHAU AO FORNO À PORTUGUESA</h3>
			                    	<p>Lombo de Bacalhau assado, batatas lagareira (assada no azeite), ovo cozido, tomate assado sem pele, cebolas,brócolis e alho.</p>
			                </div>
			                <div class="col-lg-4 img d-flex align-items-end text-center order-1 
			                order-lg-2">
			                    <img src="assets/img/cooking/specials-1.png" alt="" 
			                    class="img-fluid">
			                </div>
			            </div>
			        </div>
			        <div class="tab-pane" id="tab-2">
				       <div class="row">
				            <div class="col-lg-8 details order-2 order-lg-1">
				                <h3>POLVO GRELHADO DO CHEFE</h3>
				                <p>Polvo aromatizado com bacon, servido com arroz com brócolis</p>
				            </div>
				            <div class="col-lg-4 img d-flex align-items-end text-center order-1 order-lg-2">
				                <img src="assets/img/cooking/specials-2.png" alt="" 
				                class="img-fluid">
				            </div>
				        </div>
				    </div>
				    <div class="tab-pane" id="tab-3">
				       <div class="row">
				       		<div class="col-lg-8 details order-2 order-lg-1">
				            	<h3>CAMARÃO CASSIANO</h3>
				                <p>Camarão grande vg recheado com catupiry, empanado e frito, arroz de roquefort e couve crocante</p>
				            </div>
				            <div class="col-lg-4 img d-flex align-items-end text-center order-1 order-lg-2">
				            	<img src="assets/img/cooking/specials-3.png" alt="" 
				            	class="img-fluid">
				           	</div>
				        </div>
				    </div>
				    <div class="tab-pane" id="tab-4">
				    	<div class="row">
				        	<div class="col-lg-8 details order-2 order-lg-1">
				            	<h3>BACALHAU NUNCA CHEGA</h3>
				                <p>Bacalhau desfiado com batata palha, ovos batidos temperados com presunto parma, cebola e salsinha</p>
				           </div>
				           <div class="col-lg-4 img d-flex align-items-end text-center order-1 order-lg-2">
				          		<img src="assets/img/cooking/specials-4.png" alt="" class="img-fluid">
				           </div>
				        </div>
				   	</div>
				    <div class="tab-pane" id="tab-5">
				        <div class="row">
				        	<div class="col-lg-8 details order-2 order-lg-1">
				            	<h3>ARROZ DE PATO À CASSIANO</h3>
				                <p>Pato cozido desossado, arroz cozido no caldo do pato, paio português e molho de azeitonas verdes</p>
				           	</div>
				            <div class="col-lg-4 img d-flex align-items-end text-center order-1 order-lg-2">
				            	<img src="assets/img/cooking/specials-5.png" alt="" 
				            	class="img-fluid">
				           	</div>
				        </div>
				    </div>
            	</div>
        	</div>
        </div>
      </div>
    </section><!-- End Specials Section -->

    <section id="events_main" class="events spad" 
    data-background="assets/img/event/bg-event.jpg">
      <div class="container" data-aos="fade-up">
        <div class="events-slider2 swiper-container" data-aos="fade-up" 
        data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row event-item">
                <div class="col-lg-6 d-flex justify-content-center">
                  <div class="w-100">
                    <img src="assets/img/event/event_3.jpg" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-wrap align-items-center desc">
                  <div>
                    <h3>Toda excelência do cassiano presente no seu evento.</h3>
                    <p>
                      Para eventos corporativos, convenções, aniversários e casamentos, o Cassiano conta com a completa estrutura do Hotel Golden Tulip para receber seus convidados.<br/>
                      Entre em contato com nossa equipe e faça seu evento conosco.
                    </p>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <div data-background="assets/img/bg-gallery.jpg">
      <section id="gallery" class="gallery py-0">
        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div class="row g-0">

            <?php 

              $path = "assets/img/structure/";

              $colums = [1=>1,3=>9];
              $start = array_rand($colums,1);
              $end = $colums[$start] + 7;

              for($i=$colums[$start];$i<=$end;$i++){
              
              	$arquivo = $i.".jpg";

                echo "<div class='col-lg-3 col-md-4'>
                    <div class='gallery-item'>
                    <a href=".$path.$arquivo." class='gallery-lightbox' 
                    data-gall='gallery-item'>
                      <img class='w-100' src=".$path.$arquivo." 
                      alt=".$arquivo.">
                    </a>
                </div></div>";

              };

            ?>

          </div>
        </div>
      </section>
    </div>
    <!-- End Gallery Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="depositions" class="testimonials spad section-bg" 
    data-background="assets/img/depositions/bg_depositions.jpg">
      <div class="container" data-aos="fade-up">
        <div class="section-title d-flex justify-content-center">
          <div class="d-inline-block">
            <p class="text-left">FALANDO DO</p>
            <h2 class="text-right">cassiano</h2>
          </div>
        </div>
        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Excelente comida excelente atendimento e ambiente gostoso Pratos bem elaborados , sobremesas deliciosas . Recomendo.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials_1.png" 
                class="testimonial-img" alt="">
                <h3>MAI aloysiomillen</h3>
              </div>
            </div>
            <!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  O staff é maravilhoso e agradecemos muito a Vanessa e Sr Batista pelo carinho e profissionalismo com que nos receberam!

                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials_1.png" class="testimonial-img" alt="">
                <h3>JUN Sophsque </h3>
              </div>
            </div>
            <!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Ótimo atendimento e pratos maravilhosos! Uma das melhores experiências que tive em viagens. Voltarei sempre que possível.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials_1.png" class="testimonial-img" alt="">
                <h3>AGO elainecB8814HL</h3>
              </div>
            </div>
            <!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery-drink spad py-0" data-background="assets/img/drinks/1.jpg">
      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-0">
          <div class="col-lg-12 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://www.youtube.com/watch?v=fs-lGzrph7Q&feature=emb_title" class="glightbox play-btn"></a>
          </div>
        </div>
      </div>
    </section>
