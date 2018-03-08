'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'sign-up',
    data
  })
    .done(function () {
      return signIn(success, failure, data)
    })
    .fail(failure)
}

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'sign-in',
    data: data
  })
    .done(success)
    .fail(failure)
}

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'change-password',
    data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
