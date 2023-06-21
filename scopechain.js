function a() {
    console.log(b);
}
var b = 10; //if we have declare var. outside the function and try to access inside the function is possible.
a();

// --------------------------------------------- 

function a() {
    c();
    function c() {
        // console.log(b);
    }

}
var b = 10; //if we will try to acess the b function within other function, its is possible
a();
console.log(b); // Important if we will try to access outside the function it will throw error.