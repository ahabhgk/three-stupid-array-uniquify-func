function deepClone(target) {
  // 基本类型拷贝
  if (!(target instanceof Object)) return target

  // 引用类型拷贝
  const result = Array.isArray(target) ? [] : {}

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      if (target[key] === target) { // 判断是否为循环引用
        result[key] = result // 俺也一样
      } else {
        result[key] = deepClone(target[key])
      }
    }
  }

  return result
}

var a = {
  arr:[1,2,3,{key:'123'}], // 数组测试
}
a.self = a // 循环引用测试
var c = deepClone(a)
console.log(c)
