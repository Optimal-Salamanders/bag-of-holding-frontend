'use strict'

// function to handle sign up success
const onSignUpSuccess = function () {
  $('#message').html('Account successfully created! Please sign in to upload files!')
}
// function to handle sign up failure
const onSignUpFailure = function () {
  $('#message').html('Unable to create an account. Double check your info.')
}
// function to handle sign in success
const onSignInSuccess = function (response) {
  $('#message').html('You have successfully signed in!')
}
// function to handle sign in failure
const onSignInFailure = function () {
  $('#message').html('Unable to sign in. Double check your info.')
}
// function to handle sign out success
const onSignOutSuccess = function () {
  $('#message').html('Successfully signed out!')
}
// function to handle sign out failure
const onSignOutFailure = function () {
  $('#message').html('Something went wrong, please check your internet connection.')
}
// function to handle change password success
const onChangePasswordSuccess = function () {
  $('#message').html('Your password is now updated!')
}
// function to handle change password failure
const onChangePasswordFailure = function () {
  $('#message').html('We were unable to update your password. Please ensure your old password is correct.')
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
