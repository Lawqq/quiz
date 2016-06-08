// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Principally Principles Quiz - Your questions!",
        "main":    "<p>Now that you have done your training, Lets test your knowledge</p>",
        "results": "<h5>Learn More</h5><p>Feedback text.</p>",
        "level1":  "Competent Architect",
        "level2":  "Junior Architect",
        "level3":  "Structural Engineer",
        "level4":  "Town Planner",
        "level5":  "City Janitor" 
    },
    "questions": [
        { 
            "q": "Sue Gale states that the primary guide for Lilly IT is the DRA, which stands for?",
            "a": [
                {"option": "Developmental Reading Assessment",     "correct": false},
                {"option": "Data Related Anomaly",                 "correct": false},
                {"option": "Digital Reference Architecture",       "correct": true},
                {"option": "DR. Dra, noted IT Architect",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>DRA = Digital Reference Architecture</p>",
            "incorrect": "<p><span>Incorrect</span>" // no comma here
        },
        { 
            "q": "Sue demonstrated she's up to the task of sponsoring the DRA by wearing a:",
            "a": [
                {"option": "Boxing Gloves",             "correct": false},
                {"option": "Tweed Jacket",              "correct": true},
                {"option": "A funny hat",               "correct": false},
                {"option": "Snowshoes",                 "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm.</span> You want to reconsider your options.</p>" // no comma here
        },
           { 
            "q": "Kevin Shingleton notes that the DRA is based upon:",
            "a": [
                {"option": "Several 30-page white papers", "correct": false},
                {"option": "Our Lilly IT Architect",              "correct": true},
                {"option": "An unremarkable Dr. Who episode",               "correct": false},
                {"option": "The work of Dr. Dra, noted IT Architect",                 "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm.</span></p>" // no comma here
        },
         { 
            "q": "James Curry quotes this famous author when reflecting on the importance of information Principles and in particular, your role as a contributor:",
            "a": [
                {"option": "Several 30-page white papers", "correct": false},
                {"option": "Our Lilly IT Architect",              "correct": true},
                {"option": "An unremarkable Dr. Who episode",               "correct": false},
                {"option": "The work of Dr. Dra, noted IT Architect",                 "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm.</span></p>" // no comma here
        },
    ]
};
