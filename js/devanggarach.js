var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
 
  return false;
});

(function ($) {
  "use strict";
  // Auto-scroll
  $('#myCarousel').carousel({
    interval: 5000
  });

  // Control buttons
  $('.next').click(function () {
    $('.carousel').carousel('next');
    return false;
  });
  $('.prev').click(function () {
    $('.carousel').carousel('prev');
    return false;
  });

  // On carousel scroll
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide -
          (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end 
        if (e.direction == "left") {
          $(
            ".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo(".carousel-inner");
        }
      }
    }
  });
})
(jQuery);

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$().button('toggle')

$(document).ready(function () {

              setTimeout(function () {
                  $("#myModal").modal('show')
              }, 300000);

});

 $("#wait").click(function(){
              setTimeout(function () {
                  $("#myModal").modal('show')
              }, 500000);

});


function postToGoogle() {
                var MissingInside=$("#MissingInside").val();
  var Missing=$("#Missing").val();
  var FontCorrect=$("FontCorrect").val();
  var Font=$("Font").val();
  var UX=$("UX").val();
  var OverallRate=$("OverallRate").val();
  var OverallFeedback=$("OverallFeedback").val();
  var FeedbackWritten=$("FeedbackWritten").val();



                $.ajax({
                    url: "https://docs.google.com/forms/d/1lpyD52akkq6qdr-RfL-TUby2eIIzndm5sQ-S5fOIJ84/formResponse?",
          data: {"entry.1951984974": field1, "entry.411027378": field2, "entry.901992384": field3, "entry.1140666119": field4, "entry.1901222285": field5, "entry.3776912": field6, "entry.2044721463": field7, "entry.172371402": field8},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {

              $('#success-msg').show();
              $('#form').hide();
              
            }
                });
        return false;
            }
/*
 var script_url="https://script.google.com/macros/s/AKfycbzphl9h2Ig11XuZ9nj7luPixDVnUDpdLsFtAoKAx67iukGmtXc/exec";
 function insert_value() {
  var MissingInside=$("#MissingInside").val();
  var Missing=$("#Missing").val();
  var FontCorrect=$("FontCorrect").val();
  var Font=$("Font").val();
  var UX=$("UX").val();
  var OverallRate=$("OverallRate").val();
  var OverallFeedback=$("OverallFeedback").val();
  var FeedbackWritten=$("FeedbackWritten").val();
  var url = script_url+"?callback=ctrlq&MissingInside="+ MissingInside+"&Missing"+Missing+"&FontCorrect"+FontCorrect+"&Font"+Font+"&UX"+UX+"&OverallRate"+OverallRate+"&OverallFeedback"+OverallFeedback+"&FeedbackWritten"+FeedbackWritten+"&action=insert";
  var request=jQuery.ajax({
    crossDomain: True,
    url:url;
    method:"GET",
    dataType:"json"
  });
  $("#resetForm").reset();
 }

 function ctrlq(e) {
  alert("Thank you for the Feedback")
 }

function formSubmit() {
  var Font = $('#Font').value();
  if(emailSubmitName != '') {
    var $form = $('#devanggarach'),
    url = 'https://script.google.com/macros/s/AKfycbzphl9h2Ig11XuZ9nj7luPixDVnUDpdLsFtAoKAx67iukGmtXc/exec'
    $.ajax({
      url:url,
      method:"GET"
      dataType:"json",
      data: $form.serialize(),
      success: function(response) {
        $('#devanggarach')[0].reset();
        alert('Thank you for the Feedback');
        return true
      }
    })
  }
}else {
  return false
}
    


$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})


*/