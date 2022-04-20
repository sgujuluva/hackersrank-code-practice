/* First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in . */

function vowelsAndConsonants(s) {
    let vowel = "aeiou";
    let resultVowel ="";
    let resultConsonant = "";

    for ( let i = 0; i < s.length; i++){

        if(vowel.includes(s[i])){

             /* resultVowel += s[i];
            resultVowel += "\n"; */
            resultVowel += `${s[i]}\n`;
            
        }else {
            resultConsonant += s[i] + "\n";
            
        }
    
       
    }
    return (resultVowel + resultConsonant);
}
console.log(vowelsAndConsonants("javascript"));
