<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Кнопка "Вверх" при помощи JavaScript - "Нубекс"</title>
  
  <style>
  #topNubex {
	position: fixed;
	right: 45px;
	bottom: 45px;
   }
  </style>
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  
  <script type="text/javascript">
  $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });
  </script>
 </head>
 <body>
   
   <div style="height:3000px"></div>
   
   <div id="topNubex"><img src="topNubex.png" width="30px" height="30px" /></div>
 </body>
</html>
