$(document).ready(function() {

  $.getJSON("https://api.myjson.com/bins/1m1in",
   function (data) {
     var ul;

     for (var i = 0; i < data.length; i++) {
       ul = $('ul.list');
       ul.append('<li><span class=\"flag\"><img src=\"' + data[i].flag + '\"></span><span class=\"country\">' +data[i].name + '</span> - <span class=\"language\">' + data[i].language + '</span><span class=\"check\"><i class="ion-android-done"></i></span></li>');
     }
   });

  $(".dropdown .title").click(function () {
    $(this).parent().toggleClass("closed");
  });

  $(document).on("click", ".dropdown ul.list li", function(){
    $(this).parent().parent().toggleClass("closed").find(".title").text($(this).find('.language').text());
  });

});