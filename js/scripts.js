function Tea() {
  this.flavor = [];
  this.style = [];
  this.type = [];
}

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
};

// function change image
// function swapImage(imgToSwap) {
//   imgToSwap.src = "img/jasmine.jpg";
//   imgToSwap.alt = "green-teaCup"
// }
// function swapBack(imgToSwap) {
//   imgToSwap.src = "img/green-tea.jpg";
//   imgToSwap.alt = "green-tea"
// }

$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var tea = new Tea();
    $("input:checkbox[name=type]:checked").each(function() {
      tea.type.push($(this).val());
      });
    $("input:checkbox[name=style]:checked").each(function() {
      tea.style.push($(this).val());
      });
    $("input:checkbox[name=flavor]:checked").each(function() {
      tea.flavor.push($(this).val());
      });
    tea.getTea(tea);
    $("#result").show();
    $(".result").empty().append( "You should try our " + topName + ".");
  });
});
