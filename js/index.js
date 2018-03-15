var db = {
  "collection" : [
    {
      "label" : "Jogos",
      "icon"  : "gamepad",
      "items" : [
        {
          "cover"  : "donkey-kong-nes.jpg",
          "type"   : "NES",
          "name"   : "Donkey Kong",
          "rate"   : "6.0",
          "people" : "Nintendo",
          "love"   : false
        },
        {
          "cover"  : "donkey-kong-jr-nes.jpg",
          "type"   : "NES",
          "name"   : "Donkey Kong Jr.",
          "rate"   : "5.0",
          "people" : "Nintendo",
          "love"   : false
        },
        {
          "cover"  : "donkey-kong-3-nes.jpg",
          "type"   : "NES",
          "name"   : "Donkey Kong 3",
          "rate"   : "6.0",
          "people" : "Nintendo",
          "love"   : false
        },
        {
          "cover"  : "super-mario-world-snes.jpg",
          "type"   : "Super Nintendo",
          "name"   : "Super Mario World",
          "rate"   : "8.5",
          "people" : "Nintendo",
          "love"   : true
        }
      ]
    },
    {
      "label" : "Filmes",
      "icon"  : "film",
      "items" : []
    },
    {
      "label" : "Séries",
      "icon"  : "tv",
      "items" : []
    }
  ]
};

var menuItemTemplate = Hogan.compile($("#menu-item").html());
$("aside.menu nav").html(menuItemTemplate.render(db));

var mainTemplate = Hogan.compile($("#main").html());
$("main").html(mainTemplate.render(db));

$(".rate").each(function() {
  if(parseInt($(this).html()) <= 4) {
    $(this).css("color", "#9C0006");
    $(this).css("border-color", "#9C0006");
  } else if (parseInt($(this).html()) < 8) {
    $(this).css("color", "#9C6500");
    $(this).css("border-color", "#9C6500");
  }
});

$("aside.menu nav a").each(function() {
  $(this).click(function() {
    var container = $('main');
    var scrollTo  = $('.divisor[data-id=' + $(this).attr("data-id") + ']');
    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });
  });
});
