const dinoImg = require('../src/dino.jpg');
const amazImg = require('../src/amazon.png');

export default
    {
        name:'Kevin Michael',
        headerTagline: [
                        'Hello! I\'m Kevin Michael.',
                        'Full Stack Web Developer',
                        'based in New Jersey.'
    ],
        contactEmail:'k-darc@ProtonMail.com',
        abouttext: "Ambitious, hard working, practical. Those are just some of the words used to describe me. As a graduate of an intense 12-week training program at Rutger's University, I graduated with a certificate in Web Development. I enjoy building websites from the ground up! If you are seeking a web presence or an employer looking to hire, you can get in touch with me below.",
        techused: "Technologies Used: HTML5, CSS3, Bootstrap, Javascript, React, jQuery, JSON, AJAX, Node.js, Express, Heroku, GitHub, MySQL, Google Firebase, MongoDB, WIX.",
        aboutImage:'https://images.unsplash.com/photo-1524821261922-e353d72c20e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
       ShowAboutImage:false,
       projects:[
           {
            id: 1,
            title:'Git Clash',
             service:'3rd Group Project {React, MongoDB, Heroku}',
             imageSrc:"https://camo.githubusercontent.com/97670f7d66351be21248e20909b4bb87f673fd44/68747470733a2f2f696d6775722e636f6d2f644f6d493256592e706e67",
             url:'https://github.com/k-darc/git-battle'
            },
            {
                id: 2,
                title: 'Dino in Space',
                service: '2nd Group Project {ES6, Socket.io, Vue.js, MySql}',
                imageSrc: dinoImg,
                url: 'https://github.com/k-darc/Platformer'
            },
            { 
                id: 3,
                title: 'Treat Yo Self!',
                service: '1st Group Project {HTML, CSS, ES6}',
                imageSrc: "https://www.picclickimg.com/d/l400/pict/153499461479_/Treat-yourself-Neon-Sign-Light-Lamp-Decor-Artwork.jpg",
                url: 'https://github.com/k-darc/Project-1'
            },
            {
                id: 4,
                title: 'BAMazon',
                service: 'Back end store front {Node, MySql}',
                imageSrc: amazImg,
                url: 'https://github.com/k-darc/BAMazon'
           }
        ],
        social: [
            {   name:'Github',
                url:'https://github.com/k-darc'},
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/kevin-d-7b87a218b'
            }
        ]
    }
    /* Thanks to Chetan Verma for the template!*/