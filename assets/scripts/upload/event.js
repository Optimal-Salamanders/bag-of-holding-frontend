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
  api.getUploads(event)
    .then(ui.onGetUploadsSuccess)
    .catch(ui.onGetUploadsFailure)
}

const onDeleteUpload = function (event) {
  event.preventDefault()
  const uploadId = $(event.target).closest('section').data('id')

  api.deleteUpload(uploadId)
    .then(api.getUploads)
    .then(ui.onGetUploadsSuccess)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

const preUpdate = function (event) {
  event.preventDefault()

  const updateId = $(event.target).closest('section').data('id')
  store.tempId = updateId
  $(`#${updateId}`).on('submit', onUpdateUpload)
}

const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.upload.id = store.tempId
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
  $('.display-user').on('click', '.delete', onDeleteUpload)
  $('.display-user').on('click', '.update', preUpdate)
}

module.exports = {
  onUploadCreate,
  onGetUploads,
  onDeleteUpload,
  onUpdateUpload,
  handlers
}
