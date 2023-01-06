// BASIC TYPES 
let id: number = 5;
let age: number 
let company: string = "Box Shadow"
let isPublished: boolean = true
let x: any = "hello"
let numberArray: number[] = [1,2.3,4,5] /* ARRAY CONTAINING ONLY NUMBERS*/
let anyArray: any[] = [1, true, 'hello'] 

// TUPLE - SPECIFY TYPES WITHIN ARRAYS
let person: [number, string, boolean] = [1, 'brad', true]
// TUPLE ARRAY (ARRAY OF TUPLES)
let skillsArray: [number, string, boolean] []
skillsArray = [
    [1, 'html 5', true],
    [2, 'css 3', true],
    [3, 'javascript', true]
]

// UNIONS - ENABLE VARIABLES TO HOLD MORE THAN ONE TYPE
let language : string | number
language = 'css'
language = 3


