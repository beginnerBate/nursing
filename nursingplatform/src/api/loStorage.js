function setItem (name, value) {
  sessionStorage.setItem(name, value)
}

function getItem (name, type) {
  let res = sessionStorage.getItem(name)
  if (res !== null) {
    if (!type) { // 为布尔值
      res = JSON.parse(res)
    }
  }
  return res
}

function initData (init) {
  for (let i = 0; i < init.length; i++) {
    if (sessionStorage.getItem(init[i].name) === null) {
      setItem(init[i].name, init[i].value)
    }
  }
}

export default {initData, setItem, getItem}