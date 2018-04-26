import 'jquery'

var contentNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function insertContent(container, contentName) {
  var cardDiv = $('<div></div>', {
    id: contentName,
    'class': 'card'
  });
  $('<div></div>', {
    'class': 'card__description',
    text: contentName
  }).appendTo(cardDiv);
  cardDiv.appendTo(container);
}

function homeSetup() {
  console.log('homeSetup');
  var target = $("#gallery");
  if (target.length == 0) {
    console.error("Missing HTML element");
    return;
  }
  target = target[0];

  var colIdx = 0;
  for (var contentIdx = 0; contentIdx < contentNames.length; ++contentIdx) {
    insertContent(target, contentNames[contentIdx]);
  }
}

homeSetup();