var counter = 0;
//********************** */ EXTRASSS
var max_num = parseInt(prompt("Inserisci il numero massimo di cui vuoi calcolare FizzBuzz, maggiore di 0"));
// validatore di max_num
for (var j = 10; j > 0; j--) {
    if (!(!isNaN(max_num) && max_num > 0)){
        var max_num = parseInt(prompt("Inserisci il numero massimo di cui vuoi calcolare FizzBuzz, maggiore di 0")); 
    }
}


for (var i = 0; i != max_num; i++) {
    counter += 1;
    console.log(counter);
    if ((counter % 3) == 0 && (counter % 5)!= 0 ){
        document.getElementById("outcome").innerHTML += "Fizz" + "<br>";
    } else if ((counter % 3) != 0 && (counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML += "Buzz" + "<br>";
    } else if ((counter % 3) == 0 && (counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML +=  "FizzBuzz" + "<br>";
    } else {
        document.getElementById("outcome").innerHTML +=  counter + "<br>";
    }
}