var btns = []
var textBox = document.getElementById('textBox')
var prev = document.getElementById('prev')
var del = document.getElementById('Del')
var clr = document.getElementById('Clr')
var res = document.getElementById('res')

var add = document.getElementById('add')
var subs = document.getElementById('subs')
var mul = document.getElementById('mul')
var div = document.getElementById('div')
var mod = document.getElementById('mod')

var value1 = 0
var result = 0
var operationType = ''

for (var i = 0; i < 10; i++) {
  var ele = document.getElementById(i)
  btns.push(ele)
}

btns.forEach((btn, id) => {
  btn.addEventListener('click', () => {
    textBox.innerHTML += id
  })
})

add.addEventListener('click', () => {
  operationType = '+'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

subs.addEventListener('click', () => {
  operationType = '-'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

mul.addEventListener('click', () => {
  operationType = '*'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

div.addEventListener('click', () => {
  operationType = '/'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

mod.addEventListener('click', () => {
  operationType = '%'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

res.addEventListener('click', () => {
  switch (operationType) {
    case '+':
      result = value1 + parseInt(textBox.innerHTML)
      textBox.innerHTML = result
      value1 = result
      break
    case '-':
      result = value1 - parseInt(textBox.innerHTML)
      textBox.innerHTML = result
      value1 = result
      break
    case '*':
      result = value1 * parseInt(textBox.innerHTML)
      textBox.innerHTML = result
      value1 = result
      break
    case '/':
      result = Math.trunc(value1 / parseInt(textBox.innerHTML))
      textBox.innerHTML = result
      value1 = result
      break
    case '%':
      result = value1 % parseInt(textBox.innerHTML)
      textBox.innerHTML = result
      value1 = result
      break
    default:
      break
  }
})

del.addEventListener('click', () => {
  var temp = textBox.innerHTML.slice(0, textBox.innerHTML.length - 1)
  textBox.innerHTML = temp
})

clr.addEventListener('click', () => {
  textBox.innerHTML = ''
  prev.innerHTML = ''
  value1 = 0
  result = 0
  operationType = ''
})
