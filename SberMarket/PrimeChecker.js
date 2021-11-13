function PrimeChecker(num) { 
  // code goes here
  const permutations = (inputArray) => {
    let result = [];

    for (let i = 0; i < inputArray.length; i = i + 1) {
      let rest = permutations(inputArray.slice(0, i).concat(inputArray.slice(i + 1)));
  
      if(!rest.length) {
        result.push([inputArray[i]])
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          result.push([inputArray[i]].concat(rest[j]))
        }
      }
    }
    return result;
  };

  const numToArr = num.toString().split('');
  const allPermutations = permutations(numToArr);

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let j = 2; j <= num / 2; j += 1) {
      if (num % j === 0) {
        return false;
      }
    }
    return true; 
  };

  const result = allPermutations.map((permutation) => {
    const num = permutation.join('');
    return isPrime(num);
  });

  return result.includes(true) ? 1 : 0;
}
// keep this function call here 
//console.log(PrimeChecker(readline()));
// console.log(PrimeChecker(910)); //1
// console.log(PrimeChecker(98)); //1
// console.log(PrimeChecker(598)); //1
// console.log(PrimeChecker(244)); //0
