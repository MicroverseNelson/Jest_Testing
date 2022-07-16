//string count
const stringLength = (string) => {
  return string.length;
}

//string count
const validateString = (string) => {
    if(string.length < 1 || string.length > 10 || string === "" || string == null) {
        return undefined;
    }
    return string.length;
}

//reverse string
const reverseString = (string) => {
    if(string.length < 1 || string === "" || string == null) {
        return undefined;
    }
    return string.split('').reverse().join('');
};

class Calculator {
  constructor() {}
  add(num1, num2) {
    if(typeof num1 === "string" || typeof num2 === "string") {
        return undefined;
    }
    return num1 + num2;
  }
  subtract(num1, num2) {
    if(typeof num1 === "string" || typeof num2 === "string") {
        return undefined;
    }
    return num1 - num2;
  }
  multiply(num1, num2) {
     if (typeof num1 === "string" || typeof num2 === "string") {
       return undefined;
     }
    return num1 * num2;
  }
  divide(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
       return undefined;
     }
    return num1 / num2;
  }
}

//capitalize first letter
const capitalizeFirst = (myString) => {
    if(myString.length < 1 || myString === "" || myString == null || typeof myString=== "number") {
        return undefined;
    }
    return myString.charAt(0).toUpperCase() + myString.slice(1);
};


module.exports = {
    stringLength,
    validateString,
    reverseString,
    Calculator,
    capitalizeFirst
}