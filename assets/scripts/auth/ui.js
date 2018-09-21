'use strict'

const store = require('./../store.js')
const display = require('./../display.js')

// function to handle sign up success
const onSignUpSuccess = function () {
  clearForms()

  $('#message').html('Account successfully created! Please sign in to upload files!')
}
// function to handle sign up failure
const onSignUpFailure = function () {
  clearForms()

  $('#message').html('Unable to create an account. Double check your info.')
}
// function to handle sign in success
const onSignInSuccess = function (response) {
  // Clear all inputs
  clearForms()

  // Show signed-in elements
  display.showSignedIn()

  // Store the API's response in store.js
  store.user = response.user

  $('#message').html('You have successfully signed in!')
}
// function to handle sign in failure
const onSignInFailure = function () {
  clearForms()

  $('#message').html('Unable to sign in. Double check your info.')
}
// function to handle sign out success
const onSignOutSuccess = function () {
  // Clear all inputs
  clearForms()

  // Hide signed-in elements
  display.showSignedOut()

  $('#message').html('Successfully signed out!')
}
// function to handle sign out failure
const onSignOutFailure = function () {
  clearForms()

  $('#message').html('Something went wrong, please check your internet connection.')
}
// function to handle change password success
const onChangePasswordSuccess = function () {
  clearForms()

  $('#message').html('Your password is now updated!')
}
// function to handle change password failure
const onChangePasswordFailure = function () {
  clearForms()

  $('#message').html('We were unable to update your password. Please ensure your old password is correct.')
}

// Clear all inputs
const clearForms = () => {
  $('input').val('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
