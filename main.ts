//DAY 41
//TASK 1 (Using for loop counts no from 1-10 but skips 5)
for(let i=1; i<=10; i++){
    if(i===5){
        continue; //it skips the rest of the loop for i=5

    }
    console.log(i); //it logs no 1-4 and 6-10
}
//it skips the 5 from the no 

//TASK 2 (Initializes the counter at 10) using while loop
let counter: number = 10;
while (counter > 0) {
    if(counter ===5){
        break; //it exits the loop when counter reaches at 5
    }
    console.log(counter);
    counter--; //Decrements the counter
}
//it starts countdown from 10 but stops at 5

//TASK 3 (Using function iterates through a string and logs each character until it finds vowel)
function loguntilVowel (str: string): void{
    let vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; //it stops the loop at the first vowel found
        }
        console.log(char); //it prints each character until a vowel is encountered
    }
}
loguntilVowel("ryzyay");