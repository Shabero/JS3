// let str = "Hello World"

// function myFunction(){
//     let res = str.slice(0,5).toUpperCase()
//     return res
// }

// function Shabdan(){
//     let res = str.slice(0,5).toLowerCase()
//     return res
// }

// console.log(Shabdan())
// console.log(myFunction())


// function myFunction(){
//     let a = 'Admin'
//     if (a.toLowerCase() === 'admin'){
//         return 'Welcome admin'
//     } else {
//         return 'Welcome user'
//     }
// }

// console.log(myFunction());

// function myFunction(){
//     let a = 'Shabdan'
//     if (a.toLowerCase() === 'admin'){
//         return 'Welcome admin'
//     } else {
//         return `Welcome ${a}`
//     }
// }

// console.log(myFunction());

// function myFunction(name){

//     if (name.toLowerCase() === 'admin'){
//         return 'Welcome admin'
//     } else {
//         return `Welcome ${name}`
//     }
// }

// console.log(myFunction('Shabdan'));
// console.log(myFunction('Shabdan'));
// console.log(myFunction('Shabdan'));
// console.log(myFunction('Shabdan'));


// function myFunction(age){

//     if (age >= 18){
//         return `Welcome to the Party`
//     } else {
//         return `Welcome KinderGarden`
//     }
// }

// console.log(myFunction(18));
// console.log(myFunction(15));
// console.log(myFunction(1));

function myFunction(age, name){
    console.log(name)
    if(age >= 18 && age <= 50){
        return `Welcome to Work ${name}`
    }   else if(age >= 7 && age <= 17){
        return `Welcome to School ${name}`
    } else{
        return `Welcome to Kinder Garden ${name}` 
    }
}


console.log(myFunction(13,'Shabdan'))
console.log(myFunction(19,'Farukh'))
console.log(myFunction(13,'Shabdan'))