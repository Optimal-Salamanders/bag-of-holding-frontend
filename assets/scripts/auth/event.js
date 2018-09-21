'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// function to handle sign up event
const onSignUpEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // store.credentials = data
  api.signUp(data)
    // .then(onSignUpIn)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// function to handle sign up and sign in
// Note Datawithout PC being drawn from store.credentials
const onSignUpIn = function (event) {
  // event.preventDefault()
  // delete store.credentials.password_confirmation
  const dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// function to handle signin event
const onSignInEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// function to handle signout event
const onSignOutEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// function to handle password change event
const onPasswordChangeEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const handlers = () => {
  $('#sign-up').on('submit', onSignUpEvent)
  $('#sign-in').on('submit', onSignInEvent)
  $('#sign-out').on('click', onSignOutEvent)
  $('#password-change').on('submit', onPasswordChangeEvent)
}

module.exports = {
  onSignUpEvent,
  onSignInEvent,
  onSignOutEvent,
  onPasswordChangeEvent,
  onSignUpIn,
  handlers
}
