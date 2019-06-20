
function findHighestGPA(val){
    var greatestSoFar = 0;
    var greatestCourseSoFar;
    if(val.section.charAt(0) != "L"){
        if((val.course/100) < 2){
            if(val.stats.average > greatestSoFar){
                greatestSoFar = val.stats.average;
                greatestCourseSoFar = val
            }
        }
    }
    
console.log(greatestCourseSoFar)    
}
