## Scope Chain , Scope and lexical environment

-> Scope chain :- Its refers to structure of nested scopes in JavaScript. When a variable is accessed, the JavaScript engine searches for it within the current scope. And If the variable is not found, it continues to search in the outer scope and keeps traversing up the chain until the variable is found or until it reaches the global scope.

-> Scope :- Where You can access a specific variable or function in our code .

-> Lexical environment :- whenever a execution context created lexical environment is also created.
                          So in (sequence or hierarchy) lexical environment is the local memory along with the lexical environment of it parent. (See the example lexical.js )

-> And as per example , this wways of finding lexical environment is known Scope chain . 
   Its nothingt but just finding lexical environment sequence in order. (Ex.lexical.js)
                   
