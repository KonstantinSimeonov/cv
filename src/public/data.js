export default {
    'personalInfo': {
        'names': {
            'first': 'Konstantin',
            'middle': 'Simeonov',
            'last': 'Simeonov'
        },
        'title': 'Full-stack JavaScript developer who loves to dance',
        'photoUrl': require('assets/photo.jpg'),
        'contacts': [
            {
                'content': '+359 885 032 502',
                'iconUrl': require('assets/phone-icon.png'),
                'type': 'phone'
            },
            {
                'content': 'kon.simeonov@protonmail.com',
                'iconUrl': require('assets/email-icon.png'),
                'type': 'url',
                'urlType': 'email'
            },
            {
                'content': 'Sofia, Bulgaria',
                'iconUrl': require('assets/address-icon.png'),
                'type': 'address'
            },
            {
                'content': 'https://github.com/KonstantinSimeonov',
                'iconUrl': require('assets/github-icon.png'),
                'type': 'url'
            }
        ],
        'aboutMe': 'I\'m a 22 years old JavaScript developer who loves coding and dancing. I also enjoy reading, playing 8ball, meeting new people and learning new things. I\'m currently looking for a job that will help me take my JavaScript skills and programming knowledge to the next level.'
    },
    'workExperience': [
        {
            'from': 'Dec 2015',
            'to': 'Jan 2017',
            'jobTitle': 'Technical Trainer',
            'location': 'Telerik Academy',
            'descriptions': [
                'Delivered lectures that reached more than 2000 students and helped them create their first web applications and dive into web development with C#, HTML, CSS and JavaScript',
                'Experienced firsthand how important keeping deadlines is, became better at taking responsibilities and honed organizational skills'
            ]
        }
    ],
    'languages': [
        {
            'languageName': 'English',
            'level': 'Proficient'
        },
        {
            'languageName': 'German',
            'level': 'Advanced'
        }
    ],
    'educations': [
        {
            'educationTitle': 'Web Development',
            'location': 'Telerik Academy',
            'from': 'Jan 2015',
            'to': 'Mar 2016',
            'certificateUrl': 'https://telerikacademy.com/Certificates/View/1980/6b7b6f44',
            'linkText': 'telerikacademy.com/1980/6b7b6f44'
        },
        {
            'educationTitle': 'Bachelor in Software Engineering',
            'location': 'FMI, Sofia University \'St. Kliment Ohridski\'',
            'from': 'Oct 2013',
            'to': 'ongoing'
        }
    ],
    'projects': [
        {
            'title': 'fluent-schemer',
            'description': 'Small validation library in JavaScript for fluent and declarative validation',
            'links': [
                { 'url': 'https://www.npmjs.com/package/fluent-schemer', 'tooltip': 'npm homepage' }
            ]
        },
        {
            'title': 'horsebin',
            'description': 'Web platform for fast & easy code snippet sharing',
            'links': [
                { 'url': 'https://horsebin.herokuapp.com/pastes/create', 'tooltip': 'deployed project' }
            ]
        }
    ],
    'strengths': [
        {
            'name': 'People person',
            'description': 'Dancing, working on group projects with fellow students, teaching programming and being part of the trainers team @ Telerik Academy, made team work as natural as breathing to me.',
            'iconUrl': require('assets/learning-icon.png')
        },
        {
            'name': 'Passionate learner',
            'description': 'No matter if it comes to teaching or dancing, learning new things,  skills and concepts has always been a great experience to me.',
            'iconUrl': require('assets/heart-icon.png')
        }
    ],
    'skills': [
        {
            'name': 'Algorithms',
            'description': 'The time spent at university and Telerik Academy really got me interested into data structures and algorithms. I understand and can implement most basic and intermediate data structures, such as <strong>arrays, lists, stacks, queues, maps, some trees, graphs and heaps</strong>. I\'m familiar with <strong>sorting algorithms (mergesort, quicksort), breadth- and depth-first search, topological sorting, rolling hash, dynammic programming</strong> problems like the knapsack problem and others.',
            'priority': 6
        },
        {
            'name': 'HTML5, CSS, JS',
            'description': 'Using comfortably HTML5, CSS and JavaScript to build dynamic web front-end application is a skill that I developed during my time at Telerik Academy, first as a student, later as a technical trainer, which included creating small single page applications and leading presentations, lectures and workshops about the <strong>DOM API, DOM manipulations, jQuery, DOM performance, building games using HTML5 canvas and developing single page applications.</strong>',
            'priority': 2
        },
        {
            'name': 'NodeJS',
            'description': 'NodeJS is one of the main reasons I love doing JavaScript! I\'ve passed a course at Telerik Academy and I\'ve been using it for many different purposes ever since - <strong>working with files, web crawling, creating RESTful APIs or web applications that do server-side rendering, doing small scripts to automate tasks</strong>. In the process I also became familiar with <strong>asynchronous programming</strong>, as well as parts of the JavaScript ecosystem such as <strong>npm, bower, testing, build process, continuos integration and deployment</strong> The thing I love most about Node is that it promotes simplicity and ease of development, but without forcing the developer to sacrifice code quality or performance.',
            'priority': 1
        },
        {
            'name': 'Maths',
            'description': 'I graduated from high school with solid knowledge in the area of <strong>algebra, geometry and stereometry</strong>. I further developed my skills in that area at university, where I studied <strong>linear algebra (vectors, matrices, polynomials), calculus (derivatives, functions, limits, integrals) and discrete mathematics (sets, graphs, regular expressions, combinatorics)</strong>.'
        },
        {
            'name': 'Communication',
            'description': 'My work as a technical trainer required cooperation and communication with a wide range of different people - students, colleagues, managers, children and parents - this helped me become a <strong>good listener</strong>, taught me to <strong>explain and express my ideas clear and concise</strong>. My contacts with parents and students also taught me <strong>how to reduce the tension in a conversation</strong>, how to <strong>look for and address the concerns of the other side</strong> and how to <strong>give constructive feedback</strong> without offending others.',
            'priority': 4
        },
        {
            'name': 'Shell scripting',
            'description': 'Ever since I graduated from Telerik Academy, I\'ve worked and developed under <strong>Fedora linux distribution</strong> on my personal laptop and I\'ve been using <strong>bash</strong> features, such as loops, pipes, streams and command line utilities such as grep, cat, rsync and other to automate and simplify tasks ever since. I\'m by no means an expert, but the increase in productivity which bash brings motivates me to keep learning more about bash and linux.'
        },
        {
            'name': 'C#, ASP.NET',
            'description': 'During the courses I\'ve passed at Telerik Academy and later in my work as a trainer, I developed web applications using <strong>ASP.NET (MVC, Webforms and Web API) with C#</strong> - as a part of the education program, later as demos in lectures and while maintaining and extending www.telerikacademy.com. I\'ve used C# to create <strong>RESTful web services, data service layers</strong> that decouple the data layer of an application, write <strong>unit tests</strong> and implement <strong>dependency inversion</strong> and <strong>dependency injection</strong> in back-end web applications.'
        },
        {
            'name': 'MongoDB',
            'description': '',
            'code': 'db.my_skills.find({\n    $and: [\n        { name: { $regex: /^mongo\\s+db$/i } },\n        { level: { $gt: \'basic\', $lte: \'intermediate\' } },\n        { acquiredBy: {\n               $in: [\n                    \'MEAN stack course at Telerik Academy\',\n                 \'working on my own web projects\',\n                   \'using it as part of NodeJS presentations I\'ve delivered\'\n               ]\n           }\n        }\n    ] \n});',
            'priority': 7
        },
        {
            'name': 'Organization',
            'description': 'Part of my job @ Telerik Academy was the organization of exams, lectures and other events. <strong>To succeed in those tasks, I had to manage my and other people\'s time, set deadlines for activities, synchronize and oversee tasks, approach and negotiate with different people at different positions</strong>, like colleagues, students and parents. All of that developed and honed my skills at organizing events, planning and managing tasks and processes.',
            'priority': 5
        },
        {
            'name': 'git',
            'description': 'I started using <strong>git</strong> since day one of doing programming - many of the materials I learned from and all the projects I contributed to were either hosted on GitHub, BitBucket or GitLab, which had me using git while studying and working. This in turn helped me understand the concept of <strong>distributed source control</strong> and get comfortable with <strong>branches, merging, committing, pulling, checking out git repositories at different commits, rewriting commits, looking at diffs and other great git features</strong>.'
        },
        {
            'name': 'Creativity',
            'description': '<strong>Creation of exam and homework tasks, thinking of clear and concise ways of explaining programming concepts, creating programming demos, writing code live during presentations and working around legacy systems were a huge part of being a good technical trainer</strong> - all of those tasks required good problem solving skills, creativity, ability to lay out plans, while also keeping in mind constraints and problems. Such tasks helped me improve those skills immensely during my time at Telerik Academy.'
        },
        {
            'name': 'Dancing',
            'description': 'Starting from 9-th grade, I went to dancing courses for 6 years - there I danced waltz, tango, cha-cha, samba, rumba, jive and other dances. Together with programming, dancing is one of the things that I am most passionate about :)'
        },
        {
            'name': 'Object-oriented programming',
            'description': 'In the course of studying and working with <strong>C#, ASP.NET and JavaScript</strong> I had contact with diverse object-oriented features, such as class and prototypal inheritance, interfacing, object composition, abstraction and polymorphism, encapsulation. Also, while learning and using object-oriented programming, I became familiar with <strong>design patterns</strong> such as decorators, chain of responsibility, command pattern, composite objects and mediators. Those techniques helped me write more <strong>maintainable, flexible, testable and reusable code</strong>.',
            'priority': 9
        }
    ]
};