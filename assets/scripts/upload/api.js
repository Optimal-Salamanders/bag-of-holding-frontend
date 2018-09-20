'use strict'

const config = require('../config.js')
const store = require('../store.js')

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

const getUploads = function (data) {
  return $.ajax({
    url: config.apiUrl + '/uploads',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  uploadCreate,
  getUploads
}
