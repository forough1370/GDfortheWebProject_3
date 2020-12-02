/*$(".grid-element").click(function () {
    $(this).toggleClass("down");
})

function show() {
    var x = document.getElementById("grid-element");
    if (x.style.visibility == "hidden") {
    x.style.visibility = "visible";
    } else {
            x.style.visibility = "hidden";
        }
    }*/

   $('.grid-element').on('click', function(){
	    var angle = ($('.grid-element').data('angle') + 90) || 90;
	    $(this).css({'transform': 'rotate(' + angle + 'deg)'});
	    $('.grid-element').data('angle', angle);
	});


   /*ColorVariation*/

   $('#blue').on('click', function(){
   		$('.grid-element').css( "border-right" , " 100px solid #81C0DB ");
   });

   $('#fuchsia').on('click', function(){
      $('.grid-element').css( "border-right" , " 100px solid #FF8EC7 ");
   });

    $('#purple').on('click', function(){
      $('.grid-element').css( "border-right" , " 100px solid #928EFF ");
   });

    $('#green').on('click', function(){
      $('.grid-element').css( "border-right" , " 100px solid #A2DE9A ");
   });

    $('#black').on('click', function(){
      $('.grid-element').css( "border-right" , " 100px solid #000000 ");
   });



 /*Grid size Variation*/

   $( "#small" ).one( "click", function() {
      $( ".grid-container" ).css( "grid-template-columns", "repeat(10, 50px)" );
      $( ".grid-container" ).css( "grid-template-rows", "repeat(2, 50px)" );
    });


    $( "#medium" ).one( "click", function() {
      $( ".grid-container" ).css( "grid-template-columns", "repeat(17, 99px)" );
      $( ".grid-container" ).css( "grid-template-rows", "repeat(9, 100px)" );
    });


  /*Reflection*/
    $( "#horizontal" ).one( "click", function() {
      $( '.grid-element' ).css( "transform", "scaleX(-1)" );
    });
    $( "#vertical" ).one( "click", function() {
      $( '.grid-element' ).css( "transform", "scaleY(-1)" );
    });