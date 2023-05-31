const _lo = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _lo.flattenDeep(items)
console.log(newItems)