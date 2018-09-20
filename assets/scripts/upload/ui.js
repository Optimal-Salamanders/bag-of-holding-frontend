'use strict'

// const store = require('../store.js')
const display = require('./../display.js')
const fileListing = require('./file-listing.handlebars')

const onUploadCreateSuccess = (data) => {
  display.clearForms()
}

const failure = (data) => {
  display.clearForms()
}

const onGetUploadsSuccess = function (data) {
  console.log('data is', data)
  const showFileListing = fileListing({files: data.uploads})
  $('.display').append(showFileListing)
}

const onGetUploadsFailure = function () {}

module.exports = {
  onUploadCreateSuccess,
  failure,
  onGetUploadsSuccess
}
