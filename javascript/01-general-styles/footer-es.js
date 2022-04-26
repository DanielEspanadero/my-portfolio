(()=>{
    window.addEventListener("load", ()=>{
        "use strict"

        const text = document.querySelector("#footer-text");
        const year = new Date().getFullYear()

        text.innerHTML = `Desarrollado por <a href="https://daniel-espanadero.com/" 
        target="_BLANK">Daniel Españadero</a> &copy ${year}`


    });
})();