var counter = 0;
for (var i = 0; i != 100; i++) {
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