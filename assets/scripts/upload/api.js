'use strict'

const config = require('../config.js')
const store = require('../store.js')

// ajax call to API for new file uploads
const uploadCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    processData: false,
    contentType: false,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}
// ajax call to API for file index
const getUploads = function (data) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// ajax call for API delete with ID
const deleteUpload = function (id) {
  return $.ajax({
    url: config.apiUrl + '/uploads/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// ajax call for API Patch with ID
const updateUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + '/uploads/' + data.upload.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}
module.exports = {
  uploadCreate,
  getUploads,
  deleteUpload,
  updateUpload
}
