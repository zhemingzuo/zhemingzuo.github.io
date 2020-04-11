/*
(function($){
  $(function(){

    AOS.init();
    
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
*/
$( document ).ready(function(){

	AOS.init();
    
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

  $(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
      $('nav').addClass('white');
    } else {
      $('nav').removeClass('white');
    }
  });


  // Get the modal
var modal1 = document.getElementById("zzModal1");
var modal2 = document.getElementById("zzModal2");
var modal3 = document.getElementById("zzModal3");
var modal4 = document.getElementById("zzModal4");
var modal5 = document.getElementById("zzModal5");
var modal6 = document.getElementById("zzModal6");
var modal7 = document.getElementById("zzModal7");
var modal8 = document.getElementById("zzModal8");
var modal9 = document.getElementById("zzModal9");
var modal10 = document.getElementById("zzModal10");
var modal11 = document.getElementById("zzModal11");
var modal12 = document.getElementById("zzModal12");
var modal13 = document.getElementById("zzModal13");

var modalA1 = document.getElementById("zzModalA1");
var modalA2 = document.getElementById("zzModalA2");
var modalA3 = document.getElementById("zzModalA3");
var modalA4 = document.getElementById("zzModalA4");
var modalA5 = document.getElementById("zzModalA5");
var modalA6 = document.getElementById("zzModalA6");
var modalA7 = document.getElementById("zzModalA7");
var modalA8 = document.getElementById("zzModalA8");
var modalA9 = document.getElementById("zzModalA9");
var modalA10 = document.getElementById("zzModalA10");
var modalA11 = document.getElementById("zzModalA11");
var modalA12 = document.getElementById("zzModalA12");
var modalA13 = document.getElementById("zzModalA13");

// Get the button that opens the modal
var btn1 = document.getElementById("zzBtn1");
var btn2 = document.getElementById("zzBtn2");
var btn3 = document.getElementById("zzBtn3");
var btn4 = document.getElementById("zzBtn4");
var btn5 = document.getElementById("zzBtn5");
var btn6 = document.getElementById("zzBtn6");
var btn7 = document.getElementById("zzBtn7");
var btn8 = document.getElementById("zzBtn8");
var btn9 = document.getElementById("zzBtn9");
var btn10 = document.getElementById("zzBtn10");
var btn11 = document.getElementById("zzBtn11");
var btn12 = document.getElementById("zzBtn12");
var btn13 = document.getElementById("zzBtn13");

var btnA1 = document.getElementById("zzBtnA1");
var btnA2 = document.getElementById("zzBtnA2");
var btnA3 = document.getElementById("zzBtnA3");
var btnA4 = document.getElementById("zzBtnA4");
var btnA5 = document.getElementById("zzBtnA5");
var btnA6 = document.getElementById("zzBtnA6");
var btnA7 = document.getElementById("zzBtnA7");
var btnA8 = document.getElementById("zzBtnA8");
var btnA9 = document.getElementById("zzBtnA9");
var btnA10 = document.getElementById("zzBtnA10");
var btnA11 = document.getElementById("zzBtnA11");
var btnA12 = document.getElementById("zzBtnA12");
var btnA13 = document.getElementById("zzBtnA13");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}
btn8.onclick = function() {
  modal8.style.display = "block";
}
btn9.onclick = function() {
  modal9.style.display = "block";
}
btn10.onclick = function() {
  modal10.style.display = "block";
}
btn11.onclick = function() {
  modal11.style.display = "block";
}
btn12.onclick = function() {
  modal12.style.display = "block";
}
btn13.onclick = function() {
  modal13.style.display = "block";
}
btnA1.onclick = function() {
  modalA1.style.display = "block";
}
btnA2.onclick = function() {
  modalA2.style.display = "block";
}
btnA3.onclick = function() {
  modalA3.style.display = "block";
}
btnA4.onclick = function() {
  modalA4.style.display = "block";
}
btnA5.onclick = function() {
  modalA5.style.display = "block";
}
btnA6.onclick = function() {
  modalA6.style.display = "block";
}
btnA7.onclick = function() {
  modalA7.style.display = "block";
}
btnA8.onclick = function() {
  modalA8.style.display = "block";
}
btnA9.onclick = function() {
  modalA9.style.display = "block";
}
btnA10.onclick = function() {
  modalA10.style.display = "block";
}
btnA11.onclick = function() {
  modalA11.style.display = "block";
}
btnA12.onclick = function() {
  modalA12.style.display = "block";
}
btnA13.onclick = function() {
  modalA13.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  // switch (event.target){
  //   case modal1:
  //     modal1.style.display = "none";
  //     break;
  //   case modal2:
  //     modal2.style.display = "none";
  //     break;
  // }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  switch (event.target){
    case modal1:
      modal1.style.display = "none";
      break;
    case modal2:
      modal2.style.display = "none";
      break;
    case modal3:
      modal3.style.display = "none";
      break;
    case modal4:
      modal4.style.display = "none";
      break;
    case modal5:
      modal5.style.display = "none";
      break;
    case modal6:
      modal6.style.display = "none";
      break;
    case modal7:
      modal7.style.display = "none";
      break;
    case modal8:
      modal8.style.display = "none";
      break;
    case modal9:
      modal9.style.display = "none";
      break;
    case modal10:
      modal10.style.display = "none";
      break;
    case modal11:
      modal11.style.display = "none";
      break;
    case modal12:
      modal12.style.display = "none";
      break;
    case modal13:
      modal13.style.display = "none";
      break;
    case modalA1:
      modalA1.style.display = "none";
      break;
    case modalA2:
      modalA2.style.display = "none";
      break;
    case modalA3:
      modalA3.style.display = "none";
      break;
    case modalA4:
      modalA4.style.display = "none";
      break;
    case modalA5:
      modalA5.style.display = "none";
      break;
    case modalA6:
      modalA6.style.display = "none";
      break;
    case modalA7:
      modalA7.style.display = "none";
      break;
    case modalA8:
      modalA8.style.display = "none";
      break;
    case modalA9:
      modalA9.style.display = "none";
      break;
    case modalA10:
      modalA10.style.display = "none";
      break;
    case modalA11:
      modalA11.style.display = "none";
      break;
    case modalA12:
      modalA12.style.display = "none";
      break;
    case modalA13:
      modalA13.style.display = "none";
      break;
  }
}

var btn1 = document.getElementById("authorBtn1");
var btn2 = document.getElementById("authorBtn2");
var btnText = document.getElementById("authorBtn1");

btn1.onclick = function authorFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "[...]"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "[.]"; 
    moreText.style.display = "inline";
  }
}

btn2.onclick = function authorFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "[...]"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "[.]"; 
    moreText.style.display = "inline";
  }
}





})