"use strict";

import './common.css'
import './index.css'
import 'jquery'

function getContentTarget() {
  if (window.location.hash === "") {
    return "home.html";
  } else {
    return "home.html";
  }
}

function updateContent() {
  $.ajax(getContentTarget()).done(function(data) {
    $('#content').html("[" + data + "]");
  });
}

function setup() {
  console.log("wawa");
  var menuOptions = $('.header__menu-option');
  for (var optionIdx = 0; optionIdx < menuOptions.length; ++optionIdx) {
    var option = $(menuOptions[optionIdx]);
    option.click(function() {
      window.location.hash = option.href;
      updateContent();
    });
  }
  updateContent();
}

$(setup);