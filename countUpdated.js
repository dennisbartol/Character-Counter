const input = document.querySelector("textarea"); 
const wordCount = document.querySelector("[data-word-count]"); 
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]"); 
const paragraphCount = document.querySelector("[data-paragraph-count]");


input.addEventListener("input", function() {
    if (input.value) {
        // const wordsArray = input.value.split(" ").filter((word) => word !== "");
        const wordsArray = input.value.trim().split(/\s);
        wordCount.innerText = wordsArray.length; 

        characterCount.innerText = input.value.length;

        // Added .?! to offer an improved variety of sentence counting. 
        // \s* is added for the same reason, to deal with one or more whitespaces.
        // const sentenceArray = input.value.split(/[.!?]\s*/); 
        // Added an expansion to deal with preventing abuse of multiple ?.!_  characters
        const sentenceArray = input.value.split(/(?:\.+|!+|\?+)\s*/);
        sentenceCount.innerText = sentenceArray.length - 1;

        const paragraphArray = input.value.split(/\n\s*\n/).filter((p) => p.trim() !== "");
        paragraphCount.innerText = paragraphArray.length;
   }

    else {
        wordCount.innerText = 0;

        characterCount.innerText = 0;

        sentenceCount.innerText = 0;

        paragraphCount.innerText = 0;  
    }
 }
);



