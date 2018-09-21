'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onUploadCreate = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  api.uploadCreate(data)
    .then(ui.onUploadCreateSuccess)
    .catch(ui.failure)
}

const onGetUploads = function (event) {
  event.preventDefault()
  console.log('getupload user token is ', store.user.token)
  api.getUploads(event)
    .then(ui.onGetUploadsSuccess)
    .catch(ui.onGetUploadsFailure)
}

const onDeleteUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  console.log('delete data is ', data)

  api.deleteUpload(data)
    .then(api.getUploads)
    .then(ui.onGetUploadsSuccess)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  console.log('update data is ', data)

  api.updateUpload(data)
    .then(api.getUploads)
    .then(ui.onGetUploadsSuccess)
    .then(ui.onUpdateUploadSuccess)
    .catch(ui.onUpdateUploadFailure)
}

const handlers = () => {
  $('#upload-form').on('submit', onUploadCreate)
  $('#index').on('click', onGetUploads)
  $('#delete').on('submit', onDeleteUpload)
  $('#update').on('submit', onUpdateUpload)
}

module.exports = {
  onUploadCreate,
  onGetUploads,
  onDeleteUpload,
  onUpdateUpload,
  handlers
}
