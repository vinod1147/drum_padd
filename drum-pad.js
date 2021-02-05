// Detecting Button Press


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            
           var buttonInnerHTML = this.innerHTML;

           makeSound(buttonInnerHTML);

            // What to do when click detected
        }); 
        
}

// Detecting Keyboard Press


    document.addEventListener("keypress", function(event) {

      makeSound(event.key)

    });

    
 function makeSound (key) {

    switch (key) {
        // case "A":
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //     break;
    
            case "A":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

            case "S":
                var hello = new Audio('sounds/new.mp3');
                hello.play();
            break;

            case "D":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

            case "J":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

            case "K":
                var tamb = new Audio('sounds/tamb.wav');
                tamb.play();
            break;

            // case "L":
            //     var floorTom = new Audio('sounds/floor-tom.mp3');
            //     floorTom.play();
            // break;

            case "P":
                var bassDrum = new Audio('sounds/bassDrum.mp3');
                bassDrum.play();
            break;


            
        default: console.log(buttonInnerHTML);
    }
 }
     
    
 
