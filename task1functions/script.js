//task 1a)
function splitLines(text) {
    let lines=text.split("\n");
    lines=lines.filter(line=> line!== ""); 

    //if (lines[lines.lenght-1]==="") {
    //    lines.pop();
    //} gjorde først dette men 

    return lines;
}

//task 1b)
function textToNumbers(textvalues) {
    let numbers=[]

    for(let i=0; i < textvalues.length; i++) {
        numbers.push(Number(textvalues[i]));
    }

    return numbers;
}

//task 1c)
//takes a serier of number --> computes the sum of each pair

function SumPairs() {

    let numberlist=document.getElementById("tall_liste");
    let items=numberlist.getElementsByTagName("li");
    let numbers=[]

    for(let i=0;i<items.length-1; i++) {
        numbers.push(Number(items[i].textContent));
    }
    numberlist.innerHTML="";

    for (let i=0;i < numbers.length - 1; i++) {
        let sum=numbers[i]+numbers[i+1];

        let li = document.createElement("li");
        li.textContent=sum;

        numberlist.appendChild(li);
    }

}