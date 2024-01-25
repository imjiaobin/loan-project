const amountE1 = document.querySelector("#amount");
const yearsE1 = document.querySelector("#years");
const rateE1 = document.querySelector("#rate");
const repayment1E1 = document.querySelector("#repayment1");
const repayment2E1 = document.querySelector("#repayment2");
const feeE1 = document.querySelector("#fee");

const calcE1 = document.querySelector("#calc");

// console.log(amountE1,yearsE1,rateE1,repayment1E1,repayment2E1,feeE1);

calcE1.addEventListener("click", calcLoan);

function calcLoan(){
    let amount=amountE1.value*10000;
    let years=yearsE1.value;
    let rate=rateE1.value/100;

    //由於check,所以我們取直要比較特別一點
    // let fee = 0 ;
    // if (feeE1.checked){
    //     console.log("5000");
    // };
    let fee = feeE1.checked ? 5000 : 0;
    //簡寫版,三元給值
    let rule = repayment1E1.checked ? 1 : 2;

    let totalInterest = amount*rate*years;
    let totalAmount = amount + totalInterest + fee;

    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? " ":"(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest+"元";
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    // resultE1.style.display = "block";
    //這和css的result的id的display連動

    setTimeout(function(){//只有一行的功能,這樣用就可以
        resultE1.style.display = "block";
    },500)//單位是毫秒
    // console.log(amount,years,rate,fee,rule);
    console.log(totalInterest,totalAmount);
}