'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events')

$(() => {
  events.addHandlers()
  $('.create-drinks-section').hide()
  $('.drink-list-section').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.open-sign-up').addClass('active')
  $('.open-sign-up').on('click', function (event) {
    event.preventDefault()
    $('#sign-in').hide()
    $('.open-sign-in').removeClass('active')
    $('#sign-up').show()
    $('.open-sign-up').addClass('active')
  })
  $('.open-sign-in').on('click', function (event) {
    event.preventDefault()
    $('#sign-up').hide()
    $('.open-sign-up').removeClass('active')
    $('#sign-in').show()
    $('.open-sign-in').addClass('active')
  })
})
