// const thisIsAnArray = [1, 1, 2, '1', 3, 4, '4', 3, 4, 2]

const setUniquer = arr => [...new Set(arr)]

// console.log(setUniquer(thisIsAnArray))

const forEachUniquer = (arr) => {
  const res = []
  arr.forEach((e) => {
    if (!res.includes(e)) res.push(e)
  })
  return res
}

// console.log(forEachUniquer(thisIsAnArray))

const reduceUniquer = arr => arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur)
  return acc
}, [])

// console.log(reduceUniquer(thisIsAnArray))

module.exports = {
  setUniquer,
  forEachUniquer,
  reduceUniquer,
}
