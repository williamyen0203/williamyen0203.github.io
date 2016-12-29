angular.module('website-app', [])

.controller('website-ctrl', function($scope, $sce) {
    $scope.updated = new Date(2016, 11, 28);

    $scope.skills = {
        'java': {
            name: "Java",
            image: "images/icons/java-icon.png"
        },
        'c#': {
            name: "C#",
            image: "images/icons/cs-icon.png"
        },
		'mvc': {
			name: "ASP.NET MVC Framework",
			image: "images/icons/mvc-icon.png"
		},
        'html': {
            name: "HTML",
            image: "images/icons/html-icon.png"
        },
        'css': {
            name: "CSS",
            image: "images/icons/css-icon.png"
        },
		'python': {
			name: "Python",
			image: "images/icons/python-icon.png"
		},
        'javascript': {
            name: "JavaScript",
            image: "images/icons/javascript-icon.png"
        },
        'jquery': {
            name: "jQuery",
            image: "images/icons/jquery-icon.png"
        },
        'bootstrap': {
            name: "Bootstrap",
            image: "images/icons/bootstrap-icon.png"
        },
        'angular': {
			name: "AngularJS",
			image: "images/icons/angular-icon.png"
        },
        'ruby': {
            name: "Ruby",
            image: "images/icons/ruby-icon.png"
        },
        'rails': {
            name: "Ruby on Rails",
            image: "images/icons/rails-icon.png"
        },
        'android': {
            name: "Android",
            image: "images/icons/android-icon.png"
        },
        'photoshop': {
            name: "Photoshop",
            image: "images/icons/photoshop-icon.png"
        },
        'illustrator': {
            name: "Illustrator",
            image: "images/icons/illustrator-icon.png"
        },
        'indesign': {
            name: "InDesign",
            image: "images/icons/indesign-icon.png"
        }
    };

    $scope.projects = [{
            name: "Flip 'N' Check",
            id: "flip-n-check",
            image: "images/flip-n-check/flip-n-check.png",
            imageMore: "images/flip-n-check/flip-n-check.png",
            link: "http://www.flipncheck.com/",
            description: $sce.trustAsHtml("Flip 'N' Check is a dry erase activity book for children developed as part of the Teen Entrepreneur Bootcamp program. The program is designed to teach students about entrepreneurship, the process of bringing a product into the market, and product development.<br><br>Our team was given this product by <a href=\"http://www.howardwexlertoys.com/\">Dr. Howard Wexler</a>, inventor of Connect 4, and we have brought the original Flip 'N' Check as well as the Mad Libs expansion to market under the supervision of Pam Chmiel. <a href=\"http://www.flipncheck.com/about-1.html\">Click here to learn more.</a><br><br>I was tasked with illustrating puzzles for the new Mad Libs expansion, Mad Libs edition cover design, website design, and promotional material, and posters."),
            skills: ['html', 'css', 'photoshop', 'illustrator', 'indesign']
        },
        // {
        //   name: "Neuranode",
        //   id: "neuranode",
        //   image: "images/neuranode/neuranode.png",
        //   imageMore: "images/neuranode/more.png",
        //   link: "http://www.neuranode.x10host.com/",
        //   description: $sce.trustAsHtml("<h4>Coming soon!</h4> The Neuranode website is a landing page to introduce users to the Neuranode app, show planned features, and link the user to the app download.<br>  <br> More info coming soon!"),
        //   skills: ["html", "css", "javascript", "jquery", "photoshop", "indesign"]
        // },
        // {
        //   name: "Neuranode App",
        //   id: "neuranode-app",
        //   image: "images/neuranode-app/neuranode-app.png",
        //   imageMore: "images/neuranode-app/more.png",
        //   link: null,
        //   description: $sce.trustAsHtml("<h4>Coming soon!</h4> Neuranode is an Android application that takes in a user's quiz answers, analyzes it, and provides a visual representation of the user's personality based on the Myers Briggs personality test. This project is a collaboration with Daniel Guan, George Bekheet, and Orsen Cheng (Northeastern University). <br> <br> <h5>Planned features:</h5> - Social networking with other users <br> - Tracking your changes over time <br> <br> More info coming soon!"),
        //   skills: ["java", "photoshop", "android"]
        // },
        {
            name: "Contract Bridge",
            id: "contract-bridge",
            image: "images/contract-bridge/contract-bridge.png",
            imageMore: "images/contract-bridge/more.png",
            link: "https://github.com/williamyen0203/contract-bridge",
            description: $sce.trustAsHtml("This is my CSE114 (Object Oriented Programming) final project. <br> <br> Contract Bridge is played with 4 players and 2 teams with teammates seated across from each other. Each round, each player plays one card of the same suit as the leading suit. The player that plays the highest card of the starting suit leads the next round of cards. If you do you not have a card matching the leading suit, any other card may be played. Whenever you play the highest card, you gain a point. When all cards are played, the team with the highest total points wins. <br> <br> This application's GUI was made with JavaFX."),
            skills: ["java", "photoshop"]
        }, {
            name: "Website",
            id: "website",
            image: "images/website/website.png",
            imageMore: "images/website/website.png",
            link: "http://williamyen0203.github.io/",
            description: $sce.trustAsHtml("You're already here! <br> <br> This is my personal website created from scratch using HTML, CSS, Javascript, jQuery, AngularJS, and Twitter Bootstrap for a grid layout. It features a responsive design (check out my site on a mobile device).<br><br>More content, projects, and information to come!"),
            skills: ["html", "css", "javascript", "jquery", "angular", "bootstrap", "photoshop"]
        }, {
            name: "Sam Simulator",
            id: "sam-simulator",
            image: "images/sam-simulator/sam-simulator.png",
            imageMore: "images/sam-simulator/more.png",
            link: "http://sam-simulator.herokuapp.com/",
            description: $sce.trustAsHtml("Sam Simulator is a web application built with Ruby on Rails and dedicated to my friend, Sam Chen. This was made to experiment with Ruby, Ruby on Rails, and CSS/jQuery animations.<br><br>Project is hosted on Heroku.<br><br>No harm intended."),
            skills: ["html", "css", "javascript", "jquery", "ruby", "rails", "photoshop"]
        }, {
            name: "Webpage Maker",
            id: "webpage-maker",
            image: "images/webpage-maker/webpage-maker.png",
            imageMore: "images/webpage-maker/more.png",
            link: null,
            description: $sce.trustAsHtml("Webpage Maker provides a user-friendly interface for creating webpages with buttons to create HTML tags, a CSS editor, and live updating so that you can see changes as you work. <br> <br> This application's GUI was made with JavaFX."),
            skills: ["java", "html", "css"]
        }, {
            name: "Pose Maker",
            id: "pose-maker",
            image: "images/pose-maker/pose-maker.png",
            imageMore: "images/pose-maker/more.png",
            link: null,
            description: $sce.trustAsHtml("Pose Maker is a Java program that allows the user to create images using simples shapes and intuitive controls. <br> <br> <b>Features:</b><br>- Selecting, moving, and removing shapes <br> - Changing canvas' background color <br> - Changing shape properties, such as fill color, outline color, and outline thickness <br> - Saving and loading PoseMaker files <br> - Taking and saving snapshots of current image <br> <br> This application's GUI was made with JavaFX."),
            skills: ["java"]
        }, {
            name: "Packet Simulation",
            id: "packet-simulation",
            image: "images/packet-simulation/packet-simulation.png",
            imageMore: "images/packet-simulation/more.png",
            link: "http://williamyen0203.github.io/packet-simulation/",
            description: $sce.trustAsHtml("The Packet Simulation web application simulates a packet switching element that has a number of inputs that send packets to a number of outputs. If there are not enough outputs to service all the incoming packets, packets are dropped. This program runs simulations of a packet switching element with packets that arrive at 51 different probabilities, from 0% to 100% in steps of 2%. <br> The graph takes in a user's input and graphs the number of dropped packets and the number of busy outputs. <br> <br> The graph was made use <a href=\"http://www.chartjs.org/\">Chart.js</a>."),
            skills: ["java"]
        }, {
            name: "queue-simulation",
            id: "queue-simulation",
            image: "images/queue-simulation/queue-simulation.png",
            imageMore: "images/queue-simulation/more.png",
            link: "http://williamyen0203.github.io/packet-queue-simulation/",
            description: $sce.trustAsHtml("The Packet Queue Simulation web application simulates a queue with a capacity of 5. Packets arrive and depart with a given probability. This program runs simulations of a packet queue with packets that arrive at 51 different probabilities, p, from 0% to 100% in steps of 2%. <br> This simulation takes in the user's input and records the average throughput and average delay at each p value. <br> <br> The graph was made use <a href=\"http://www.chartjs.org/\">Chart.js</a>."),
            skills: ["html", "css", "javascript", "jquery", "bootstrap"]
        }, {
            name: "Web Document Viewer",
            id: "web-document-viewer",
            image: "images/web-document-viewer/web-document-viewer.png",
            imageMore: "images/web-document-viewer/more.png",
            link: null,
            description: $sce.trustAsHtml("More info coming soon."),
            skills: ["c#", "mvc", "html", "css", "javascript"]
        }, {
            name: "Language Tagline Generator",
            id: "language-tagline-generator",
            image: "images/language-tagline-generator/language-tagline-generator.png",
            imageMore: "images/language-tagline-generator/more.png",
            link: null,
            description: $sce.trustAsHtml("More info coming soon."),
            skills: ["c#", "mvc", "html", "css", "javascript", "angular"]
        }, {
            name: "XML Upload Portal",
            id: "xml-upload-portal",
            image: "images/xml-upload-portal/xml-upload-portal.png",
            imageMore: "images/xml-upload-portal/more.png",
            link: null,
            description: $sce.trustAsHtml("More info coming soon."),
            skills: ["c#", "mvc", "html", "css", "javascript", "angular"]
        }, {
            name: "Welltheos",
            id: "welltheos",
            image: "images/welltheos/welltheos.png",
            imageMore: "images/welltheos/more.png",
            link: "https://welltheos.com/wbe",
            description: $sce.trustAsHtml("More info coming soon."),
            skills: ["c#", "mvc", "html", "css", "javascript"]
        }, {
            name: "Puzzle Generator",
            id: "puzz-gen",
            image: "images/puzz-gen/puzz-gen.png",
            imageMore: "images/puzz-gen/more.png",
            link: "https://williamyen0203.github.io/puzz-gen/",
            description: $sce.trustAsHtml("Puzzle Generator is a web application created to more easily and quickly generate puzzles for <a href=\"http://www.flipncheck.com/about-1.html\">Flip 'N' Check</a> activity books.<br><br><b>Features</b><br>- Many customizable options<br>- Multiple output file types<br>- Ability to save puzzles<br>- Automatically generate back page of Mad Libs puzzle<br><br><b>JavaScript libraries used:</b><br>- <a href=\"https://github.com/tsayen/dom-to-image\">dom-to-image</a><br>- <a href=\"https://github.com/MrRio/jsPDF\">jsPDF</a>"),
            skills: ["html", "css", "javascript", "jquery", "angular", "bootstrap"]
        }, {
            name: "",
            id: "",
            image: "",
            imageMore: "",
            link: "",
            description: $sce.trustAsHtml(""),
            skills: ["java"]
        }, {
            name: "",
            id: "",
            image: "",
            imageMore: "",
            link: "",
            description: $sce.trustAsHtml(""),
            skills: ["java"]
        }, {
            name: "",
            id: "",
            image: "",
            imageMore: "",
            link: "",
            description: $sce.trustAsHtml(""),
            skills: ["java"]
        }
    ]
})

.directive('skill', function() {
    return {
        restrict: 'E',
        scope: {
            skill: '=skill'
        },
        template: '<img class="icon shadow" ng-src="{{skill.image}}" title="{{skill.name}}" data-toggle="tooltip" data-placement="top" />',
        replace: true
    };
})

.config(function($compileProvider){
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
});
