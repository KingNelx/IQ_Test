const Questions = [
    {
        Questions: "Who invented Computers?",
        Answer: "CHARLES BABBAGE",
    },

    {
        Questions: "Test Question2",
        Answer: "ANSWER2",
    },

    {
        Questions: "Test Question3",
        Answer: "ANSWER3",
    },

    {
        Questions: "Test Question4",
        Answer: "ANSWER4",
    },
].sort(() => Math.random() - 0.5);

let score = 0;

alert(" Answers are case sensitive, so make sure to enter them correctly and into lowercase only. ");

for(key in Questions){
    let question = prompt(Questions[key].Questions);
    if(question == Questions[key].Answer.toLocaleLowerCase()){
        alert("Correct!");
        score++;
    }else{
        alert("Incorrect!");
    }
}

    alert("You got " + score + " out of " + Questions.length);
    if(score < Questions.length/2){
        alert("You failed!");
    }else{
        alert("You passed!");

    }
