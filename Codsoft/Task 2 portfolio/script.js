

 


const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student";
    }, 0);
    setTimeout(() => {
        text.textContent = "developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Problem Solver";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Learner";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 16000);
    
}
textLoad();
setInterval(textLoad, 28000);