/* Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides  and .
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
The values returned by these functions are printed to stdout by locked stub code in the editor. */

//area of rect

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}
// perimeter of rect
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * ( length + width);
    return perimeter;
}
console.log(getArea(3,4.5));
console.log(getPerimeter(3,4.5));
