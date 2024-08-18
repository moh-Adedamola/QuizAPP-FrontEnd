const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

        {

            "question": "1. What is the default value of boolean in java",
            "choice1": "0",
            "choice2": "null",
            "choice3": "undefined",
            "choice4": "false",
            "answer": false
        },
        {
            "question": " 2. The number of primitive data types in java are:",
            "choice1": "six",
            "choice2": "seven",
            "choice3": "eight",
            "choice4": "nine",
            "answer": "eight"
        },
        {
            "question": "  3. Identify the return type of a method that does not return any value.",
            "choice1": "int",
            "choice2": "void",
            "choice3": "double",
            "choice4": "none",
            "answer": "void"
        },
        {
            "question": "  4. What is the extension of java code files?",
            "choice1": ".js",
            "choice2": ".txt",
            "choice3": ".class",
            "choice4": ".java",
            "answer": ".java"
        },
        {
            "question": "  5. Which one of the following is not an access modifier?",
            "choice1": "protected",
            "choice2": "void",
            "choice3": "public",
            "choice4": "private",
            "answer": "void"
        },
        {
            "question": "   6. Which of these are selection statements in Java?",
            "choice1": "if()",
            "choice2": "for()",
            "choice3": "continue",
            "choice4": "break",
            "answer": "if()"
        },
        {
            "question": "  7. Which of the following is used with the switch statement?",
            "choice1": "continue",
            "choice2": "exit",
            "choice3": "break",
            "choice4": "do",
            "answer": "break"
        },
        {
            "question": "   8. The while loop repeats a set of code while the condition is not met?",
            "choice1": "True",
            "choice2": "False",
            "choice3": "None of the above",
            "choice4": "All of the above",
            "answer": "False"
        },
        {
            "question": " 9. What is the variables declared in a class for the use of all methods of the class called?",
            "choice1": "Object",
            "choice2": "instance variables",
            "choice3": "reference variable",
            "choice4": "None",
            "answer": "instance variables"
        },
        {
            "question": "  10. Which of the following is not an OOP concept in Java?",
            "choice1": "polymorphism",
            "choice2": "inheritance",
            "choice3": "compilation",
            "choice4": "encapsulation",
            "answer": "compilation"
        },
        {
            "question": " 11. Which of these keywords can be used to prevent inheritance of a class?",
            "choice1": "super",
            "choice2": "False",
            "choice3": "constant",
            "choice4": "final",
            "answer": "final"
        },
        {
            "question": " 12. Which of these class relies upon its subclasses for complete implementation of its methods?",
            "choice1": "object class",
            "choice2": "abstract class",
            "choice3": "array list class",
            "choice4": "none of the above",
            "answer": "abstract class"
        },
        {
            "question": "  13. Which of this keyword must be used to inherit a class?",
            "choice1": "super",
            "choice2": "this",
            "choice3": "extent",
            "choice4": "extends",
            "answer": "extends"
        },
        {
            "question": "  14. Which of these is correct way of inheriting class A by class B?",
            "choice1": "public class B + public class A{}",
            "choice2": "public class B inherits public class A{}",
            "choice3": "public class B extends A{}",
            "choice4": "public class B extends public class A{}",
            "answer": "public class B extends A{}"
        },
        {
            "question": " 15. What is the process of defining a method in a subclass having same name & type signature as a method in its superclass?",
            "choice1": "method overloading",
            "choice2": "method overriding",
            "choice3": "method hiding",
            "choice4": "none of the  mentioned",
            "answer": "method overriding"
        },
        {
            "question": "  16. Which type of Programming does Python support?",
            "choice1": "object oriented programming",
            "choice2": "structured programming",
            "choice3": "functional programming",
            "choice4": "all of the above",
            "answer": "all of the above"
        },
        {
            "question": "   17. Which of the following is the correct extension of the Python file?",
            "choice1": ".python",
            "choice2": ".pl",
            "choice3": ".py",
            "choice4": ".p",
            "answer": ".py"
        },
        {
            "question": "  18.  Which keyword is used for function in Python language?",
            "choice1": "function",
            "choice2": "def",
            "choice3": "fun",
            "choice4": "define",
            "answer": "def"
        },
        {
            "question": "   19.  Which of the following character is used to give single-line comments in Python?",
            "choice1": "//",
            "choice2": "#",
            "choice3": "!",
            "choice4": "/*",
            "answer": "#"
        },
        {
            "question": " 20. Which of the following is not a core data type in Python programming?",
            "choice1": "tuples",
            "choice2": "lists",
            "choice3": "class",
            "choice4": "dictionary",
            "answer": "class"
        },
        {
            "question": "  21. Which of the following statements is used to create an empty set in Python?",
            "choice1": "()",
            "choice2": "[]",
            "choice3": "{}",
            "choice4": "set()",
            "answer": "set()"
        },
        {
            "question": "  22. To add a new element to a list we use which Python command?",
            "choice1": "list1.addEnd(5)",
            "choice2": "list1.addLast(5)",
            "choice3": "list1.append(5)",
            "choice4": "list1.add(5)",
            "answer": "list1.append(5)"
        },
        {
            "question": "  23. What are the two main types of functions in Python?",
            "choice1": "System function",
            "choice2": "Custom function",
            "choice3": "Built-in function & User defined function",
            "choice4": "User function",
            "answer": "Built-in function & User defined function"
        },
        {
            "question": "  24. Which of the following is a Python tuple?",
            "choice1": " {1, 2, 3}",
            "choice2": "{}",
            "choice3": "[1, 2, 3]",
            "choice4": "(1, 2, 3)",
            "answer": "(1, 2, 3)"
        },
        {
            "question": "  25. What is output of print(math.pow(3, 2))?",
            "choice1": "9.0",
            "choice2": "1 and 3",
            "choice3": "9",
            "choice4": "None of the mentioned",
            "answer": "9.0"
        },
        {
            "question": "  26. Which of the following best describes inheritance?",
            "choice1": "Ability of a class to derive members of another class as a part of its own definition",
            "choice2": "Means of bundling instance variables and methods in order to restrict access to certain class members",
            "choice3": "Focuses on variables and passing of variables to functions",
            "choice4": "Allows for implementation of elegant software that is well designed and easily modified",
            "answer": "Ability of a class to derive members of another class as a part of its own definition"
        },
        {
            "question": " 27.  Which of the following statements is wrong about inheritance?",
            "choice1": "Protected members of a class can be inherited",
            "choice2": "The inheriting class is called a subclass",
            "choice3": "Private members of a class can be inherited and accessed",
            "choice4": "Inheritance is one of the features of OOP",
            "answer": "Private members of a class can be inherited and accessed"
        },
        {
            "question": "  28. What does single-level inheritance mean?",
            "choice1": "A subclass derives from a class which in turn derives from another class",
            "choice2": "A single superclass inherits from multiple subclasses",
            "choice3": "A single subclass derives from a single superclass",
            "choice4": "Multiple base classes inherit a single derived class",
            "answer": "A single subclass derives from a single superclass"
        },
        {
            "question": " 29. Which of the following best describes polymorphism?",
            "choice1": "Ability of a class to derive members of another class as a part of its own definition",
            "choice2": "Means of bundling instance variables and methods in order to restrict access to certain class members",
            "choice3": "Focuses on variables and passing of variables to functions",
            "choice4": "Allows for objects of different types and behaviour to be treated as the same general type",
            "answer": "Allows for objects of different types and behaviour to be treated as the same general type"
        },
        {
            "question": " 30. What is JavaScript?",
            "choice1": "JavaScript is a scripting language used to make the website interactive",
            "choice2": "JavaScript is an assembly language used to make the website interactive",
            "choice3": "JavaScript is a compiled language used to make the website interactive",
            "choice4": "None of the mentioned",
            "answer": "JavaScript is a scripting language used to make the website interactive"
        },
        {
            "question": " 31.  Which of the following methods/operation does javascript use instead of == and !=?",
            "choice1": "JavaScript uses equalto()",
            "choice2": "JavaScript uses equals() and notequals() instead",
            "choice3": "JavaScript uses bitwise checking",
            "choice4": "JavaScript uses === and !== instead",
            "answer": "JavaScript uses === and !== instead"
        },
        {
            "question": " 32. Which of the following is not an error in JavaScript?",
            "choice1": "Missing of Bracket",
            "choice2": "Division by zero",
            "choice3": "Syntax error",
            "choice4": "none of the above",
            "answer": "Division by zero"
        },
        {
            "question": " 33. The “var” and “function” are __________",
            "choice1": "Keywords",
            "choice2": "Declaration statements",
            "choice3": "Data types",
            "choice4": "Prototypes",
            "answer": "Declaration statements"
        },
        {
            "question": " 34. The unordered collection of properties, each of which has a name and a value is called _________",
            "choice1": "String",
            "choice2": "Object",
            "choice3": "Serialized Object",
            "choice4": "Array",
            "answer": "Object"
        },
        {
            "question": "  35. The pop() method of the array does which of the following task?",
            "choice1": "decrements the total length by 1",
            "choice2": " increments the total length by 1",
            "choice3": "prints the first element but no effect on the length",
            "choice4": "updates the element",
            "answer": "decrements the total length by 1"
        },
        {
            "question": " 36. What is the purpose of a return statement in a function?",
            "choice1": "Returns the value and continues executing rest of the statements, if any",
            "choice2": " Returns the value and stops the program",
            "choice3": "Returns the value and stops executing the function",
            "choice4": "Stops executing the function and returns the value",
            "answer": "Stops executing the function and returns the value"
        },
        {
            "question": "  37. The function stops its execution when it encounters?",
            "choice1": "continue statement",
            "choice2": "break statement",
            "choice3": "goto statement",
            "choice4": "return statement",
            "answer": "return statement"
        },
        {
            "question": " 38.  Which of the following variables takes precedence over the others if the names are the same?",
            "choice1": "Global variable",
            "choice2": " The local variable",
            "choice3": "The two of the above",
            "choice4": "None of the above",
            "answer": "The local variable"
        },
        {
            "question": "  40. Which of the following type of a variable is volatile?",
            "choice1": "Mutable variable",
            "choice2": "Dynamic variable",
            "choice3": "Volatile variable",
            "choice4": "Immutable variable",
            "answer": "Mutable variable"
        },
        {
            "question": "  41.  In JavaScript the x===y statement implies that:?",
            "choice1": "Both x and y are equal in value, type and reference address as well.",
            "choice2": " Both  x and y are equal in value only.",
            "choice3": "Both are equal in the value and data type.",
            "choice4": "Both are not same at all.",
            "answer": "Both are equal in the value and data type."
        },
        {
            "question": "  42. What are the three important manipulations for a loop on a loop variable?",
            "choice1": "Updation, Incrementation, Initialization",
            "choice2": " Initialization, Testing, Incrementation",
            "choice3": "Testing, Updation, Testing",
            "choice4": "Initialization, Testing, Updation",
            "answer": "Initialization, Testing, Updation"
        },
        {
            "question": "  43. Which one of the following method or operator is used for identification of the array?",
            "choice1": "Typeof",
            "choice2": " ==",
            "choice3": "===",
            "choice4": "isarrayType()",
            "answer": "isarrayType()"
        },
        {
            "question": " 44.  For which purpose the array map() methods is used ?",
            "choice1": "It used for mapping the elements of another array into itself.",
            "choice2": " It passes each data-item of the array and returns the necessary mapped elements.",
            "choice3": "It passes the data-items of an array into another array.",
            "choice4": "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.",
            "answer": "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function."
        },
        {
            "question": "  45. Which HTML element is used to put the JavaScript code?",
            "choice1": "<javascript>",
            "choice2": "<js>",
            "choice3": "<scripting>",
            "choice4": "<script>",
            "answer": "<script>"
        }



];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();