let countElem = document.getElementById("countElem");
let count = 0;
 
function increment() {

   
    count += 1

    countElem.textContent = count
}

let saveEl = document.getElementById("save-el")


function save() {

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saved = " " + count + " - ";
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += saved;
    // NB: Make sure to not delete the existing content of the paragraph
    // set to zero
    count = 0

}




// function increment() {
    
// }

// let lamp1 = 36
// let lamp2 = 43
// let lamp3 = 34

// function total() {
//     let sum = lamp1 + lamp2 + lamp3
//     console.log(sum)
// }

// total()

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted);

