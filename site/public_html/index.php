<?php
  setlocale(LC_ALL, 'pt_BR');
  ini_set('display_errors',0);
  ini_set('display_startup_erros',0);
  error_reporting(E_ALL ^ E_DEPRECATED);

  $quebraurl = explode("/",$_SERVER['REQUEST_URI']); 

  $param = 1;
  $parami = 2;
     
?>
<!DOCTYPE html>
<html lang="pt_BR">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Cassiano Restaurante - O Melhor da Culinária Portuguesa</title>
  <?php 
    include 'util/base.php';
    include 'util/mobile.php';
  ?>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.ico" rel="icon">
  <link href="assets/img/favicon.ico" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Owl Carrousel !-->
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- Popup !-->
  <link href="assets/css/popup.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container-fluid d-flex align-items-center justify-content-lg-around">
      <h1 class="logo me-auto me-lg-0">
        <a href="index">
          <img src="assets/img/logo/logo.svg" alt="">
        </a>
      </h1>
      
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <!--<li><a class="nav-link active" href="#home"></a></li>!-->
          <li><a class="nav-link" href="https://livemenu.app/menu/56c777ea0896b3cd13c6091d" target="_blank">Cardápio</a></li>
          <li><a class="nav-link" href="https://reservation-widget.tagme.com.br/reservation/schedule/56c777ea0896b3cd13c6091d/reservationWidget" target="_blank">RESERVAS</a></li>
          <li><a class="nav-link scrollto" href="https://www.instagram.com/delicassiano/" target="_blank">Deli Cassiano</a></li>
          <li><a class="nav-link" href="#events_main">Eventos</a></li>
          <li><a class="nav-link" href="#depositions">Depoimentos</a></li>
          <li><a class="nav-link" href="contact">Contato</a></li>
          <li class="social">
          	<a class="nav-link scrollto" href="https://www.tripadvisor.com.br/Restaurant_Review-g303629-d7896446-Reviews-Cassiano_Restaurante-Sao_Jose_Dos_Campos_State_of_Sao_Paulo.html" target="_blank">
            <img class="" src="assets/img/icones/icon_tripadvisor.svg" alt="">
          </a>
      	  </li>
          <li class="social"><a class="nav-link scrollto" href="https://www.facebook.com/cassianorestaurante" target="_blank">
            <img class="" src="assets/img/icones/icon_face.svg" alt="">
          </a></li>
          <li class="social"><a class="nav-link scrollto" href="https://www.instagram.com/cassianorestaurante/" target="_blank">
            <img class="" src="assets/img/icones/icon_inta.svg" alt="">
          </a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <?php
  	
    if($quebraurl[1] == "index" || $quebraurl[1] == "index.php" || 
    $quebraurl[1] == ""){

  ?>
 
  <section id="hero" class="d-flex align-items-start owl-carousel">
    <div class="hero__item">
      <div class="d-flex h-100">
        <video class="position-absolute" width="100%" playsinline="" autoplay="" muted="" loop="">
        <?php 
          $urlvideo = $dispositivo != "Mobile" ? "1" : "1_mobile";
        ?>
          <source src="./assets/video/<?=$urlvideo;?>.mp4" type="video/mp4">
          <source src="./assets/video/<?=$urlvideo;?>.ogg" type="video/ogg">
        </video>
        <div class="container d-flex align-items-center justify-content-center">
          <div class="row">
            <div class="col-lg-12 col-md-12 d-flex justify-content-center">
              <div class="block">
                <img class='position-relative w-100' src="assets/img/banners/banner_ phrase.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </section>

  <?php }; ?>

  <main id="main">

    <div id="interna">
            
      <?php

        /*
          ' @author: K2 Media
          ' falecom@k2media.com.br
          ' www.k2media.com.br
          ' Programming to url Friendly
        */
         
        $dir = 'pages/';
        $ext = '.php';
        $prm = array();
        $url = (isset($_GET['page']) ) ? $_GET['page'] : 'index';
        if (substr_count($url, '/') > 0 ){
                    
            $atual = explode('/', $url);
            $page  = ( file_exists( $dir . $atual[0] . $ext ) ) ? $atual[0] : 'help';
        }else{
            $page  = ( file_exists( $dir . $url . $ext ) ) ? $url : 'help';
        }
                
        include( $dir . $page . $ext );

      ?>

    </div>

    <!-- FIM PAGINA INTERNA -->

  </main>

  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-flex flex-column justify-content-start __option footer-links">
            <div class="info d-flex flex-wrap mb-4">
              <div class="me-4">
                <img class="mb-2" src="assets/img/icones/icon_maps.svg" alt="">
              </div>
              <div class="w-75">
                <p>Colinas Shopping - Hotel Golden Tulip</p>
                <p>Av. Major Miguel Naked 144</p>
                <p> São josé dos Campos - SP</p>
              </div>
            </div>
          </div>

          <div class="col-lg-5 d-flex flex-column justify-content-between __option footer-links">
            <div class="info d-flex flex-wrap mb-4">
              <div class="me-4">
                <img class="mb-2" src="assets/img/icones/icon_alerm.svg" alt="">
              </div>
              <div class="w-75">
                <p>Café da Manhã: 6:00h ás 10:00h</p>
                <p>Almoço: De Segunda à Sexta-feira: 12:00h às 15:00h</p>
                <p>Finais de semana e Feriados: 12:00 às 15:00h</p>
                <p>Jantar:Todos os dias 19h às 23h</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 d-flex flex-column justify-content-between __option footer-links">
            <div class="info d-flex flex-wrap mb-4">
              <div class="me-4">
                <img class="mb-2" src="assets/img/icones/icon_phone.svg" alt="">
              </div>
              <div class="w-75">
                <h4>Telefone:</h4>
                <p><a href="tel:+551231314141">+55 (12) 3131-4141</a></p>
                <p><a href="tel:+5512991402949">+55 (12) 99140-2949</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright d-flex justify-content-between">
        <p class="w-100">Todos os direitos reservados | Cassiano Restaurante &copy; 
        <?php echo date("Y"); ?></p>
        <a href="http://k2media.com.br/" target="_blank">
          <img src="assets/img/logok2.svg" alt="">
        </a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <div id="whatsapp-link">
    <a href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5512991402949" target="_blank">
      <img src="assets/img/whatsapp.svg">
    </a>
  </div>

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-27695354-115"></script>
  <script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-27695354-115');
  </script>

  <!-- End Google Analytics !-->
  
  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/jquery.min.js"></script>

  <!-- Owl Carrousel !-->
  <script src="assets/js/owl.carousel.min.js"></script>

  <!-- Mask Input !-->
  <script src="assets/js/jquery.maskedinput.js"></script>

  <script src="assets/js/main.js" defer></script>

</body>

</html>
