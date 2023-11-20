console.log('Hello, typescript!')

// In a javascript, we have several types of data

const number = 0
const string = '0'
const boolean = false;
const array0 = []
const obj = {}

// there are some others like big int but we don't care about those 
// typescript allows us to give our data types dirrectly. It avoids weird bugs and things such as concatination two strings instead of adding two numbers. 

let number1:number = 5;
let string1:string = '5';
let boolean1:boolean = true;
let array1:Array<string> = ['this', 'is','an','array','of','strings'];
let array2:Array<number> = [1,2,3,4,5];

// you can also use array literals -> format goes datatypeInsideArray[] eg number[]
let array3:number[][] = [[1],[2],[3]];
let array1dash2:string[] = [`another`, `way of saying 'hey' this is an array of strings` ]
let arrayObj:{name: string}[] = [{name: 'sam'}]

// we can see what the above 'compiles' down to by running npx tsc app.ts in our terminal 
// (remember, browsers can only run JS, so typescript needs to be turned back into javascript)
// the lets are changed to var because by default, it complies to ES3
// you can change this behaviour, but lets ignore that for now -> the important thing is, 
// all our vars have been turned into normal javascript vars. 

// the below is giving us an error: Type 'string' is not assignable to type 'boolean'.
let booleanBad:boolean = '4'


// we can also give our parameters types
function sum(num1: number, num2:number) {
    return num1 + num2
}

// We get this error: Argument of type 'string' is not assignable to parameter of type 'number'.
const result = sum('4', 2)

// to use the offical terminology, javascript uses dynamic typing - it's done at runtime 
// typescript uses static typing - type checking is done when complied. 

// its important to remember that javascript doesn't 'understand' typescript - the compiler converts typescript code to javascript code. 


// =-==-==-==-==-==-==-==-= Type Inferance =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

// Although I did it before, we don't need to tell our variables what type they are -> Typescript will figure this out. If you hover over this, you will see that typescript has infered it's type as we'd expect: a number. 

let numberExample = 5; 

// if we don't give our variable a binding straight away, then we should explicitly give it a type.  
// without having :number here, decalredVar would implicitly have an any type. 
let declaredVar:number;
declaredVar = 5; 

// Type 'number' is not assignable to type 'string' - type script infered that we wanted to store a string, so we can't just assign a number to it later
let typeScriptWillYellAtYou = 'This is def a string'
typeScriptWillYellAtYou = 5;

//=-==-==-==-==-==-==-==-= Tuples =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

// typescript also allows us to make 'Tuples' - which if you've come from a different language, you may know as fixed arrays of length and type (type per element)

// if we hover over it, we see that typescript infers this strange type : (string | number)[]
// so it knows the array can contain a string or number - we've created a union type.
// We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean
const tupleExample = [4 ,`Aghanim's Scepter`] 

// the problem with this is, we can still push or modify the array

tupleExample[1] = 5

// Will still work. 

const tupleExample2:[number,string] = [4 ,`Aghanim's Scepter`] 

// try adding another element to the array above, and typescript will shout at us - now, tupleExample2 will only accept 2 elemenets, of type number and string. 

// push will still work for comeplex reasons - but we cannot dirrectly asign wrong values anymore

tupleExample2[1] = 5;

// =-==-==-==-==-==-==-==-= Enum type =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

/* automatically enumerated global constrant indentifiers (I don't know what this means either!)

Imagine we have some kind of role based system for our users 
0 means super admin
1 means admin
2 means user
3 means student
*/

let schoolProfile = {
    name: 'Sam',
    classes: ['Computer Science', 'Fine Art', 'English Lit', 'Mathematics'],
    role: 3
}

// well, remembering what each of these numbers mean will be pretty confusing. 

let schoolProfileTwo = {
    name: 'Shaun',
    classes: ['History', 'Computer Science', 'Physics', 'Latin'],
    role: 'user'
}

// ok, maybe thats better, but doing checks against strings can be irritating too:

// was it: 

if (schoolProfileTwo.role === 'USER') {}

// or was it: 

if (schoolProfileTwo.role === 'Us3r') {}

// and so on. 

// so instead, we can create something called an emum - it's an object, where the first item is 0 and so on. 

enum Roles {'ADMIN', 'Super Admin', 'L33T HAXOR', 'Pos3'}

// on the above, 'ADMIN' has a value of 0, 'Super Admin' a value of 1 and so on. 

let schoolProfile3 = {
    name: 'Tim',
    classes: ['Computer Science', 'Star Wars', 'CAD', 'Talking Fast'],
    role: 3
}


// =-==-==-==-==-==-==-==-= Union type =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

// okay the below is stupid lol but sometmies you just need to do a runtime type check. I know
// im sorry
// we can't just have it be the union type as typescript won't check what's in the unions and can't be sure we can use the + operator on both inputs. 
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
  return result
}

let array: string[] | boolean = false;
array = ['This', 'is', 'an', 'array', 'now']


// =-==-==-==-==-==-==-==-= Literal type =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

// Literal types are types that are based on primatives (strings, numbers, ect) but instead of accepting any string, you only want specific one(s)

function course(course: 'software-dev' | 'unity' | 'quantum mechanics') {
    console.log(`You are doing the course: ${course}!`)
}

course('software-dev') // this is good.
course('how to blame junglers') // this is not good. 
course('Unity') // no good
course('unity') // good!

// =-==-==-==-==-==-==-==-= Type Aliases =-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-=

// we can also use this to make 'custom' types using the type keyword, which is much more readable, and allows you to easily reuse common literal types in your program. 

type courses = 'software-dev' | 'unity' | 'quantum mechanics'

const courseList = (course:courses) => console.log(`You're also doing the course ${course}`)

// sam tester/recap 

let myTSArray: (number | string) [] = ['hello', 'W', 0, 'rld']

type Plants = 'fern' | 'sunflower' | 'peach'

const logPlant = (input: Plants) => console.log(`You like ${input}`)

