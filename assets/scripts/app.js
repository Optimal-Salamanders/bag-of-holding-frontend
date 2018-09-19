'use strict'

const config = require('./config.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#upload-form').on('submit', function(event){
    event.preventDefault()
    const data = new FormData(event.target)
    console.log(data)

    $.ajax({
      method: 'POST',
      url: config.apiUrl + '/uploads',
      processData: false,
      contentType: false,
      data: data
    })
    .then((response) => {
      console.log(response)
    })
    .catch((response) => {
      console.log(response)
    })
  })
})
