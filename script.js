//variables
let mainText = document.getElementById("text");
let mainImg = document.getElementById("img");
let nameInput = document.getElementById("nameInput");
let nextBtn = document.getElementById("nextButton");
let yesBtn = document.getElementById("option1");
let noBtn = document.getElementById("option2");
let bgPenguins = document.querySelectorAll(".bgPenguins");
let message = document.getElementById("final");

//First Phase
nameInput.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        step2();
    }
});

nextBtn.addEventListener("click", () =>{
    step2();
});

function step2(){
    let name = nameInput.value;

    if (name.trim() === ""){
        alert("Please enter a name!");
        return;
    }

    //Remove input display
    nameInput.classList.add("d-none");

    //Change question and image
    mainText.innerText = `Hello ${name}, I want to ask you a question...`; 
    mainImg.src = "Resources/Penguins/Can I ask.png";
    nextBtn.innerText = "Sure, what is it?";

    //Change buttons
    nextBtn.addEventListener("click", () =>{
        step3(name);
    });
}

function step3(name){
    mainText.innerText = `Uhm, ${name}... will you be my Valentine's Date?`;
    mainImg.src = "Resources/Penguins/Main Question.png";
    

    nextBtn.classList.add("d-none");
    yesBtn.classList.remove("d-none");
    noBtn.classList.remove("d-none");

    yesBtn.addEventListener("click", () => {
        finalStep();
    })

    noBtn.addEventListener("mouseenter", () => {
        moveButton(noBtn);
    })
    noBtn.addEventListener("click", () => {
        alert("You're not supposed to click that...");
    })
}

function moveButton(button){
    let container = button.closest(".answer-row");
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    let randomX = Math.floor(Math.random() * (containerWidth - button.offsetWidth));
    let randomY = Math.floor(Math.random() * (containerHeight - button.offsetHeight));
    
    button.style.position = "absolute";

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function finalStep(){
    mainText.innerText = "She said Yes!!"
    mainImg.src = "Resources/Penguins/Yes.png";
    yesBtn.classList.add("d-none");
    noBtn.classList.add("d-none");

    bgPenguins.forEach(function(image) {
        image.classList.remove("d-none");
    })

    dayOfTheWeek();
}

function dayOfTheWeek(){
    const valentineDate = new Date("2025-02-14");
    const today = new Date();  
    
    if (today < valentineDate){
        message.innerText = "Advanced Happy Valentine's Day! I love you so much";
    }
    else if (today.toDateString === valentineDate.toDateString){
        message.innerText = "Happy Valentine's Day! I love you so much";
    }
    else{
        message.innerText = "Belated Happy Valentine's Day! I love you so much";
    }
}
