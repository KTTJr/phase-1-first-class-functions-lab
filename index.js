const returnFirstTwoDrivers = function (drivers) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0, 2)
}
returnFirstTwoDrivers()

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function (num2) {
        return num1 * num2
    }
}
createFareMultiplier()

const fareDoubler = function createFareMultiplier(num1) {
    return num1 * 2
}

const fareTripler = function createFareMultiplier(num1) {
    return num1 * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}