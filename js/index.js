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
          "cover"  : "donkey-kong-country-snes.jpg",
          "type"   : "Super Nintendo",
          "name"   : "Donkey Kong Country",
          "rate"   : "8.5",
          "people" : "Nintendo, Rare",
          "love"   : true
        },
        {
          "cover"  : "super-mario-world-snes.jpg",
          "type"   : "Super Nintendo",
          "name"   : "Super Mario World",
          "rate"   : "8.5",
          "people" : "Nintendo",
          "love"   : true
        },
        {
          "cover"  : "shadow-of-mordor-pc.jpg",
          "type"   : "PC",
          "name"   : "Shadow of Mordor",
          "rate"   : "9.3",
          "people" : "Monolith Productions",
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

// var menuItemTemplate = Hogan.compile($("#menu-item").html());
// $("aside.menu nav").html(menuItemTemplate.render(db));

var mainTemplate = Hogan.compile($("#main").html());
$("main").html(mainTemplate.render(db));

$(".nota").each(function() {
  let nota = Math.round(parseFloat($(this).attr('data-nota')) / 2);
  for (let i = 0; i < nota; i++) {
    $(this).append('<i class="fa fa-star on"></i>');
  }
  for(;nota<5;nota++) {
    $(this).append('<i class="fa fa-star"></i>');
  }
});

// $("aside.menu nav a").each(function() {
//   $(this).click(function() {
//     var container = $('main');
//     var scrollTo  = $('.divisor[data-id=' + $(this).attr("data-id") + ']');
//     container.animate({
//       scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
//     });
//   });
// });
