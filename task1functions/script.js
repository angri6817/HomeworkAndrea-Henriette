//task 1a)
function splitLines(text) {
    let lines=text.split("\n").map(line=>line.trim());
    return lines.filter(line=> line!== ""); 

    //if (lines[lines.lenght-1]==="") {
    //    lines.pop();
    //} gjorde først dette men kan vere mellomrom mellom

}

function showLines() {
    let text=document.getElementById("inputText").value;
    let lines=splitLines(text);

    let output=document.getElementById("output");
    output.innerHTML="";

    lines.forEach(line=> {
        const p=document.createElement("p");
        p.textContent=line;
        output.appendChild(p);
    });

} //kanskje ikke nødvendig med to funksjoner, ville prøve å teste funksjonen også utenfor konsoll
console.log("funksjon1")
console.log(splitLines("1.2\n-3.4\n5.9\n7.8"))

//task 1b)
function textToNumbers(textvalues) {
    let numbers=[]

    for(let i=0; i < textvalues.length; i++) {
        numbers.push(Number(textvalues[i]));
    }

    return numbers;
}
//tester i konsoll
console.log("funksjon2")
console.log(textToNumbers(["1.2","-3.4","5.9","7.8"]));

//task 1c)
//takes a series of number --> computes the sum of each pair

function SumPairs() {

    let numberlist=document.getElementById("tall_liste");
    let items=Array.from(numberlist.getElementsByTagName("li"));
    let numbers=items.map(item=> Number(item.textContent));

    numberlist.innerHTML="";

    for (let i=0;i < numbers.length-1; i++) {
        let sum=numbers[i]+numbers[i+1];

        let li = document.createElement("li");
        li.textContent=sum;

        numberlist.appendChild(li);
    }

}