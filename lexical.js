function a() {
    var b = 10;
    c();
    function c() {     // We say can "c" function is lexically sitting inside "a" function.
        // Suppose we add here
        console.log(b);
        /* 
        -> Now what we will happen as c is lexically to a. And in function c, b has not been declared 
           So now what happen c will find that b value in function a, because c is lexically to a.
        -> And if var b was declare globally then function a will have to look into global scope.
           because function a, is lexically to global scope. 
        -> And this way of finding is also known as SCOPE CHAIN 
        */

    }
}
a();
