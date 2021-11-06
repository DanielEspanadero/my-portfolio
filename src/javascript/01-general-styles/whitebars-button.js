(()=>{
    window.addEventListener("load", ()=>{
    "use strict"

    const whiteBars = document.querySelector("#white-bars");
    const listContainer = document.querySelector(".list-js");

    whiteBars.addEventListener("click", ()=>{
    if(innerWidth < 650){
        listContainer.classList.toggle("list_container");
    };
    });

    if(innerWidth > 650){
        listContainer.classList.add("list_container");
    }



    });
})();