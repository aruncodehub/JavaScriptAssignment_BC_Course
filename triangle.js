function triangle(side1,side2,side3){
    if(side1 === side2 && side1===side3){
        console.log("Triangle is Equvilateral");
    }else if(side1 === side2 || side2 === side3 || side3 === side1){
          console.log("Triangle is Isosceles");
        }else{
            console.log("Triangle is Scalene") ;
        }
}
triangle(3,3,3)
triangle(3,2,2)
triangle(3,2,1)