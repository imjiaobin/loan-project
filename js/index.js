const amountE1 = document.querySelector("#amount");
const yearsE1 = document.querySelector("#years");
const rateE1 = document.querySelector("#rate");
const repayment1E1 = document.querySelector("#repayment1");
const repayment2E1 = document.querySelector("#repayment2");
const feeE1 = document.querySelector("#fee");

const calcE1 = document.querySelector("#calc");
const tableE1 = document.querySelector("#table tbody");
console.log(tableE1,amountE1, yearsE1, rateE1, repayment1E1, repayment2E1, feeE1);

calcE1.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountE1.value * 10000;
    let years = yearsE1.value;
    let rate = rateE1.value / 100;
    //由於check,所以我們取直要比較特別一點
    // let fee = 0 ;
    // if (feeE1.checked){
    //     console.log("5000");
    // };
    let fee = feeE1.checked ? 5000 : 0;

    //簡寫版,三元給值
    let rule = repayment1E1.checked ? 1 : 2;
    //1->本金攤還
    //2->本息攤還
    let result;
    // let result2 = rule1(amount,years,rate);
    if (rule == 1) {
        result = rule1(amount, years, rate);
        console.log(result);
    } else {
        // result = rule1(amount,years,rate);
        // console.log(result);
        alert("功能製作中");
    };

    let totalInterest = result[1];
    let totalAmount = amount + totalInterest + fee;


    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? " " : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest + "元";
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    // resultE1.style.display = "block";
    //這和css的result的id的display連動

    setTimeout(function () {//只有一行的功能,這樣用就可以
        resultE1.style.display = "block";
    }, 500)//單位是毫秒
    // console.log(amount,years,rate,fee,rule);
    // console.log(totalInterest, totalAmount);
    calcTable(result[0]);
    //因為result的[0]是每期資訊
}

function rule1(total_amount, years, rate) {
    let amount = amountE1.value * 10000;
    let period = yearsE1.value * 12;
    let month_rate = rateE1.value / 100 / 12;
    let month_pay = parseInt(amount / period);

    let datas = [];
    let totalInterest = 0;

    for (let i = 0; i < period; i++) {
        interest = Math.round(amount * month_rate);
        amount -= month_pay;
        if (i == period - 1) {
            datas.push([i + 1, month_pay + amount, interest, month_pay + amount + interest, 0]);
        } else {
            datas.push([i + 1, month_pay + amount, interest, month_pay + amount + interest, amount]);
        }

        totalInterest += interest;
    }
    console.log(datas);
    return [datas, totalInterest];

}

function calcTable(datas) {
    // let tableStr = "<ul>";
    // for(let i = 0; i< datas.length; i++){
    //     console.log(datas[i].join(","));
    //     tableStr += `<li>${datas[i].join(",")}</li>`;
    // }
    // tableStr += "</ul>";
    // console.log(tableStr);
    // tableE1.innerHTML = tableStr;

    let tableStr = "";
    for (let i = 0; i < datas.length; i++) {
        tableStr += "<tr>";
        for (let j = 0; datas[i].length; j++) {
            tableStr += `<td>${datas[i][j]}</td>`;
            // console.log(datas[i][j]);
        }
        tableStr += "</tr>";
    }

    console.log(tableStr);
    //tableE1.innerHTML = tableStr;
}