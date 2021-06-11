var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome to my website')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am a programmer')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('<strong>Full Stack Developer</strong>')
    .pauseFor(2500)
    .start();