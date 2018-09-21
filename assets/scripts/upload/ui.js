'use strict'

// const store = require('../store.js')
// const display = require('./../display.js')
const fileListing = require('./file-listing.handlebars')

const onUploadCreateSuccess = (data) => {
  // display.clearForms()
}

const failure = (data) => {
  // display.clearForms()
}

const onGetUploadsSuccess = function (data) {
  console.log('data is', data)
  const showFileListing = fileListing({files: data.uploads})
  $('.display').append(showFileListing)
}

const onGetUploadsFailure = function () {
  $('#message').html('Unable to show files.')
}

const onDeleteUploadSuccess = function () {
  $('#message').html('Item Successfully Deleted')
}

const onDeleteUploadFailure = function () {
  $('#message').html('Delete went wrong')
}
const onUpdateUploadSuccess = function () {
  $('#message').html('Item Successfully Updated')
}

const onUpdateUploadFailure = function () {
  $('#message').html('Update went wrong')
}
module.exports = {
  onUploadCreateSuccess,
  failure,
  onGetUploadsSuccess,
  onGetUploadsFailure,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
  onUpdateUploadSuccess,
  onUpdateUploadFailure
}
