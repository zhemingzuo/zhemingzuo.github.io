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
var modal14 = document.getElementById("zzModal14");
var modal15 = document.getElementById("zzModal15");
var modal16 = document.getElementById("zzModal16");
var modal17 = document.getElementById("zzModal17");
// var modal18 = document.getElementById("zzModal18");
var modal19 = document.getElementById("zzModal19");
var modal20 = document.getElementById("zzModal20");
var modal21 = document.getElementById("zzModal21");
var modal22 = document.getElementById("zzModal22");

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
var modalA14 = document.getElementById("zzModalA14");
var modalA15 = document.getElementById("zzModalA15");
var modalA16 = document.getElementById("zzModalA16");
var modalA17 = document.getElementById("zzModalA17");
// var modalA18 = document.getElementById("zzModalA18");
var modalA19 = document.getElementById("zzModalA19");
var modalA20 = document.getElementById("zzModalA20");
var modalA21 = document.getElementById("zzModalA21");
var modalA22 = document.getElementById("zzModalA22");

var modalV17 = document.getElementById("zzModalV17");
// var modalV18 = document.getElementById("zzModalV18");
var modalV20 = document.getElementById("zzModalV20");
var modalV21 = document.getElementById("zzModalV21");
var modalV21A = document.getElementById("zzModalV21A");

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
var btn14 = document.getElementById("zzBtn14");
var btn15 = document.getElementById("zzBtn15");
var btn16 = document.getElementById("zzBtn16");
var btn17 = document.getElementById("zzBtn17");
// var btn18 = document.getElementById("zzBtn18");
var btn19 = document.getElementById("zzBtn19");
var btn20 = document.getElementById("zzBtn20");
var btn21 = document.getElementById("zzBtn21");
var btn22 = document.getElementById("zzBtn22");

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
var btnA14 = document.getElementById("zzBtnA14");
var btnA15 = document.getElementById("zzBtnA15");
var btnA16 = document.getElementById("zzBtnA16");
var btnA17 = document.getElementById("zzBtnA17");
// var btnA18 = document.getElementById("zzBtnA18");
var btnA19 = document.getElementById("zzBtnA19");
var btnA20 = document.getElementById("zzBtnA20");
var btnA21 = document.getElementById("zzBtnA21");
var btnA22 = document.getElementById("zzBtnA22");

var btnV17 = document.getElementById("zzBtnV17");
// var btnV18 = document.getElementById("zzBtnV18");
var btnV20 = document.getElementById("zzBtnV20");
var btnV21 = document.getElementById("zzBtnV21");
var btnV21A = document.getElementById("zzBtnV21A");

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
btn14.onclick = function() {
  modal14.style.display = "block";
}
btn15.onclick = function() {
  modal15.style.display = "block";
}
btn16.onclick = function() {
  modal16.style.display = "block";
}
btn17.onclick = function() {
  modal17.style.display = "block";
}
// btn18.onclick = function() {
//   modal18.style.display = "block";
// }
btn19.onclick = function() {
  modal19.style.display = "block";
}
btn20.onclick = function() {
  modal20.style.display = "block";
}
btn21.onclick = function() {
  modal21.style.display = "block";
}
btn22.onclick = function() {
  modal22.style.display = "block";
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
btnA14.onclick = function() {
  modalA14.style.display = "block";
}
btnA15.onclick = function() {
  modalA15.style.display = "block";
}
btnA16.onclick = function() {
  modalA16.style.display = "block";
}
btnA17.onclick = function() {
  modalA17.style.display = "block";
}
// btnA18.onclick = function() {
//   modalA18.style.display = "block";
// }
btnA19.onclick = function() {
  modalA19.style.display = "block";
}
btnA20.onclick = function() {
  modalA20.style.display = "block";
}
btnA21.onclick = function() {
  modalA21.style.display = "block";
}
btnA22.onclick = function() {
  modalA22.style.display = "block";
}
btnV17.onclick = function() {
  modalV17.style.display = "block";
}
// btnV18.onclick = function() {
//   modalV18.style.display = "block";
// }
btnV20.onclick = function() {
  modalV20.style.display = "block";
}
btnV21.onclick = function() {
  modalV21.style.display = "block";
}
btnV21A.onclick = function() {
  modalV21A.style.display = "block";
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
    case modal14:
      modal14.style.display = "none";
      break;
    case modal15:
      modal15.style.display = "none";
      break;
    case modal16:
      modal16.style.display = "none";
      break;
    case modal17:
      modal17.style.display = "none";
      break;
    // case modal18:
    //   modal18.style.display = "none";
    //   break;
    case modal19:
      modal19.style.display = "none";
      break;
    case modal20:
      modal20.style.display = "none";
      break;
    case modal21:
      modal21.style.display = "none";
      break;
    case modal22:
      modal22.style.display = "none";
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
    case modalA14:
      modalA14.style.display = "none";
      break;
    case modalA15:
      modalA15.style.display = "none";
      break;
    case modalA16:
      modalA16.style.display = "none";
      break;
    case modalA17:
      modalA17.style.display = "none";
      break;
    // case modalA18:
    //   modalA18.style.display = "none";
    //   break;
    case modalA19:
      modalA19.style.display = "none";
      break;
    case modalA20:
      modalA20.style.display = "none";
      break;
    case modalA21:
      modalA21.style.display = "none";
      break;
    case modalA22:
      modalA22.style.display = "none";
      break;
    case modalV17:
      modalV17.style.display = "none";
      break;
    // case modalV18:
    //   modalV18.style.display = "none";
    //   break;
    case modalV20:
      modalV20.style.display = "none";
      break;
    case modalV21:
      modalV21.style.display = "none";
      break;
    case modalV21A:
      modalV21A.style.display = "none";
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