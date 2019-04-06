function Tea() {
  this.flavor = [];
  this.style = [];
  this.type = [];
}
var tea = new Tea();

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

var topName = "None";
Tea.prototype.getTea = function(tea) {
  for (var i = 0; i < database.length; i++) {
    for (var j = 0; j <= tea.type.length; j++) {
      if (tea.type[j] === database[i].type) {
        database[i].rank += 10;
      };
      if (tea.style[j] === database[i].style) {
        database[i].rank += 10;
      };
      if (tea.flavor[j] === database[i].flavor) {
        database[i].rank += 10;
      };
    };
  };
  var topRank = 0;

  for (var i = 0; i < database.length; i++) {
    if (database[i].rank > topRank) {
      topRank = database[i].rank;
      topName = database[i].name;
    };
  };

  for (var i = 0; i < database.length; i++) {
    database[i].rank = 0;
  };
  $(".result").empty().addClass("white").append("Our recommendation is...");
  $(".resultTea").empty().addClass("white").append(topName);
};

$(document).ready(function() {
  // buttons for type
  $("#typeSelectedButton").click(function() {
    $("#typeMenuButtons").removeClass("hidden");
    // $("#container").addClass("hideStyle");
    $("#menuShade").removeClass("hidden");
  });

  $("#black").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#black").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Black ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });

  $("#green").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#green").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Green ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });

  $("#herbal").click(function() {
      tea.type.splice(0,1);
      tea.type.push($("#herbal").val());
      $("#typeMenuButtons").addClass("hidden");
      $("#typeSelectedButton").empty().append("Herbal ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });
  // $("#black").click(function() {
  //   if (tea.type.includes($("#black").val())) {
  //     for (var i = 0; i < tea.type.length; i++) {
  //       if (tea.type[i] === $("#black").val()) {
  //         tea.type.splice(i,1);
  //         $("#black").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.type)
  //       };
  //     };
  //   } else {
  //     tea.type.push($("#black").val());
  //     $("#black").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.type)
  //   };
  //   tea.getTea(tea);
  // });

  // $("#green").click(function() {
  //   if (tea.type.includes($("#green").val())) {
  //     for (var i = 0; i < tea.type.length; i++) {
  //       if (tea.type[i] === $("#green").val()) {
  //         tea.type.splice(i,1);
  //         $("#green").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.type)
  //       };
  //     };
  //   } else {
  //     tea.type.push($("#green").val());
  //     $("#green").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.type)
  //   };
  //   tea.getTea(tea);
  // });
  //
  // $("#herbal").click(function() {
  //   if (tea.type.includes($("#herbal").val())) {
  //     for (var i = 0; i < tea.type.length; i++) {
  //       if (tea.type[i] === $("#herbal").val()) {
  //         tea.type.splice(i,1);
  //         $("#herbal").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.type)
  //       };
  //     };
  //   } else {
  //     tea.type.push($("#herbal").val());
  //     $("#herbal").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.type)
  //   };
  //   tea.getTea(tea);
  // });

  // buttons for style

  $("#styleSelectedButton").click(function() {
    $("#styleMenuButtons").removeClass("hidden");
    $("#menuShade").removeClass("hidden");
  });

  $("#light").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#light").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Light ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });

  $("#earthy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#earthy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Earthy ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });

  $("#energy").click(function() {
      tea.style.splice(0,1);
      tea.style.push($("#energy").val());
      $("#styleMenuButtons").addClass("hidden");
      $("#styleSelectedButton").empty().append("Energy ⌄");
      $("#menuShade").addClass("hidden");
      tea.getTea(tea);
    });

  // $("#light").click(function() {
  //   if (tea.style.includes($("#light").val())) {
  //     for (var i = 0; i < tea.style.length; i++) {
  //       if (tea.style[i] === $("#light").val()) {
  //         tea.style.splice(i,1);
  //         $("#light").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.style)
  //       };
  //     };
  //   } else {
  //     tea.style.push($("#light").val());
  //     $("#light").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.style)
  //   };
  //   tea.getTea(tea);
  // });
  // $("#earthy").click(function() {
  //   if (tea.style.includes($("#earthy").val())) {
  //     for (var i = 0; i < tea.style.length; i++) {
  //       if (tea.style[i] === $("#earthy").val()) {
  //         tea.style.splice(i,1);
  //         $("#earthy").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.style)
  //       };
  //     };
  //   } else {
  //     tea.style.push($("#earthy").val());
  //     $("#earthy").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.style)
  //   };
  //   tea.getTea(tea);
  // });
  // $("#energy").click(function() {
  //   if (tea.style.includes($("#energy").val())) {
  //     for (var i = 0; i < tea.style.length; i++) {
  //       if (tea.style[i] === $("#energy").val()) {
  //         tea.style.splice(i,1);
  //         $("#energy").removeClass("clicked");
  //         console.log("Removed the item. Type Array: " + tea.style)
  //       };
  //     };
  //   } else {
  //     tea.style.push($("#energy").val());
  //     $("#energy").addClass("clicked");
  //     console.log("Value added to array. Type Array: " + tea.style)
  //   };
  //   tea.getTea(tea);
  // });

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
