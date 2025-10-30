//hi I am a coment just like in Java, C and C++
/*
hi I am a comment too yayy 
*/

var firstName= 'SIMO' // VERY VERY bad practice Florian gets very sad :( 
let secondName = "Goisso" // Florian likes this
const pi = 3.1415 //const is for values that dont change, Use const as often as possible to dont accidentely override variables

//not possible
//pi= 353535; // no error message but in the console
let x = 69;


console.log("blabla");
console.log('%c yuhu', 'background-color: crimson; color: white'); //really cool use of css in Javascript, The console output gets colored
console.log(firstName);
console.log(x);
console.log(secondName);
/* we dont need ; It also works without ; but it looks cool like its an actual programming language*/
console.log("%c===================DATA TYPES=====================", "background-color: cornflowerblue; color: white;")

/*
1) Primitive Datatypes: String, Boolean, Number, (Symbol)
2) Complex/Composite/Reference Datatypes: Object, Array, Function
3) Special Datatypes: undefined, null

In JS the datatype of a variable is automatically assumed based on the value we are storing in it.
*/

//String
//------
/*  
There are 3 different ways of creating strings:
1) Using Double quotation marks ""
2) using single quotation marks ''
3) Template string /literals ``

[]  option + 5
{}  option + 8
|   option + 7
\   option + Shift + 7
*/
console.log(typeof(firstName));
console.log(typeof(secondName));

//String concatination (old way) with + 
let fullN = firstName + " " + secondName;
console.log(fullN);

//Template strings/ literals 
let message = `Hello World!
I will talk hours about the stuff that interests me
youuuuuuuuuu are cool
blablablablablablab 
`
let greeting =`Hello my first name is ${firstName} and my last name is ${secondName}`
console.log(greeting);
console.log(typeof(greeting));


//Number 
//------
/*
IN JS all values like 3.1213 or 42 are combined under the data type Number.
*/
let number = 3;
console.log(`Numbewr: The value ${number} the datatype ${typeof number}`)

//boolean
//-------
/**
 * 
 */

let studentPassed = true;
console.log(`Boolean: The value ${studentPassed} the datatype: ${typeof(studentPassed)}`)

//Special Data Type: undefined
//----------------------------
/**
 * there is a value undefined
 * there is the datatype undefined
 * Specific for variable that are created bur not yet holding a value
 */

let coursegrade;
console.log(`Coursegrade: The value ${coursegrade} the datatype: ${typeof(coursegrade)}`)

console.log("%c===================Practical Examples=====================", "background-color: lightgreen; color: black;")

const studentName = 'Simo Grimo';
const studenID = 'cc251017';
const isEnrolled = true;
const currentSemester = 1;
const height = 1.85;

const studentProfile= `
        =========================
        |   Student Profile     |
        =========================
        Name: ${studentName}
        ID: ${studenID}
        Enrolled: ${isEnrolled}
        Semester: ${currentSemester}
        Height: ${height} in (m)
`;

console.log(studentProfile);