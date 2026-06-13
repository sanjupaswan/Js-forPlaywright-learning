let score = 33

console.log(typeof score) // number

score = "33"

console.log(typeof score) // string

score = Number(score)

console.log(typeof score) // number

let isLoggedIn = "true"

console.log(typeof isLoggedIn) // string

isLoggedIn = Boolean(isLoggedIn)

console.log(typeof isLoggedIn) // boolean

let userColor = "red"

let defaultColor = "blue"

let currentColor = userColor || defaultColor

console.log(currentColor) // red

userColor = ""

currentColor = userColor || defaultColor

console.log(currentColor) // blue

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// "" => false
// " " => true