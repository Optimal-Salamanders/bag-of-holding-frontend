'use strict'
// const store = require('../store.js')

const onUploadCreateSuccess = function () {}

const onUploadCreateFailure = function () {}

const onGetUploadsSuccess = function (data) {
  console.log('data is', data)
  $('#display').html(data)
}

const onGetUploadsFailure = function () {}

module.exports = {
  onUploadCreateSuccess,
  onUploadCreateFailure,
  onGetUploadsSuccess,
  onGetUploadsFailure
}
