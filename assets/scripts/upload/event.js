'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
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

const handlers = () => {
  $('#upload-form').on('submit', onUploadCreate)
  $('#index').on('click', onGetUploads)
}

module.exports = {
  onUploadCreate,
  onGetUploads,
  handlers
}
