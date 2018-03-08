'use strict'

const config = require('../config')
const store = require('../store')

const newDrink = (success, failure, data) => {
  console.log(data)
  $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'drinks',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
    .done(success)
    .fail(failure)
}

const getDrank = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: config.apiOrigin + 'drinks',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

const editDrank = (success, failure, data, drinkId) => {
  console.log(data)
  $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'drinks/' + drinkId,
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
    .done(success)
    .fail(failure)
}

const deleteDrank = (success, failure, drinkId) => {
  console.log(drinkId)
  $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + 'drinks/' + drinkId,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

module.exports = {
  newDrink,
  getDrank,
  editDrank,
  deleteDrank
}
