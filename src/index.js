"use strict";

import './index.css'
import './home.css'
import 'jquery'

function getContentTarget() {
  if (!window.location.hash) {
    return "home.html";
  }
  return window.location.hash.substr(1) + ".html";
}

function updateContent() {
  $.get(getContentTarget(), function(data, status) {
    $('#content').html(data);
  });
}

function setup() {
  var menuOptions = $('.header__menu-option');
  for (var optionIdx = 0; optionIdx < menuOptions.length; ++optionIdx) {
    $(menuOptions[optionIdx]).click(function() {
      $('.header__menu-option--selected').removeClass('header__menu-option--selected');
      $(this).addClass('header__menu-option--selected');
    });
  }
  updateContent();
}

$(window).on('load', setup);
$(window).on('hashchange', updateContent);
