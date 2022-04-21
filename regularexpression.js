/* Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u. */

function regexVar(string){
    let vowels = "aeiou";
    let startVowel = string.slice(0,1);
    //console.log(startVowel);
    let endVowel = string.slice(-1);
    //console.log(endVowel);
      
            if(startVowel === endVowel){
            return true;
        }else{
            return false;
        }  
}
console.log(regexVar("appla"));
console.log(regexVar("bcd"));