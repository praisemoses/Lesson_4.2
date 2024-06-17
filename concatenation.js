let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2024 - birthYear;
    let city = document.querySelector('.city').value 
    console.log(results);
    results.innerHTML = "<h1> My name is</h1>"+(myName)+("<h1>I'm feeling</h1>")+(mood)+("<h1> and I absolutely lovvveeeeee eating</h1>")+(food);
    
    
    
    
    // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.

    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.


});