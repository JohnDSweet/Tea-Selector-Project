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

Tea.prototype.getTea = function(tea, prefType) {
// database comparison
    for (var i = 0; i < database.length; i++) {
      // No pref type comparison
      if (prefType === "none") {
        for (var j = 0; j <= tea.type.length; j++) {
          if (tea.type[j] === database[i].type) {
            database[i].rank += 0;
          };
        };
      };
      // Pref Type comparison
      if (prefType === "prefer") {
        for (var j = 0; j <= tea.type.length; j++) {
          if (tea.type[j] === database[i].type) {
            database[i].rank += 15;
          };
        };
      };
      // Pref Type comparison
      if (prefType === "require") {
        for (var j = 0; j <= tea.type.length; j++) {
          if (tea.type[j] === database[i].type) {
            database[i].rank += 30;
          };
        };
      };
  // Style database comparison
    for (var j = 0; j <= tea.style.length; j++) {
      if (tea.style[j] === database[i].style) {
        database[i].rank += 10;
      };
    };
  // Flavor datbase comparison
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

  console.log("The preference is set to " + prefType);
  console.log("The top rank is " + topName + " with " + topRank + " points.");

  for (var i = 0; i < database.length; i++) {
    database[i].rank = 0;
  };

  if (tea.type.length === 0 && tea.style.length === 0 && tea.flavor.length === 0) {

    $("#result1").empty();
    $("#result2").empty();
    $(".resultTitle").empty();
    $("#teaPicture2").empty();
    $("#teaPicture1").empty();

    } else {

    $("#result1").empty().hide().addClass("coral").append(topName[0]).fadeIn(1000);
    $("#result2").empty();
    $("#teaPicture2").empty()
    $("#teaPicture1").empty().hide().append("<img id=\"teaPic\" src=\"" + topPicture[0] + "\">").fadeIn(1000);
    if (topName.length === 1) {
      $(".resultTitle").empty().addClass("black").append("Our recommendation is...");
    };

    if (topName.length > 1) {
      $(".resultTitle").empty().addClass("black").append("Our recommendations are...");
      $("#result2").empty().hide().addClass("coral").append(topName[1]).fadeIn(1000);
      $("#teaPicture2").empty().hide().append("<img id=\"teaPic\" src=\"" + topPicture[1] + "\">").fadeIn(1000);
    };

  };

};

$(document).ready(function() {
  var prefType = "prefer";

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
      $("#typeSelectedButton").empty().append("Black tea");
      $("#menuShade").fadeOut(500);
      $("#teaPot").hide();
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("herbalTeaPotBackground").addClass("blackTeaPotBackground").fadeIn(400);
      }, 100);
      tea.getTea(tea, prefType);
    });

  $("#green").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#green").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Green tea");
      $("#menuShade").fadeOut(500);
      $("#teaPot").hide();
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("blackTeaPotBackground").removeClass("herbalTeaPotBackground").addClass("greenTeaPotBackground").fadeIn(400);
      }, 100);
      tea.getTea(tea, prefType);
    });

  $("#herbal").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#herbal").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Herbal tea");
      $("#menuShade").fadeOut(500);
      $("#teaPot").hide();
      setTimeout(function(){
        $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("blackTeaPotBackground").addClass("herbalTeaPotBackground").fadeIn(400);
      }, 100);
      tea.getTea(tea, prefType);
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
      $("#styleSelectedButton").empty().append("Light");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea, prefType);
    });

  $("#earthy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#earthy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Earthy");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea, prefType);
    });

  $("#energy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#energy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Energy");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea, prefType);
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
    tea.getTea(tea, prefType);
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
    tea.getTea(tea, prefType);
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
    tea.getTea(tea, prefType);
  });

  // buttons for type preference
  $("#typePrefSelectedButton").click(function() {
    $("#typePrefMenuButtons").hide().removeClass("hidden").fadeIn(500);
    $("#none").hide().fadeIn(150);
    $("#prefer").hide();
    setTimeout(function(){
    $("#prefer").fadeIn(200);
  }, 150);
    $("#require").hide()
    setTimeout(function(){
    $("#require").fadeIn(200);
  }, 300);
    $("#menuShade").hide().removeClass("hidden").fadeIn(500);
  });

  $("#noneType").click(function() {
      tea.type.splice(0,1);
      // tea.type.push($("#black").val());
      $("#typeSelectedButton").empty().hide().append("Type ⌄");
      $("#typePrefMenuButtons").addClass("hidden");
      $("#typePrefSelectedButton").empty().append("No preference");
      $("#menuShade").fadeOut(500);
      $("#teaPot").hide();
      setTimeout(function(){
        $("#teaPot").addClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("herbalTeaPotBackground").removeClass("blackTeaPotBackground").fadeIn(400);
      }, 100);
      prefType = $("#noneType").val()
      tea.getTea(tea, prefType);
    });

  $("#preferType").click(function() {
      // tea.type.splice(0,1);
      // tea.type.push($("#green").val());
      $("#typeSelectedButton").fadeIn(500);
      $("#typePrefMenuButtons").addClass("hidden");
      $("#typePrefSelectedButton").empty().append("I prefer");
      $("#menuShade").fadeOut(500);
      // $("#teaPot").hide();
      // setTimeout(function(){
      //   $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("blackTeaPotBackground").removeClass("herbalTeaPotBackground").addClass("greenTeaPotBackground").fadeIn(400);
      // }, 100);
      prefType = $("#preferType").val()
      tea.getTea(tea, prefType);
    });

  $("#requireType").click(function() {
      // tea.type.splice(0,1);
      // tea.type.push($("#herbal").val());
      $("#typeSelectedButton").fadeIn(500);
      $("#typePrefMenuButtons").addClass("hidden");
      $("#typePrefSelectedButton").empty().append("I require");
      $("#menuShade").fadeOut(500);
      // $("#teaPot").hide();
      // setTimeout(function(){
      //   $("#teaPot").removeClass("whiteTeaPotBackground").removeClass("greenTeaPotBackground").removeClass("blackTeaPotBackground").addClass("herbalTeaPotBackground").fadeIn(400);
      // }, 100);
      prefType = $("#requireType").val()
      tea.getTea(tea, prefType);
    });

});
