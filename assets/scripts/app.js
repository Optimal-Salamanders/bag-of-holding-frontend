'use strict'

// const config = require('./config.js')
const auth = require('./auth/event.js')
// const store = require('./store.js')
const upload = require('./upload/event.js')

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
  // listener for upload form
  $('#upload-form').on('submit', upload.onUploadCreate)
  // index function event
  $('#index').on('click', upload.onGetUploads)
})
