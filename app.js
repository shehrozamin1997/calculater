document.querySelector('.history-icon').addEventListener('click', () => {
    document.querySelector('.history-group').classList.toggle('top');
    document.querySelector('.history-icon').classList.toggle('rotate');
 });
 
 
 let todayTime = new Date();
 let timeLocal = todayTime.toLocaleTimeString();
 
 let createLi;
 
 const calc = () => {
     let res;
     try {
         res = Function('"use strict"; return (' + displayValue + ')')();
         createLi = document.createElement('li');
         createLi.innerHTML = `<span class="time">${timeLocal}</span>
         <span class="calculate">${document.getElementById('screen').value}= <b>${res}</b></span>`;
         document.querySelector('.history-group').appendChild(createLi);
         document.getElementById('top').innerHTML = `${document.getElementById('screen').value}=`;
         document.getElementById('screen').value = res;
         displayValue = res.toString();
     } catch (error) {
         document.getElementById('screen').value = '-e';
         displayValue = '';
     }
 };
 
 
 
 document.querySelector('.history-icon').addEventListener('click', () => {
    document.querySelector('.history-group').classList.toggle('top');
    document.querySelector('.history-icon').classList.toggle('rotate');
 });
 function historyRemove() {
    document.querySelector('.history-group').innerHTML = '<h1>Delete All History <i class="fa-solid fa-trash" onclick="historyRemove()"></i></h1>';
 }
 
 
 function abc() {
    var inputElement = document.getElementById("input");
    var inputValue = inputElement.value;
 
    if (inputValue === "") {
        inputElement.value = "0";
    } else {
        var result = eval(inputValue);
        inputElement.value = result;
    }
 }
 
 function remove() {
 
    var inp = document.getElementById("input").value;
    var slicee = inp.slice(0, -1);
    document.getElementById("input").value = slicee
 }
 
 function buttonvalue() {}
 buttonvalue()
 
 function removeAll() {
    document.getElementById("input").value = ""
 }
 
 
 
 // All functions for button
 function btnnine() {
    var value = document.getElementById("btnno").value;
    document.getElementById("input").value += value
 
 }
 
 function btneight() {
    var value = document.getElementById("btneight").value;
    document.getElementById("input").value += value
 
 }
 
 function btnseven() {
    var value = document.getElementById("btnseven").value;
    document.getElementById("input").value += value
 
 }
 
 function persign() {
    var value = document.getElementById("percent").value;
    document.getElementById("input").value += value
 
 }
 
 function divid() {
    var value = document.getElementById("divid").value;
    document.getElementById("input").value += value
 
 }
 
 function mutiply() {
    var value = document.getElementById("mutiply").value;
    document.getElementById("input").value += value
 
 }
 
 function btnfour() {
    var value = document.getElementById("btnfour").value;
    document.getElementById("input").value += value
 
 }
 
 function btnfive() {
    var value = document.getElementById("btnfive").value;
    document.getElementById("input").value += value
 
 }
 
 function btnsix() {
    var value = document.getElementById("btnsix").value;
    document.getElementById("input").value += value
 
 }
 
 function minus() {
    var value = document.getElementById("minus").value;
    document.getElementById("input").value += value
 
 }
 
 function btnone() {
    var value = document.getElementById("btnone").value;
    document.getElementById("input").value += value
 
 }
 
 function btntwo() {
    var value = document.getElementById("btntwo").value;
    document.getElementById("input").value += value
 
 }
 
 function btnthree() {
    var value = document.getElementById("btnthree").value;
    document.getElementById("input").value += value
 
 }
 
 
 function plus() {
    var value = document.getElementById("plus").value;
    document.getElementById("input").value += value
 
 }
 
 function doublezero() {
    var value = document.getElementById("doublezero").value;
    document.getElementById("input").value += value
 
 }
 
 function zero() {
    var value = document.getElementById("zero").value;
    document.getElementById("input").value += value
 
 }
 
 function doublezero() {
    var value = document.getElementById("doublezero").value;
    document.getElementById("input").value += value
 
 }
 
 function decimal() {
    var value = document.getElementById("decimal").value;
    document.getElementById("input").value += value
 
 }
 
 var historytwo = "";
 
 function history() {
 
    var his = "";
    historytwo = document.getElementById("input").value;
    document.getElementById("historr").value = historytwo
 
 }
 
 function equal() {
    var con = historytwo + "=" + document.getElementById("input").value;
    document.getElementById("historr").value = con
 
 }
 var ar = [];
 
 function final() {
    ar.push(document.getElementById("historr").value)
    var lastindex = ar.length - 1
    var printr = (ar[lastindex] + " ")
    document.getElementById("maiiin").innerText += printr + ";"
 }
 // var emptyvar =[]
 //     var lastindex=emptyvar.length;
 //     var ffff=emptyvar.push(document.getElementById("historr").value);
 // for(i=0;i<emptyvar.length;i++){
 
 // console.log(ff[lastindex])
 
 // }