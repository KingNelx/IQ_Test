const Questions = [
    {
        Questions: "Who invented Computers?",
        Answer: "CHARLES BABBAGE",
    },

    {
        Questions: "Who has invented JavaScript?",
        Answer: "BRENDAN EICH",
    },

    {
        Questions: "Who has invented Python?",
        Answer: "GUIDO VAN ROSSUM",
    },

    {
        Questions: "Which company owns SQL?",
        Answer: "MICROSOFT CORPORATION",
    },

    {
        Questions: "Java was created at which company?",
        Answer: "SUN MICROSYSTEMS",
    },

    {
        Questions: "Who names Java?",
        Answer: "JAMES GOSLING",
    },

    {
        Questions: "What is the first most popular programming language (According to StackOverFlow)?",
        Answer: "JAVASCRIPT",
    },

    {
        Questions: "Is Java and Python are same robust language?",
        Answer: "YES",
    },

    {
        Questions: "When was the first programming language created?",
        Answer: "1954",
    },

    {
        Questions: "When was the first programming language release?",
        Answer: "1957",
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
