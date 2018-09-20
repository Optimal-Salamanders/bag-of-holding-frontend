'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onUploadCreate = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)

  api.uploadCreate(data)
    .then(ui.onUploadCreateSuccess)
    .catch(ui.onUploadCreateFailure)
}

module.exports = {
  onUploadCreate
}
