/* Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 hence 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/
function studentGrade(){

    let score = prompt("Please enter the student's score")
    //to only work with integers.
    score = parseInt(score)

    if (score >=80 && score < 100 ){
            console.log(`Your score is: ${score} hence your grade is A`)

    }else if (score >=60 && score <= 79){
            console.log(`Your score is: ${score} hence your grade is B`)

    }else if (score  > 49 && score <= 59 ){
            console.log(`Your score is: ${score} hence your grade is C`)

    }else if (score >= 40 && score <= 49){
            console.log(`Your score is: ${score} hence your grade is D`)

    }else if(score >=0 && score < 40){
            console.log(`Your score is: ${score} hence your grade is E`)
            
    }else{
            console.log("Out of range. please enter a number between 0 and 100!")
    }


}

studentGrade();






