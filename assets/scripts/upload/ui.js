'use strict'

// const store = require('../store.js')
// const display = require('./../display.js')
const fileListing = require('./file-listing.handlebars')

const onUploadCreateSuccess = (data) => {
  $('#message').html('Item Successfully Uploaded')
  clearForms()
}

const failure = (data) => {
  $('#message').html('Generic Failure')
  clearForms()
}

const onGetUploadsSuccess = function (data) {
  $('.display-all').html('')
  const showFileListing = fileListing({files: data.uploads})
  $('.display-all').append(showFileListing)
  clearForms()

  console.log('data dot uploads is ', data.uploads)
  for (let i = 0; i < data.uploads.length; i++) {
    console.log('data owner is ', data.uploads[i]._id)
  }

}

const onGetUploadsFailure = function () {
  $('#message').html('Unable to show files.')
  clearForms()
}

const onDeleteUploadSuccess = function () {
  $('#message').html('Item Successfully Deleted')
  clearForms()
}

const onDeleteUploadFailure = function () {
  $('#message').html('Delete went wrong')
  clearForms()
}
const onUpdateUploadSuccess = function () {
  // $('.display').html('')
  $('#message').html('Item Successfully Updated')
  clearForms()
}

const onUpdateUploadFailure = function () {
  $('#message').html('Update went wrong')
  clearForms()
}

const clearForms = () => {
  $('input').val('')
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
