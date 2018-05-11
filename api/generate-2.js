module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");
  return {
    people:_.times(100, function(n){
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        address: faker.address.streetAddress()
      }
    }),
    transactions:_.times(100, function(n){
      return {
        peopleId: n,
        transaction:_.times(10, function(t){
          return {
          id: t,
          transaction: faker.helpers.createTransaction()
        }
      })
    }

    })

  }
}
