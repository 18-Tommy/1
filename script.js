//Bài 1
const container = document.querySelector(".container");
const row = document.querySelector("#row");
const column = document.querySelector("#column");
const createBtn = document.querySelector("#btn-create");

createBtn.addEventListener("click", function() {
    if (row.value < 1 || column.value < 1 || row.value == "" || column.value == "") {
        alert("Error!!!")
    } else {
        const inteRow = parseInt(row.value);
        const inteColumn = parseInt(column.value);

        const newTable = document.createElement("table");
        newTable.style.border = "1px solid black";

        for (let i = 0; i < inteRow; i++) {
            const tableRow = document.createElement("tr");
            newTable.appendChild(tableRow);

            for (let j = 0; j < inteColumn; j++) {
                const tableColumn = document.createElement("td");
                tableColumn.style.width = "300px";
                tableColumn.style.height = "30px";
                tableColumn.style.border = "1px solid black";
                tableRow.appendChild(tableColumn);
            }
        }
        container.appendChild(newTable);
    }
});

//Bài 2
const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const showBtn = document.querySelector("#btn-show");
const result = document.querySelector(".result")

showBtn.addEventListener("click", function() {
    let array = [];
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    if (a > b || a == "" || b == "") {
        alert("Error!!!")
    } else {
        for (let t = a; t < b; t++) {
            if (checkPrime(t) == true) {
                array.push(t);
            }
        }
    }
    result.innerHTML = array;
});


function checkPrime(num) {
    let check = true;

    if (num < 2) {
        check = false;
    } else {
        for (let i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                check = false;
                break;
            }
        }
    }
    if (check == true) {
        return true;
    } else {
        return false;
    }
}