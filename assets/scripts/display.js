'use strict'

const initialHide = function () {
  // Hide signed-in forms
  $('.logged-in-forms').hide()

  // Hide main page wrapper
  $('#main-wrapper').hide()
}

const showSignedIn = function () {
  // Display signed-in elements
  $('.logged-in-forms').show()
  $('.logged-out-forms').hide()
  $('#main-wrapper').show()
}

const showSignedOut = function () {
  // Hide signed-in elements
  $('.logged-in-forms').hide()
  $('.logged-out-forms').show()
  $('#main-wrapper').hide()
}

module.exports = {
  initialHide,
  showSignedIn,
  showSignedOut
}
