<?php

$url = $_SERVER['SERVER_NAME'];

if(($url == 'k2server-03.com.br') || ($url == '192.168.1.100:8090') || ($url == 'k2server:8090')){
  ?>

  <base href="https://<?php echo $url = $_SERVER['SERVER_NAME']; ?>/cassiano/" /> 

  <?php
  }else if($url == 'cassianorestaurante.com.br' || $url == 'www.cassianorestaurante.com.br'){
  ?>
  <base href="https://<?php echo $url = $_SERVER['SERVER_NAME']; ?>/" />
  
  <?php
  }

  if(!isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'on'){
    $linkre .= "https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    echo "<script>location='$linkre'</script>";
  }

  ?>




