(()=>{
    window.addEventListener("load", ()=>{
        "use strict"
        const languages = document.querySelector("#languages");
        const langBox = document.querySelector(".lang-box");
        const flagButtons = document.querySelectorAll(".flag-button");
        const body = document.querySelector("body")

        languages.addEventListener("click", ()=>{
            langBox.classList.toggle("languages");

            for(let i=0; i < flagButtons.length; i++){
            flagButtons[i].classList.toggle("flag");
            };
        });

        body.addEventListener("click", ()=>{
            if(languages === true){
            langBox.classList.toggle("languages");
        }
        })

    });
})();