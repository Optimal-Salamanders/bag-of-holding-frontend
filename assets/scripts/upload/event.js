'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

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
  const data = getFormFields(event.target)

  console.log('delete data is ', data)

  api.deleteUpload(data)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

const handlers = () => {
  $('#upload-form').on('submit', onUploadCreate)
  $('#index').on('click', onGetUploads)
  $('#delete').on('submit', onDeleteUpload)
}

module.exports = {
  onUploadCreate,
  onGetUploads,
  onDeleteUpload,
  handlers
}
