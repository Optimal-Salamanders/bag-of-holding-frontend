'use strict'

const config = require('./config.js')
const auth = require('./auth/event.js')
const store = require('./store.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//

$(() => {

  // Hide signed-in forms
  $('.logged-in-forms').hide()

  // listens for sign-up event
  $('#sign-up').on('submit', auth.onSignUpEvent)
  // listens for sign-in event
  $('#sign-in').on('submit', auth.onSignInEvent)
  // listens for sign-out event
  $('#sign-out').on('click', auth.onSignOutEvent)
  // listens for change-password event
  $('#password-change').on('submit', auth.onPasswordChangeEvent)

  $('#upload-form').on('submit', function (event) {
    event.preventDefault()
    console.log('event dot target is ', event.target)
    const data = new FormData(event.target)
    console.log('data is ', data)

    $.ajax({
      method: 'POST',
      url: config.apiUrl + '/uploads',
      processData: false,
      contentType: false,
      headers: {
        'Authorization': 'Token token=' + store.user.token
      },
      data: data
    })
      .then((response) => {
        console.log(response)
      })
      .catch((response) => {
        console.log(response)
      })
  })
})
