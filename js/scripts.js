var database = [
  { name: 'Earl Grey',
    flavor: 'none',
    style: 'energy',
    type: 'black',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwaecd507a/images/UXProject/new-tea-images/T125AE017_earl-grey-royale_r1.jpg"
  },
  { name: 'English Breakfast',
    flavor: 'none',
    style: 'earthy',
    type: 'black',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwaecd507a/images/UXProject/new-tea-images/T125AE017_earl-grey-royale_r1.jpg"
  },
  { name: 'Gunpowder Vanilla',
    type: 'green',
    style: 'light',
    flavor: 'vanilla',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw9eb03401/images/UXProject/new-tea-images/T115AE009_georgeous-geisha_r1.jpg?sw=262&sh=262&sm=fit"
  },
  { name: 'Dragon Ginger',
    type: 'green',
    style: 'earthy',
    flavor: 'ginger',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw9eb03401/images/UXProject/new-tea-images/T115AE009_georgeous-geisha_r1.jpg?sw=262&sh=262&sm=fit"
  },
  { name: 'Rose Hips',
    type: 'herbal',
    style: 'light',
    flavor: 'floral',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw5f441e61/images/UXProject/new-tea-images/T140AE119_watermelon-sorbet_r1.jpg?sw=262&sh=262&sm=fit"
  },
  { name: 'Vanilla Chamomile',
    type: 'herbal',
    style: 'light',
    flavor: 'vanilla',
    rank:  0,
    picture: "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw5f441e61/images/UXProject/new-tea-images/T140AE119_watermelon-sorbet_r1.jpg?sw=262&sh=262&sm=fit"
  }
];

function Tea() {
  this.flavor = [];
  this.style = [];
  this.type = [];
}

var tea = new Tea();

Tea.prototype.getTea = function(tea) {
  for (var i = 0; i < database.length; i++) {
    for (var j = 0; j <= tea.type.length; j++) {
      if (tea.type[j] === database[i].type) {
        database[i].rank += 10;
      };
    };
    for (var j = 0; j <= tea.style.length; j++) {
      if (tea.style[j] === database[i].style) {
        database[i].rank += 10;
      };
    };
    for (var j = 0; j <= tea.flavor.length; j++) {
      if (tea.flavor[j] === database[i].flavor) {
        database[i].rank += 10;
      };
    };
  };

  var topRank = 0;
  var topName = [];
  var topPicture = [];
  for (var i = 0; i < database.length; i++) {
    if (database[i].rank === topRank) {
      topName.push(database[i].name);
      topPicture.push(database[i].picture);
    };
    if (database[i].rank > topRank) {
      topRank = database[i].rank;
      topName = [database[i].name];
      topPicture = [database[i].picture];
    };
  };

  for (var i = 0; i < database.length; i++) {
    database[i].rank = 0;
  };

  $("#result1").empty().hide().addClass("coral").append(topName[0]).fadeIn(500);
  $("#result2").empty();
  $("#teaPicture2").empty()
  $("#teaPicture1").empty().hide().append("<img id=\"teaPic\" src=\"" + topPicture[0] + "\">").fadeIn(1000);
  console.log(topPicture);

  if (topName.length === 1) {
    $(".resultTitle").empty().addClass("black").append("Our recommendation is...");
  };

  if (topName.length > 1) {
    $(".resultTitle").empty().addClass("black").append("Our recommendations are...");
    $("#result2").empty().hide().addClass("coral").append(topName[1]).fadeIn(500);
    $("#teaPicture2").empty().hide().append("<img id=\"teaPic\" src=\"" + topPicture[1] + "\">").fadeIn(1000);
  };
};

$(document).ready(function() {

  // buttons for type

  $("#typeSelectedButton").click(function() {
    $("#typeMenuButtons").hide().removeClass("hidden").fadeIn(500);
    $("#black").hide().fadeIn(150);
    $("#green").hide();
    setTimeout(function(){
    $("#green").fadeIn(200);
  }, 150);
    $("#herbal").hide()
    setTimeout(function(){
    $("#herbal").fadeIn(200);
  }, 300);
    $("#menuShade").hide().removeClass("hidden").fadeIn(500);
  });

  $("#black").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#black").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Black ⌄");
      $("#menuShade").fadeOut(500);
      $("#teaPot").fadeOut(200);
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("herbalTeaPotBackground").addClass("blackTeaPotBackground").fadeIn(300);
      }, 200);
      tea.getTea(tea);
    });

  $("#green").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#green").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Green ⌄");
      $("#menuShade").fadeOut(500);
      $("#teaPot").fadeOut(200);
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("blackTeaPotBackground").removeClass("herbalTeaPotBackground").addClass("greenTeaPotBackground").fadeIn(300);
      }, 200);
      tea.getTea(tea);
    });

  $("#herbal").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#herbal").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Herbal ⌄");
      $("#menuShade").fadeOut(500);
      $("#teaPot").fadeOut(200);
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("blackTeaPotBackground").addClass("herbalTeaPotBackground").fadeIn(300);
      }, 200);
      tea.getTea(tea);
    });

  // buttons for style

  $("#styleSelectedButton").click(function() {
    $("#styleMenuButtons").hide().removeClass("hidden").fadeIn();
    $("#light").hide().fadeIn(150);
    $("#earthy").hide();
    setTimeout(function(){
    $("#earthy").fadeIn(200);
    }, 150);
    $("#energy").hide()
    setTimeout(function(){
    $("#energy").fadeIn(200);
    }, 300);
    $("#menuShade").hide().removeClass("hidden").fadeIn(500);
  });

  $("#light").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#light").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Light ⌄");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea);
    });

  $("#earthy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#earthy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Earthy ⌄");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea);
    });

  $("#energy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#energy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Energy ⌄");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea);
    });

  // buttons for flavor

  $("#ginger").click(function() {
    if (tea.flavor.includes($("#ginger").val())) {
      for (var i = 0; i < tea.flavor.length; i++) {
        if (tea.flavor[i] === $("#ginger").val()) {
          tea.flavor.splice(i,1);
          $("#ginger").removeClass("clicked");
          console.log("Removed the item. Type Array: " + tea.flavor)
        };
      };
    } else {
      tea.flavor.push($("#ginger").val());
      $("#ginger").addClass("clicked");
      console.log("Value added to array. Type Array: " + tea.flavor)
    };
    tea.getTea(tea);
  });

  $("#floral").click(function() {
    if (tea.flavor.includes($("#floral").val())) {
      for (var i = 0; i < tea.flavor.length; i++) {
        if (tea.flavor[i] === $("#floral").val()) {
          tea.flavor.splice(i,1);
          $("#floral").removeClass("clicked");
          console.log("Removed the item. Type Array: " + tea.flavor)
        };
      };
    } else {
      tea.flavor.push($("#floral").val());
      $("#floral").addClass("clicked");
      console.log("Value added to array. Type Array: " + tea.flavor)
    };
    tea.getTea(tea);
  });

  $("#vanilla").click(function() {
    if (tea.flavor.includes($("#vanilla").val())) {
      for (var i = 0; i < tea.flavor.length; i++) {
        if (tea.flavor[i] === $("#vanilla").val()) {
          tea.flavor.splice(i,1);
          $("#vanilla").removeClass("clicked");
          console.log("Removed the item. Type Array: " + tea.flavor)
        };
      };
    } else {
      tea.flavor.push($("#vanilla").val());
      $("#vanilla").addClass("clicked");
      console.log("Value added to array. Type Array: " + tea.flavor)
    };
    tea.getTea(tea);
  });
});
