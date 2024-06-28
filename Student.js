/* Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 hence 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/
function studentGrade(){
    //prompt the user to input a score
    let score = prompt("Please enter the student's score")

    //converts whatever theinput is to an integer
    score = parseInt(score, 10)

    //score must be within the 0-100 range 
    if (score >= 0 && score <= 100) {

        //grade according to the score
        if (score >79 ){
                console.log(`Your score is: ${score} hence your grade is A`)

        }else if (score >=60 && score <= 79){
                console.log(`Your score is: ${score} hence your grade is B`)

        }else if (score  > 49 && score <= 59 ){
                console.log(`Your score is: ${score} hence your grade is C`)

        }else if (score >= 40 && score <= 49){
                console.log(`Your score is: ${score} hence your grade is D`)

        }else {
                console.log(`Your score is: ${score} hence your grade is E`)
        }       
        
    } else {
                console.log("Out of range. please enter a number between 0 and 100!")
    }
    
}
//callfunction
studentGrade();