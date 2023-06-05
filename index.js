// Code your solution in this file!
const names = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(names){
    return names.slice(0,2)
}
function returnLastTwoDrivers(names){
    return names.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (num1){
        return num*num1
    }
}
function fareDoubler(createFareMultiplier){
    return createFareMultiplier*2
}
function fareTripler(createFareMultiplier){
    return createFareMultiplier*3
}
function selectDifferentDrivers(names, func){
    return func(names)
}