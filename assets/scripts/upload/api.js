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

module.exports = {
  uploadCreate
}
