$(document).ready(function() {

  let num = 0;
  //jQuery Function Number 1
  $(".picture").click(function() {
    //jQuery Function Number 2
    $("#pic-container").fadeIn();
    $("#overlay").fadeIn();
    $("#exit").fadeIn();
    $("#left").fadeIn();
    $("#right").fadeIn();
  });

  //jQuery Function Number 3
  $("#left").hover(function() {
    //jQuery Function Number 4
    $(this).css("cursor", "pointer");
  });

  $("#right").hover(function() {
    $(this).css("cursor", "pointer");
  });

  $("#exit").hover(function() {
    $(this).css("cursor", "pointer");
  });

  $("#exit").click(function() {
    //jQuery Function Number 5
    $("#pic-container").fadeOut();
    $("#overlay").fadeOut();
    $("#exit").fadeOut();
    $("#left").fadeOut();
    $("#right").fadeOut();
    $(".strip-sec").children().remove();
  });

  $(".picture").click(function() {
    //jQuery Function Number 6
    num = $(this).parent().attr('id');
    console.log(jQuery.type(num));
    if(num < 4 || num > 8) {
      $(".strip-sec").append("<img src=assets/img/gal" + num + ".jpg height=75% width=75%>");
    } else {
      $(".strip-sec").append("<img src=assets/img/gal" + num + ".png height=75% width=75%>");
    }
  })

  $("#left").click(function() {
    if(num > 0) {
      $(".strip-sec").children().remove();
      num -= 1;
      console.log(num);
      if(num < 4 || num > 8) {
        $(".strip-sec").append("<img src=assets/img/gal" + num + ".jpg height=75% width=75%>");
      } else {
        $(".strip-sec").append("<img src=assets/img/gal" + num + ".png height=75% width=75%>");
      }
    }
  });

  $("#right").click(function() {
    if(num < 11) {
      $(".strip-sec").children().remove();
      console.log(num);
      num = num%11 + 1;
      console.log(num);
      if(num < 4 || num > 8) {
        $(".strip-sec").append("<img src=assets/img/gal" + num + ".jpg height=75% width=75%>");
      } else {
        $(".strip-sec").append("<img src=assets/img/gal" + num + ".png height=75% width=75%>");
      }
    }
  });
});
