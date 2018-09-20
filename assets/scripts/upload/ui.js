'use strict'

const display = require('./../display.js')

const getUploadsSuccess = (data) => {
  display.clearForms()
}

const failure = (data) => {
  display.clearForms()
}

module.exports = {
  getUploadsSuccess,
  failure
}
