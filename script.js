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
  btn.addEventListener('pointerdown', () => {
    textBox.innerHTML += id
  })
})

add.addEventListener('pointerdown', () => {
  operationType = '+'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

subs.addEventListener('pointerdown', () => {
  operationType = '-'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

mul.addEventListener('pointerdown', () => {
  operationType = '*'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

div.addEventListener('pointerdown', () => {
  operationType = '/'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

mod.addEventListener('pointerdown', () => {
  operationType = '%'
  value1 = parseInt(textBox.innerHTML)
  prev.innerHTML = value1 + ' ' + operationType
  textBox.innerHTML = ''
})

res.addEventListener('pointerdown', () => {
  if (parseInt(textBox.innerHTML) != NaN && value1 != 0) {
    switch (operationType) {
      case '+':
        prev.innerHTML = prev.innerHTML + ' ' + textBox.innerHTML
        result = value1 + parseInt(textBox.innerHTML)
        textBox.innerHTML = result
        value1 = result
        break
      case '-':
        prev.innerHTML = prev.innerHTML + ' ' + textBox.innerHTML
        result = value1 - parseInt(textBox.innerHTML)
        textBox.innerHTML = result
        value1 = result
        break
      case '*':
        prev.innerHTML = prev.innerHTML + ' ' + textBox.innerHTML
        result = value1 * parseInt(textBox.innerHTML)
        textBox.innerHTML = result
        value1 = result
        break
      case '/':
        prev.innerHTML = prev.innerHTML + ' ' + textBox.innerHTML
        result = Math.trunc(value1 / parseInt(textBox.innerHTML))
        textBox.innerHTML = result
        value1 = result
        break
      case '%':
        prev.innerHTML = prev.innerHTML + ' ' + textBox.innerHTML
        result = value1 % parseInt(textBox.innerHTML)
        textBox.innerHTML = result
        value1 = result
        break
      default:
        break
    }
  }
})

del.addEventListener('pointerdown', () => {
  var temp = textBox.innerHTML.slice(0, textBox.innerHTML.length - 1)
  textBox.innerHTML = temp
})

clr.addEventListener('pointerdown', () => {
  textBox.innerHTML = ''
  prev.innerHTML = ''
  value1 = 0
  result = 0
  operationType = ''
})
