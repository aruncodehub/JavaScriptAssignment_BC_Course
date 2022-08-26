function primefactorial(min,max){
    count =0
    fact = 1
    for(i=2;i<=max/2;i++){
        if(max % i ===0){
           count = 1
           fact = fact * i
        }
        if(max == 1) 
         count = 1;     
}
return fact
}

console.log(`primefactorial is :`, primefactorial(1,80))