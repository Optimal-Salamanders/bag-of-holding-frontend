'use strict'

// const config = require('./config.js')
// const auth = require('./auth/event.js')
// const store = require('./store.js')
const authEvents = require('./auth/event.js')
const uploadEvents = require('./upload/event.js')
const display = require('./auth/display.js')

$(() => {

  // Hide main elements
  display.initialHide()

  // Auth button handlers
  authEvents.handlers()

  // Upload button handlers
  uploadEvents.handlers()

})
