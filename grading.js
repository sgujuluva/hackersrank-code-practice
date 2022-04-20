/* omplete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If , then .
If , then .
If , then .
If , then .
If , then .
If , then . */

function getGrade(score) {
    let grade;
    // Write your code here

    if(score > 25 && score <=30){
        return "A";
    }else if(score >20 && score <=25){
        return "B";
    }else if(score > 15 && score <=20){
        return "C";
    }
    else if(score > 10 && score <=15){
        return "D";
    }
    else if(score > 5 && score <=10){
        return "E";
    }
    else if(score >=0 && score <=5){
        return "F";
    }
    
    return grade;
}
console.log(getGrade(11));
