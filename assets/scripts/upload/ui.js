'use strict'

const display = require('./../display.js')

const onUploadCreateSuccess = (data) => {
  display.clearForms()
}

const failure = (data) => {
  display.clearForms()
}

module.exports = {
  onUploadCreateSuccess,
  failure
}
