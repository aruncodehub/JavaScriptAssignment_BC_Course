let leap = (year) => (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0))
result = leap(2019) ? "Leap year" : "Not a Leap year"
console.log(result)

