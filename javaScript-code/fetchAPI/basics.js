/* HTTP request methods: set of request methods.
CRUD operations
create:  POST
read:    GET
update:  PUT/PATCH
delete:  DELETE  */

const URL = "https://catfact.ninja/facts";

// const catFacts = async () => {
//     // const response = await fetch(URL); // by default `GET` method
//     // console.log(response);

//         //OR
        
//     fetch(URL).then((res)=>{
//         console.log(res);
//     })
// }

// catFacts(); // OUTPUT: In JSON


/* API returns data in the form of:
AJAX is Asynchronous JS & XML (previous time)
JSON is JavaScript Object Notation (like JS object but not exactly JS object)   
json() method: convert response (JSON) into JS object. (input -> JSON & output -> JS Object)
*/

const catFacts = async () => {
    // const response = await fetch(URL); // by default `GET` method
    // const data = await response.json();
    // console.log(data);

    fetch(URL).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
    })   
}

catFacts(); //OUTPUT: JS Object