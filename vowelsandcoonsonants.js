/* First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in . */

function vowelsAndConsonants(s) {

    //let s = "abcdefghijklmnopqrstuvwxyz";

    let vowels = "aeiou";

    let resultVowel ="";
    let resultConsonant = "";

    for ( let i = 0; i < s.length; i++){

        if(s[i] === "a" || s[i] === "e" || s[i] === "i"|| s[i] === "o"|| s[i] === "u" ){

             resultVowel += s[i];
            resultVowel += "\n";
        }else {
            resultConsonant += s[i];
            resultConsonant += "\n";
        }

    }
    return `The Vowels are: ${resultVowel} The Consonant are: ${resultConsonant}`;
   
}
console.log(vowelsAndConsonants("abcdefghijklmnopqrstuvwxyz"));
