function multiples(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
  
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(`multiples of either 3 or 5 :`, multiples(1000) );
  console.log(`multiples of either 3 or 5 :`, multiples(5) );
  console.log(`multiples of either 3 or 5 :`, multiples(6) );

function multiplesofboth(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
  
      if (i % 3 === 0  && i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }

  console.log(`multiplesofboth 3 and 5 :`, multiplesofboth(1000) );
  console.log(`multiplesofboth 3 and 5 :`, multiplesofboth(5) );
  console.log(`multiplesofboth 3 and 5 :`,multiplesofboth(6) );
  console.log(`multiplesofboth 3 and 5 :`,multiplesofboth(15) );
  console.log(`multiplesofboth 3 and 5 :`,multiplesofboth(30) );