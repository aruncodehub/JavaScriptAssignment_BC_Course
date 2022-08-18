let ctof = (celsius) => (celsius * (9 /5)) +32 
farresult = ctof(60)
console.log("60 degree C is" + " " + farresult + " " +  "fahrenheit")

let ftoc = (fahrenheit) => ((fahrenheit - 32) *  (5/9))
celresult = ftoc(45)
console.log("45 F is" + " " + celresult + " " +  "celsius")