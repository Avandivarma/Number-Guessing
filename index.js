
const result = document.getElementById("result");
let Attempt = 10;
const min = 1;
const max = 25;

const answer = Math.floor(Math.random() * (max - min + 1));
// let a=10;

function submit() {
    const input = Number(document.getElementById("input").value);
   
    console.log(input);
    if (input === answer) {
        result.textContent = `Guessing is correct!!`;
       
        setTimeout(function() {
        location.reload();
        }, 2000); 

        }
    else if(input > answer)
    {
        result.textContent = "Too Big!!";

    }
    else if(input < answer)
    {
        result.textContent = "Too Small!!";
    }

    Attempt--;
    document.getElementById("Attempt").textContent = `Attempts: ${Attempt}`;
    if (Attempt === 0) {
        window.alert("Your chances are over.");
        refreshPage();
    }


}





