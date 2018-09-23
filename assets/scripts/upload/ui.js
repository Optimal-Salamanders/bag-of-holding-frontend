'use strict'

const store = require('../store.js')
// const display = require('./../display.js')
const fileListing = require('./file-listing.handlebars')
const fileListingUser = require('./file-listing-user.handlebars')

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
  data.uploads.map(x => {
    const createDate = new Date(x.createdAt).toString()
    const updateDate = new Date(x.updatedAt).toString()
    x.createdAt = createDate.substring(0, createDate.indexOf('G'))
    x.updatedAt = updateDate.substring(0, updateDate.indexOf('G'))
  })

  store.uploads = data.uploads

  const showFileListing = fileListing({files: data.uploads})
  $('.display-all').append(showFileListing)
  clearForms()

  // Check for owner
  const ownerUploads = []

  for (let i = 0; i < data.uploads.length; i++) {
    if (data.uploads[i].owner === store.user._id) {
      ownerUploads.push(data.uploads[i])
    }
  }

  const showUserFileListing = fileListingUser({files: ownerUploads})
  $('.display-user').html('')
  $('.display-user').append(showUserFileListing)
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
