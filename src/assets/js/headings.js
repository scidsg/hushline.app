document.addEventListener("DOMContentLoaded", function() {
    const words = ["whistleblowers", "students", "workers", "employees", "the public"];
    const animatedTextElement = document.querySelector(".animated-text");
    let lastWord = '';

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function changeWord() {
        let newWord;

        // Ensure the new word is different from the last word
        do {
            shuffle(words);
            newWord = words[0];
        } while (newWord === lastWord);

        lastWord = newWord; // Update lastWord with the new word

        animatedTextElement.classList.add("fade-out");

        setTimeout(() => {
            animatedTextElement.textContent = newWord;
            animatedTextElement.classList.remove("fade-out");
        }, 500); // Match this to the CSS transition duration
    }

    setInterval(changeWord, 6000); // Change every 6 seconds
});