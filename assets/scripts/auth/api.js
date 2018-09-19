const config = require('../config.js')
const store = require('../store.js')
// handles api calls related to user account

// handles api call for user account sign up
// data is credentials = {email, password: PASSWORD, password_confirmation: PASSWORD}
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

// handles api call for account sign-in
// data is credentials = {email: EMAIL, password: PASSWORD}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
// handles api call for account sign-out, token required
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// handles api call for account password-change, token required
// data is passwords = {old: OLDPW, new: NEWPW}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
