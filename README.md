# three-stupid-array-uniquify-func

Just like the package name, there are three stupid array unqiuify functions.

## usage

```js
const { setUniquer ,forEachUniquer, reduceUniquer } = require('three-stupid-array-uniquify-func')
const thisIsAnArray = [1, 1, 2, '1', 3, 4, '4', 3, 4, 2]

setUniquer(thisIsAnArray)
forEachUniquer(thisIsAnArray)
reduceUniquer(thisIsAnArray)
// All of them output the same array: [1, 2, '1', 3, 4, '4']
// <doge />
```
