# three-stupid-array-uniquify-func

Just like the package name, there are three stupid array unqiuify functions.

## usage

### array uniquer:

```js
const { setUniquer ,forEachUniquer, reduceUniquer } = require('three-stupid-array-uniquify-func')
const thisIsAnArray = [1, 1, 2, '1', 3, 4, '4', 3, 4, 2]

setUniquer(thisIsAnArray)
forEachUniquer(thisIsAnArray)
reduceUniquer(thisIsAnArray)
// All of them output the same array: [1, 2, '1', 3, 4, '4']
// <doge />
```

### proAjax:

```js
/**
 * An promisify ajax function
 * @param {String} baseUrl An url.
 * @param {Object} options Define request's method, data, headers, progress tag...(unfinish)
 * @return {Object} There are three functions to process the response data into text,json and blob.
 */
// I'm lazy...
```
