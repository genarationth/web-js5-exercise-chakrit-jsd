// Exercise #1

// part#1
const queue = ['Sofia', 'David', 'Juan']

// Part#2
queue.push('Sara', 'Augustin')

const called = queue.shift()

// Part#3
queue.splice(queue.indexOf('David')+1, 0, 'Renata')

queue.push('Elena')

console.log(called)
console.log(queue)




// Exercise #2


let text = ''
for (let i = 0; i < 5; i++) {
    text += '*'
    console.log(text)
}




// Exercise #3


let value = 10
const allValue = []
while (value > 0) {
    value -= 0.5
    allValue.push(value)
}


console.log('part#1 : '+ allValue)


let num = 1
const oddNum = []
while (num < 101) {
    if (num % 2 !== 0) {
        oddNum.push(num)
    }
    num++
}
console.log('part#2 : '+ oddNum)


const n = 10
let startNum = 1
const allSquareNum = []
while (startNum <= n) {
    allSquareNum.push(`[${startNum}]`)
    startNum++
}

console.log('part#3 : '+ allSquareNum)


const numEnd = 19
let numStart = 1
const arr = []
while (numStart <= numEnd) {
    arr.push(numStart)
    numStart++
}

const sum = arr.reduce((a, b) => a + b)
console.log('part#4 : '+ arr)
console.log('part#4 : '+ sum)