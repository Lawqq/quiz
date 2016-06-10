// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "User-Centric Approach Quiz",
        "main":    "<p>Think you know your stuff? Let's find out with this knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Feedback Text</p>",
        "level1":  "Competent Architect",
        "level2":  "Junior Architect",
        "level3":  "Structural Engineer",
        "level4":  "Town Planner",
        "level5":  "City Janitor" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Taking a User-Centric Approach means ",
            "a": [
                {"option": "creating a connected experience that is simple and valuable to others ",      "correct": true},
                {"option": "doing whatever the customer wants ",     "correct": false},
                {"option": "flying in ever-tightening concentric circles around the user before landing ",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Nope. Try again!" // no comma here
        },
           { // Question 2
            "q": "We should adopt a more User-Centric Approach because",
            "a": [
                {"option": "the boss told me to",      "correct": false},
                {"option": "it is one of the Lilly Values  ",     "correct": false},
                {"option": "it is one of the customer experience principles ",      "correct": false},
                {"option": "Lilly IT solutions must not only deliver a solid technical outcome, but also be designed around the full user experience  ",      "correct": true}
            ],
            "correct": "<p><span>Awesome!</span> You've clearly been paying attention!</p>",
            "incorrect": "<p><span>Uhh no.</span> No, that's not quite there." // no comma here
        },
        
          { // Question 3
            "q": "Lilly IT's 'design style' is ",
            "a": [
                {"option": "Ethnicity-centered Design",      "correct": false},
                {"option": "Ergonomic-centered Design ",     "correct": false},
                {"option": "Economy-centered Design",      "correct": false},
                {"option": "Empathy-centered Design",      "correct": true}
            ],
            "correct": "<p><span>Nice!</span>Awesome work!</p>",
            "incorrect": "<p><span>Uhh no.</span> Think more about feelings!" // no comma here
        },
            { // Question 4
            "q": "The thinking behind Empathy-centered Design is very consistent with",
            "a": [
                {"option": "what Apple and IBM do",      "correct": false},
                {"option": "the Manifesto of Transdisciplinarity",     "correct": false},
                {"option": "the Lilly Promise and the Lilly Customer Experience Principles",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> That's not the right answer" // no comma here
        },
               { // Question 5
            "q": "Which is NOT a principle of Empathy-centered Design",
            "a": [
                {"option": "Understand what users want and feel, then design to that",      "correct": false},
                {"option": "Time is important to everyone",     "correct": false},
                {"option": "IT Solutions are good. Adoption is better. Advocacy is best.",      "correct": false},
                {"option": "The faster you test, the faster you learn. ",      "correct": false},
                {"option": "IT Solutions should go where our users are ",      "correct": false},
                {"option": "When text is hard to read because of a distracting background, people pay more attention to it",      "correct": true}
            ],
            "correct": "<p><span>Winning!</span> Good job! Keep it up!</p>",
            "incorrect": "<p><span>Uhh no.</span> Remember, what is NOT a principle of empathy-centred design." // no comma here
        },
               { // Question 6
            "q": "As a Lilly IT professional, a User-Centric Approach includes ",
            "a": [
                {"option": "Assuming you already know what a typical user wants",      "correct": false},
                {"option": "Always allowing users to pick their favorite colors in the interface ",     "correct": false},
                {"option": "Involving users early and often throughout the project, emphasizing the design phase",      "correct": true}
            ],
            "correct": "<p><span>Superstar!</span> That's the right answer!</p>",
            "incorrect": "<p><span>Uhh no.</span> Nope. Try again!" // no comma here
        },
               { // Question 7
            "q": "Users are ADVOCATES for an IT solution when they...",
            "a": [
                {"option": "Recommend it to others ",      "correct": true},
                {"option": "Log in and actually use the provided solution ",     "correct": false},
                {"option": "Agree that the solution meets their technical needs when asked  ",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Not quite!" // no comma here
        },
               { // Question 8
            "q": "Practicing a more User-Centric Approach",
            "a": [
                {"option": "should be easy for any IT professional ",      "correct": false},
                {"option": "will take time and practice",     "correct": true},
                {"option": "is no different from what we've always done before ",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Nope. Try again! This takes practice" // no comma here
        },
               { // Question 9
            "q": "Empathy-centered Design is aligned with the promise that 'Lilly unites caring with discovery to make life better for people around the world.'' We believe our customers should be able to feel all off the following EXCEPT ",
            "a": [
                {"option": "genuinely cared for ",      "correct": false},
                {"option": "able to trust us ",     "correct": false},
                {"option": "we are easy to interact with ",      "correct": false},
                {"option": "that our IT solutions give them super-powers ",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span> Good job! Though it would be nice if we could give people super-powers!</p>",
            "incorrect": "<p><span>Uhh no.</span> Nope. Try again!" // no comma here
        },
             { // Question 10
            "q": "The hallmark of great companies has always been",
            "a": [
                {"option": "their ability to provide an exceptional customer experience ",      "correct": true},
                {"option": "the art in their corporate headquarters ",     "correct": false},
                {"option": "their CEO's hair style ",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Really? You really got that one wrong?" // no comma here
        }
    ]
};
