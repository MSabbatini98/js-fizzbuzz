// variabile globale
var counter = 0;

//********************** */ EXTRASSS
var max_num = parseInt(prompt("Inserisci il numero massimo di cui vuoi calcolare FizzBuzz, maggiore di 0"));

// validatore di max_num
for (var j = 10; j > 0; j--) {
    if (!(!isNaN(max_num) && max_num > 0)){
        var max_num = parseInt(prompt("Inserisci il numero massimo di cui vuoi calcolare FizzBuzz, maggiore di 0")); 
    }
}

// Itero sulla variabile max_num
for (var i = 0; i != max_num; i++) {
    counter += 1;
    console.log(counter);
    // se counter è divisibile per 3 e 5
    if ((counter % 3) == 0 && (counter % 5)== 0 ){
        document.getElementById("outcome").innerHTML += "<span id ='fizzbuzz'> FizzBuzz </span> <br>";
    // se counter è divisibile per 3
    } else if ((counter % 3) == 0) {
        document.getElementById("outcome").innerHTML += "<span id ='fizz'> Fizz </span> <br>";
    // se counter è divisibile per 5
    } else if ((counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML += "<span id ='buzz'> Buzz </span> <br>";
    // se counter non è multiplo di 3 o 5
    } else {
        document.getElementById("outcome").innerHTML +=  counter + "<br>";
    }
}

/*
// Itero sulla variabile max_num
for (var i = 0; i != max_num; i++) {
    counter += 1;
    console.log(counter);
    // se counter è divisibile per 3...
    if ((counter % 3) == 0 ){
        // ... e per 5
        if ((counter % 5) == 0){
            document.getElementById("outcome").innerHTML += "<span id ='fizzbuzz'> FizzBuzz </span> <br>";
        } else {
            document.getElementById("outcome").innerHTML += "<span id ='fizz'> Fizz </span> <br>";
        }
    // se counter è divisibile per 5
    } else if ((counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML += "<span id ='buzz'> Buzz </span> <br>";
    // se counter non è multiplo di 3 o 5
    } else {
        document.getElementById("outcome").innerHTML +=  counter + "<br>";
    }
}
*/
/*
for (var i = 0; i != max_num; i++) {
    counter += 1;
    console.log(counter);
    if ((counter % 3) == 0 && (counter % 5)!= 0 ){
        document.getElementById("outcome").innerHTML += "<span id ='fizz'> Fizz </span> <br>";
    } else if ((counter % 3) != 0 && (counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML += "<span id ='buzz'> Buzz </span> <br>";
    } else if ((counter % 3) == 0 && (counter % 5)== 0 ) {
        document.getElementById("outcome").innerHTML += "<span id ='fizzbuzz'> FizzBuzz </span> <br>";
    } else {
        document.getElementById("outcome").innerHTML +=  counter + "<br>";
    }
}
*/