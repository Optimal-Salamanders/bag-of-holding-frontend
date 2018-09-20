'use strict'

const initialHide = function () {
  // Hide signed-in forms
  $('.logged-in-forms').hide()

  // Hide main page wrapper
  $('#main-wrapper').hide()
}

module.exports = {
  initialHide
}
