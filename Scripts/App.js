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

    function footer() {
        let footer = document.getElementById("footer");

        footer.textContent = "copyright - @BAGGANISHAT - Assignment2-Updated_page";
    }
    function sample() {
        let sample = document.getElementById("sample");

        sample.textContent = "Hi, My name is Nishat Bagga , I born and brought up in Jalandhar, Punjab, India on 17 Sep 1998. I am very Passionate about my physic and sports. I am very Hard, tough and hot-headed person. I am very loyable and to my friends and family and the person who did good to me at any time and I can do anything for them..";
    }

    function Start() {
        // local variable
        let title = document.title;

        switch(title) {
            case "My Webpage - Home!":            
                HomeContent();
                footer();
                break;

                case "My Webpage - About!":
                AboutContent();
                sample();
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