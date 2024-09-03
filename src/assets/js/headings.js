document.addEventListener("DOMContentLoaded", function() {
    const words = ["employees", "students", "workers", "whistleblowers", "communities", "the public", "you"];
    const animatedTextElement = document.querySelector(".animated-text");
    let currentIndex = 0;

    function changeWord() {
        // Get the next word in the array
        const newWord = words[currentIndex];

        // Update the index to the next word, loop back to the start if at the end
        currentIndex = (currentIndex + 1) % words.length;

        // Trigger the wipe-out effect
        animatedTextElement.classList.remove("wipe-in");
        animatedTextElement.classList.add("wipe-out");

        setTimeout(() => {
            // Change the text after wipe-out is complete
            animatedTextElement.textContent = newWord;
            animatedTextElement.classList.remove("wipe-out");
            animatedTextElement.classList.add("wipe-in");
        }, 1000); // Match this to the CSS animation duration
    }

    setInterval(changeWord, 4000); // Change every 4 seconds
});