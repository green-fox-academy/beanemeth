
const phoneBook: {[key: string]: string}= {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
}

//What is John K. Miller's phone number?
console.log(phoneBook["John K. Miller"]);
//Whose phone number is 307-687-2982?

  
console.log(Object.keys(phoneBook)[Object.values(phoneBook).indexOf('307-687-2982')])

//Do we know Chris E. Myers' phone number? (yes/no)

let output1 = phoneBook.hasOwnProperty('Chris E. Myers');

if (output1===false) {
console.log("no")
    
} else { console.log("yes")
    
}
/* We are going to represent our contacts in a map where both the keys and values are strings.
Create an application which prints out the answers to the following questions:



Do we know Chris E. Myers' phone number? (yes/no)


The full output of your main method should be the following:

402-247-8568
Brooke P. Askew
no
*/