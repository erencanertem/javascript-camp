// Prime Numbers --- Asal Sayılar

function findPrime (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = 0;

        for(let x = 2; x < numbers[i]; x++) {
            if(numbers[i] % x == 0) {
                isPrime++;
            }
        }
        if(isPrime == 0) {
            console.log(numbers[i] + " is a Prime number")
        } else {
            console.log(numbers[i] + " is not a Prime number.")
        } 
    }
}

findPrime(2, 3, 5, 6, 8, 9, 13, 21);


// Amicable Numbers -- Arkadaş Sayılar

function isAmicableNumbers(num1, num2) {
    let isAmc1 = 0;
    let isAmc2 = 0;
    for( let i = 1; i < num1; i++) {
        if(num1%i == 0) {
            isAmc1 +=i;
        }
    }
    if ( isAmc1 == num2) {
        for (let i = 1; i < num2; i++) {
            if(num2%i == 0) {
                isAmc2 +=i;
            }
        }
        if(isAmc2 == num1) {
            console.log("Input numbers are amicable numbers.") 
        }       
    }else {    
        console.log("Input numbers are not amicable numbers.")
    }
}


isAmicableNumbers(20, 30)

// Perfect Numbers until 1000

let perfNum = 0;

for(let i = 0; i < 1000; i++) {
    for( let x = 1; x <= i; x++ ) {
        if( i % x == 0) {
            perfNum +=x;
        }
        if ( i * 2 == perfNum) {
            console.log( i + " is a Perfect number.")
            perfNum = 0;
        } 
    }
    perfNum = 0;
}


// Prime Numbers until 1000

for (let i = 2; i < 1000; i++) {
    let primeNums = 0;

    for(let y = 2; y < i; y++) {
        if(i % y == 0) {
            primeNums ++;
        }
    }
    if(primeNums == 0) {
        console.log( i + " is a Prime numbers");
    }
}