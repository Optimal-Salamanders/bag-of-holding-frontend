'use strict'

// const config = require('./config.js')
// const auth = require('./auth/event.js')
// const store = require('./store.js')
const authEvents = require('./auth/event.js')
const uploadEvents = require('./upload/event.js')

$(() => {
  // Hide signed-in forms
  $('.logged-in-forms').hide()

  authEvents.handlers()

  uploadEvents.handlers()

})
