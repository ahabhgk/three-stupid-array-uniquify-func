const setUniquer = arr => [...new Set(arr)]

const forEachUniquer = (arr) => {
  const res = []
  arr.forEach((e) => {
    if (!res.includes(e)) res.push(e)
  })
  return res
}

const reduceUniquer = arr => arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur)
  return acc
}, [])

module.exports = {
  setUniquer,
  forEachUniquer,
  reduceUniquer,
}
