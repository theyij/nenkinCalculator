// show & hide answer
// let btns = document.querySelectorAll(".question-btn");
// for (let btn of btns){
//     btn.addEventListener("click", function(e){
//         let question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// }
// let x = document.querySelector(".total")
function addInputValue() {
    let m = parseInt(document.getElementById("month").value);
    let w = document.getElementById("wage").value;

    // m = m + m;
    document.querySelector(".test").innerText = `¥${m}.`;

      }

function getInputValue() {
        // Selecting the input element and get its value
        let m = parseInt(document.getElementById("month").value);
        let w = document.getElementById("wage").value;
        // Displaying the value




        document.querySelector(".total").innerText = `¥${m*w /1000}K.`;
        document.querySelector(".refund").innerText = `¥${w * ( 0.183/2 *m)/1000} K.`;
        document.querySelector(".afterTax").innerText = `¥${w * ( 0.183/2 *m) *(1-0.2042) /1000} K.`;
      }
// 252,545 * ( 0.183/2 *55) = ¥1,270,932 (CAD$14.3K)

// read JSON file
// console.log(data[0]);



// let months = document.querySelectorAll(".months");
// btns.addEventListener("click", function(e){
//     console.log(months);
// })
