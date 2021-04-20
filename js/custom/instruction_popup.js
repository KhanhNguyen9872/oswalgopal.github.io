var game_instructions_copy;
var game_instructions_text_copy;
var instruction_sound_copy;
var interaction_text = document.getElementById('interaction_text');
function checkPosition(game_instructions, game_instructions_text, position, instruction_sound) {
    game_instructions_copy = game_instructions;
    game_instructions_text_copy = game_instructions_text;
    instruction_sound_copy = instruction_sound;
    // game_instructions_copy.style.display = "none";
    console.log(position);
    if (position.x > 300)  {
        showWelcomeText();
    }
    if (position.x > 1600 && position.z > 500) {
        showProjectText();
    }
    if (position.x > 1700 && position.z < -150) {
        showSkillText();
    }
}
var count = 0;
 async function showWelcomeText() {
        count++;
        if (count == 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            // game_instructions_text_copy.innerText = "";
            const text = "Welcome to My World!. I am really happy to see you here";
            typeWriterWrapper(text)
            closeText();
        }
}


function closeText(){
    setTimeout(() => {
        game_instructions_copy.display = "none !important";
        game_instructions_text_copy.innerText = "";
        game_instructions_copy.style.display = "none";
    }, 5000);
}

var projectCount = 0;
function showProjectText() {
        projectCount++;
        if (projectCount === 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            const text = "It seems you are looking into my projects. press Shift key to check my resume";
            typeWriterWrapper(text);
            closeText();
        }
        interaction_text.innerText = "Press Shift to Check my resume";
        document.addEventListener("keyup", ev => {
            console.log(ev);
            if (ev.code === 'ShiftLeft' ||  ev.code === 'ShiftRight') {
                window.open('resume');
            }
        })
        setTimeout(() => {
            interaction_text.innerText = "";
        }, 1000)
}
var skillCount = 0;
function showSkillText() {
    skillCount++;
    if (skillCount === 1) {
        instruction_sound_copy.play();
        game_instructions_copy.style.display = "block";
        const text = "Skills are very important asset a person have. Explore out some of my skills";
        typeWriterWrapper(text);
        closeText();
    }
    interaction_text.innerText = "Press Shift to Check my resume";
    document.addEventListener("keyup", ev => {
        console.log(ev);
        if (ev.code === 'ShiftLeft' ||  ev.code === 'ShiftRight') {
            window.open('resume');
        }
    })
    setTimeout(() => {
        interaction_text.innerText = "";
    }, 1000)
}

function typeWriterWrapper(txt){
    var i = 0;
    var speed = 50;
    typeWriter();
    function typeWriter() {
    if (i < txt.length) {
        game_instructions_text_copy.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
}