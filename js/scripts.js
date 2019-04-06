var database = [
  { name: 'Earl Grey',
    flavor: 'none',
    style: 'energy',
    type: 'black',
    rank:  0
  },
  { name: 'English Breakfast',
    flavor: 'none',
    style: 'earthy',
    type: 'black',
    rank:  0
  },
  { name: 'Gunpowder Vanilla',
    type: 'green',
    style: 'light',
    flavor: 'vanilla',
    rank:  0
  },
  { name: 'Dragon Ginger',
    type: 'green',
    style: 'earthy',
    flavor: 'ginger',
    rank:  0
  },
  { name: 'Rose Hips',
    type: 'herbal',
    style: 'light',
    flavor: 'floral',
    rank:  0
  },
  { name: 'Vanilla Chamomile',
    type: 'herbal',
    style: 'light',
    flavor: 'vanilla',
    rank:  0
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
  for (var i = 0; i < database.length; i++) {
    if (database[i].rank === topRank) {
      topName.push(database[i].name);
    };
    if (database[i].rank > topRank) {
      topRank = database[i].rank;
      topName = [database[i].name];
    };
  };

  for (var i = 0; i < database.length; i++) {
    database[i].rank = 0;
  };

  $(".resultTea").empty().hide().addClass("coral").append(topName[0]).fadeIn(500);

  if (topName.length === 1) {
    $(".result").empty().addClass("white").append("Our recommendation is...");
    for (var i = 1; i < (topName.length); i++) {
      $(".resultTea").append(" or " + topName[i]);
    };
  };

  if (topName.length > 1) {
    $(".result").empty().addClass("white").append("Our recommendations are...");
    for (var i = 1; i < (topName.length); i++) {
      $(".resultTea").append(" or<br><br><br>" + topName[i]);
    };
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
      tea.getTea(tea);
    });

  $("#green").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#green").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Green ⌄");
      $("#menuShade").fadeOut(500);
      tea.getTea(tea);
    });

  $("#herbal").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#herbal").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Herbal ⌄");
      $("#menuShade").fadeOut(500);
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
