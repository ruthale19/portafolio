$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var movi = this.hash;

      $("html, body").animate({
        scrollTop: $(movi).offset().top
      }, 1000, function(){
        window.location.hash = movi;
      });
    }
  });

  $('[data-toggle="popover"]').popover()

});
