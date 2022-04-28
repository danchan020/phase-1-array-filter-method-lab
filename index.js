//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// function findMatching(drivers,name){
//     return drivers.filter(function(driver){
//         return 
//     }
// }

function findMatching(drivers, string) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === string.toLowerCase() 
    })
}

function fuzzyMatch(drivers,string){
    return drivers.filter(function (driver){
        return driver 
    })
}

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];


function matchName(driverObj,string){
    return driverObj.filter(function(driver){
        return driver.name === string
    })
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
//   function matchName(drivers, argument) {
//     return drivers.filter(function (driver) { return driver.name === argument })