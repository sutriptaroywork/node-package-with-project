const { isSutripta, isString } = require('@sutriptaroy/core')
const core = require('@sutriptaroy/core')
// import { isSutripta, isString } from '@sutriptaroy/core'  /** Needs to add "package.json" through "npm init" **/

console.log(isSutripta("Sutripta"))
console.log(isString("Sutripta"))

console.log(core.isSutripta("Sutripta"))
console.log(core.isString("Sutripta"))
