/* Custom js goes Here */

// IIFE - Immediately Invoked Function Expression
// anonyms self execuing funtion 
(function(){
        "Use Strict"

        function AboutButtonClick() {
            console.log("About Button was Clicked!");
        }

        function AboutButtonOver(event) {
            event.currentTarget.style.opacity = 0.3;
        }

        function AboutButtonOut() {
            event.currentTarget.style.opacity = 1.0;
        }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.innerText = "About";

            AboutButton.addEventListener("click", AboutButtonClick);
            AboutButton.addEventListener("mouseover", AboutButtonOver);
            AboutButton.addEventListener("mouseout", AboutButtonOut);

    }

    function AboutContent() {
        let Paragraph = document.getElementById("Paragraph");

        Paragraph.textContent = "We will be Changing the Contents of this Page.";
    }

    function Start() {
        // local variable
        let title = document.title;

        switch(title) {
            case "My Webpage - Home!":            
                HomeContent();
                break;

                case "My Webpage - About!":
                AboutContent();
                break;

                case "Contact Us":
                break;

                default:
                break;
        }
                     

        console.log("App Started!");
        console.log("------------------");
        console.log("Title: "+ title);
    }

    window.onload = Start;
    
})();