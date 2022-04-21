/* Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set {a,e,i,o,u}, then return A.
If the first character in string  is in the set {b,c,d,f,g} , then return B.
If the first character in string  is in the set {h,j,k,l,m}, then return C.
If the first character in string  is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D. */

function getLetter(s) {
  
    // Write your code here
    //for ( let i = 0; i < s.length; i++){
        if("aeiou".includes(s[0])){
            return  "A";
        } else if("bcdfg".includes(s[0])){
          return "B";
       }else if("hjklm".includes(s[0])){
          return "C";
     }else if("npqrstvwxyz".includes(s[0])){
          return  "D"; 
}
}


console.log(getLetter("adfgt"));
console.log(getLetter("bcdg"));
