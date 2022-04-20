/* Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u. */

function regexVar(string){

    //for ( let i = 0; i < string.length; i++){

    let vowels = "aeiou";
        //if(vowels.includes(string[0]) === vowels.includes(string[string.length -1])){
            if(string.startsWith(vowels) === string.endsWith(vowels)){
            return true;
        }else{
            return false;
        }
   // }

}
console.log(regexVar("appla"));
console.log(regexVar("bcd"));