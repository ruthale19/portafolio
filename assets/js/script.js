$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var mov = this.hash;

      $("html, body").animate({
        scrollTop: $(mov).offset().top
      }, 1000, function(){
        window.location.hash = mov;
      });
    }
  });

  $('[data-toggle="popover"]').popover()

});
