// const str = `
// 010-1234-1234
// grayzone12@nate.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// aabbbbccccddddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// const regexp = new RegExp('com', 'g')
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)
// console.log(regexp.test(str))
// console.log(str.match(regexp))

//const regexp = /the/gi
// console.log(str.match(/com/gim))

// console.log(
//   str.match(/fox|dog/)
// )
// console.log(
//   str.match(/https?/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// const h = `  the hellow world   !

// `
// console.log(
//   h.replace(/\s/g, '')
// )

const str = `
010-1234-1234
grayzone12@nate.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbccccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)