
const numList = document.getElementById("numlist");

for (let i = 1; i <= 100; i++) {
    let eachNum = document.createElement("div");
    eachNum.classList = "num";
    eachNum.innerText = i;
    numList.appendChild(eachNum);

    if (eachNum.innerText % 15 === 0) {
        eachNum.innerText = "FizzBuzz";
        eachNum.classList.toggle("fizzbuzz");
    }

    if (eachNum.innerText % 3 === 0) {
        eachNum.innerText = "Fizz";
        eachNum.classList.toggle("fizz");
    }

    if (eachNum.innerText % 5 === 0) {
        eachNum.innerText = "Buzz";
        eachNum.classList.toggle("buzz");
    }
}

