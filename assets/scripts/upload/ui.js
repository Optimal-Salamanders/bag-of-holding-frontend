'use strict'

// const store = require('../store.js')
const display = require('./../display.js')

const onUploadCreateSuccess = (data) => {
  display.clearForms()
}

const failure = (data) => {
  display.clearForms()
}

const onGetUploadsSuccess = function (data) {
  console.log('data is', data)
  $('.display').append(data)
}

const onGetUploadsFailure = function () {}

module.exports = {
  onUploadCreateSuccess,
  failure,
  onGetUploadsSuccess
}
