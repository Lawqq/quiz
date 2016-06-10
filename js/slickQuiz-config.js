// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Whats the Why",
        "main":    "<p>So you have done the training now let's test your knowledge!</p>",
        "results": "<h5>Learn More</h5><p>Assuming this is feedback text.</p>",
        "level1":  "Competent Architect",
        "level2":  "Junior Architect",
        "level3":  "Structural Engineer",
        "level4":  "Town Planner",
        "level5":  "City Janitor" // no comma here
    },
    "questions": [
        { // Question 1 
            "q": "In the Rich History video Rich refers to",
            "a": [
                {"option": "Dick Wood",      "correct": false},
                {"option": "Rich Carter",     "correct": false},
                {"option": "Rich Grogut",      "correct": false},
                {"option": "The significant contributions Lilly IT has made over the last three decades",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Lilly has made a significant contribution over the last three decades</p>",
            "incorrect": "<p><span>Uhh no.</span> That's not entirely correct! </p>" // no comma here
        },
        { // Question 2 
            "q": "How many Historians shared their recollection of the past?",
            "a": [
                {"option": "3",               "correct": false},
                {"option": "2",   "correct": false},
                {"option": "5",               "correct": true},
                {"option": "8", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Good job!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
         { // Question 3
            "q": "This Learning Experience is expected to be different, fun and help you better understand the IT Strategy and the role you and your team can have in moving it forward",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You really get it</p>",
            "incorrect": "<p><span>ERRRR!</span> Nope. Try again</p>" // no comma here
        }, 
        { // Question 4
            "q": "A lesson from Kodak that may apply to Lilly IT is:",
            "a": [
                {"option": "Recognizing the need for change is one thing but choosing the right response is another",    "correct": true},
                {"option": "Stay out of the film business ",     "correct": false},
                {"option": "It's a different industry how could we learn from that? ",      "correct": false},
                {"option": "Leadership must always be on the 12th Floor",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. We need to recognise change AND choose the right response</p>" // no comma here
        },
        { // Question 5
            "q": "Over time this learning experience will be created through",
            "a": [
                {"option": "Highly paid consultancy",               "correct": false},
                {"option": "A feisty band of IT enthusiasts",   "correct": true},
                {"option": "a Madison",               "correct": false},
                {"option": "contributions from our fellow Lilly IT Associates", "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Great job.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 6
            "q": "True or False: Lilly IT's World Class performance provides a terrific platform from which to build the Modern IT Ecosystem",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Very good</p>",
            "incorrect": "<p><span>ERRRR!</span> Not correct</p>" // no comma here
        }, 
        { // Question 7
            "q": "True or False: The Healthcare Industry is poised to experience technical disruption",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Very good</p>",
            "incorrect": "<p><span>ERRRR!</span> Not correct</p>" // no comma here
        }, 
        { // Question 5
            "q": "What is NOT a new Lilly business model that IT is contributing to",
            "a": [
                {"option": "New Commerical Model",       "correct": false},
                {"option": "Services Beyond the Pill",   "correct": false},
                {"option": "Patient Support Programs",   "correct": false},
                {"option": "Samples Provided by the Salesforce", "correct": true}, 
                {"option": "Next Generation Development", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Well done you are correct</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 5
            "q": "According to Journey to the Modern IT Ecosystem how many speeds are needed for IT?",
            "a": [
                {"option": "One fast fast fast all the time ",               "correct": false},
                {"option": "27 like a high performance bicycle ",   "correct": false},
                {"option": "Six because we're just like a high performance automobile ",               "correct": false},
                {"option": "representing that we're a bimodal IT organization. One reliable and efficient and another innovative and agile", "correct": true} // no comma here
             ],
            "correct": "<p><span>Nice!</span> Well done you are correct</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        }
    ]
};
