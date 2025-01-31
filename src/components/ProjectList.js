export const PROJECTS = [
    {
        title: "Youmu Legacy",
        tags: "Javascript, Git, HTML",
        image:"./YoumuLegacy.png",
        link: "https://github.com/BrianNguyen636/YoumuLegacy",
        // body: "A web game I made for fun outside of school. Features extensive Object Oriented design such as Abstraction and Inheritance for increased code usability."
        // + " Fully playable in the browser, with either keyboard or controller"
        body:[
            'Developed a web-game with HTML Javascript integration as a personal passion project.',
            'Designed highly reusable code with an object-oriented class hierarchy',
            'Supports both controller and keyboard controls'
        ]
    },
    {
        title: 'Company Management Board',
        tags: "Angular, Typescript, HTML, CSS, Java, Spring, Github",
        image:"./company.png",
        link:"https://github.com/BrianNguyen636/CompanyManagement",
        body:[
            'Created a webpage application designed to allow users to manage company activities such as announcements, teams, projects and users.',
            'Generated all information shown in the web page dynamically using information given from the database connection.',
            'Utilized popup dialogs with form validation in order to gather information from the user to create and store new information on the database.',
            'Implemented admin and worker views for separate functionality based on the position of the user.'
        ]
    },
    {
        title: "Dashers App",
        tags: "React, Express, REST, SQL, Javascript, Github",
        image:"./Dashers.png",
        link: "https://github.com/BrianNguyen636/dashers-service",
        // body: "Created a functional web application similar to online food delivery services in a 3 person group. "+
        // "I handled the entire back-end REST api, which relayed data to and from the SQL database."
        body:[
            'Collaborated on a food-ordering web application in a 3 person team.',
            'Designed and maintained SQL database to store customer and order information.',
            'Implemented full RESTful back-end that carries on operations to the SQL database.'
            
        ]
    },
    {
        title: "Whos Who",
        tags: "Angular, Typescript, HTML, CSS, Github",
        image:"./WhosWho.png",
        link: "https://github.com/BrianNguyen636/WhosWho",
        // body: "Created a functional web application similar to online food delivery services in a 3 person group. "+
        // "I handled the entire back-end REST api, which relayed data to and from the SQL database."
        body:[
            'Programmed a music-guessing game utilizing Spotify’s API routes in a 2-person team',
            'Implemented in-browser music play with Howler.js with auto-play, volume adjustment, and pause/play functionality',
            'Utilized browser local storage to save user scores in between sessions',
        ]
    },
    {
        title: "TLQ Data Pipeline",
        tags: "AWS, SQL, Python, Java",
        image:"./TLQ.png",
        link: "https://github.com/BrianNguyen636/TLQ_Pipeline/tree/main/ProjectCode",
        // body: "Transform, Load, Query pipeline hosted on AWS using Lambda functions to manipulate and interact with a hosted SQL database." +
        // " Transforms, Loads, and Queries 5000 rows of data in around 1 minute using a mixed service composition of Python, Java, x86 and ARM."
        body:[
            'Programmed a data pipeline in Java and Python to manipulate and store large sets of data.',
            'Utilized Amazon Web Services (AWS) to host the pipeline as Lambda functions.',
            'Analyzed cost effectiveness for different language and architecture compositions.'
        ]
    },
    {
        title: "Fast Food Service",
        tags: "React, SQL, Javascript, Github",
        image:"./FastFood.jpg",
        link: "https://github.com/OtherAndrew/fast-food-database-project",
        // body: "Developed a working GUI front-end to a SQL database scheme in a pair programming environment. " +
        // "Mainly created the React front-end, with functionality to filter menu, edit order information, place orders and view order history."
        body:[
            'Programmed a full-stack web application mimicking the functionality of ordering fast food.',
            'Designed a SQL database structure to store order data.',
            'Developed REST functionality to interact with the back-end database from the web application.'
        ]
    }

]