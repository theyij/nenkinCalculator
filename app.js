// show & hide answer
let btns = document.querySelectorAll(".question-btn");
for (let btn of btns){
    btn.addEventListener("click", function(e){
        let question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
}
// let x = document.querySelector(".total")
function getInputValue() {
        // Selecting the input element and get its value
        let m = document.getElementById("month").value;
        let w = document.getElementById("wage").value;
        // Displaying the value
        // alert(
        //     `Received monthly wage ¥${w} for ${m} months. Your total salary is ¥${w*m/1000}K. `
        // );
        document.querySelector(".total").innerText = `¥${m*w}.`;
        document.querySelector(".refund").innerText = `¥${m*w *0.1}.`;
        document.querySelector(".afterTax").innerText = `¥${m*w *0.08}.`;
      }

// let months = document.querySelectorAll(".months");
// btns.addEventListener("click", function(e){
//     console.log(months);
// })
