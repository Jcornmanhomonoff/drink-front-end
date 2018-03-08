'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'sign-up',
    data
  })
    .then(function () {
      return signIn(success, failure, data)
    })
    .catch(failure)
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
  console.log('here')

  $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'sign-in',
    data: data
  })
    .then(success)
    .catch(failure)
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
