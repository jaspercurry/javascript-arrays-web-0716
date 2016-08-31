var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(arr, ele) {
var arr1 = arr
arr1.unshift(ele)
return arr1

}

function destructivelyAddElementToBeginningOfArray(arr, ele) {

  arr.unshift(ele)
  return arr

}


function addElementToEndOfArray(arr, ele) {
var arr1 = arr
arr1.push(ele)
return arr1
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
  return arr
}

function accessElementInArray(arr, idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
arr.shift
return arr
}

function removeElementFromBeginningOfArray(arr) {
  var arr1 = arr.slice(1)
  return arr1
}

function destructivelyRemoveElementFromEndOfArray(arr) {
    arr.pop
    return arr
}

function removeElementFromEndOfArray(arr) {
  var arr1 = arr.slice(0, -1)
  return arr1
}
