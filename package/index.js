const _ = require('lodash')

function isSutripta(str) {
    return str === "Sutripta"
}

function checkString(value) {
    return _.isString(value)
}

// module.exports.isSutripta = isSutripta
// module.exports.isString = checkString

module.exports = {
    isSutripta, isString: checkString
}
