/* Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

 */

let factorial = (number) => {

    let factorialResult = 1;

    for( let i= number; i >=1 ; i--){

        factorialResult *= i ;

    }
    return factorialResult;

}
console.log(factorial(4));