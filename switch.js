function myGrading(score) {
    var gscore;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         gscore = 'S Grade';
          break;
      case (score <= 89 && score >= 80):
          gscore = 'A Grade';
           break;
      case (score <= 79 && score > 70):
          gscore = 'B Grade';
           break;
         case (score <= 69 && score > 60):
          gscore = 'C Grade';
           break;
      case (score <= 59 && score > 50):
          gscore = 'D Grade';
          break;
      case (score <= 49 && score > 40):
            gscore = 'E Grade';
            break;
      case (score <=40 && score > 0):
                gscore = 'Student has failed';
                break;
      default:
        return 'INVALID SCORE';
    }
    return gscore;
  };
  
  console.log(myGrading(99));
  console.log(myGrading(88));
  console.log(myGrading(77));
  console.log(myGrading(66));
  console.log(myGrading(55));
  console.log(myGrading(44));
  console.log(myGrading(40));
  console.log(myGrading(0));
  console.log(myGrading(100));
  console.log(myGrading(105));
  console.log(myGrading(29));
  console.log(myGrading(-4));