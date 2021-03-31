// Business logic


const vowel = ["a", "e", "i", "o", "u"];

function pigLatin(letter) {
    if (vowel.includes(letter)) {
      return true; 
    } else {
      return false;
    } 
}

function pigLatin(word) {
    if (vowel.includes(word)) {
      word.concat("way");
      return true;
    } else {
      return false;
    }
}




// UI logic

// $(document).ready(function()) {

// }
