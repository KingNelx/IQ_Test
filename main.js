const question = [
    {
        Question: "When was Java  Invented? ",
        Answer: 1995,
    },

    {
        Question: "When was Python Invented? ",
        Answer: 1991,
    },

    {
        Question: "When was Javascript Invented? ",
        Answer: 1995,
    },

    {
        Question: "When was C++ Invented? ",
        Answer: 1985,
    },

    {
        Question: "When was Cobol Invented? ",
        Answer: 1959,
    },

    {
        Question: "When was Linux Invented? ",
        Answer: 1991,
    },

    {
        Question: "When was Windows Invented? ",
        Answer: 1985,
    },

    {
        Question: "When was ReactJs Invented? ",
        Answer: 2013,
    },

    {
        Question: "When was VueJs Invented? ",
        Answer: 2014,
    },

    {
        Question: "Is Java the Best language ? ",
        Answer: "yes",
    },

].sort(() => Math.random() - 0.5);


const wrongMsg = [
    "Wrong Answer Mother Fucker !",
    "You are idiot wrong Answer !",
    "You are a stupid idiot !",
];



for (let i = 0; i < question.length; i++) {
     let questions = prompt(question[i].Question);
    if (questions == question[i].Answer) {
        alert("Correct!");
    }else{
        alert(wrongMsg[Math.floor(Math.random() * wrongMsg.length)]);
    }
}


function reload(){
    location.reload();
}