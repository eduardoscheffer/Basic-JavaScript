function passwordChecker (password) {
    let hasMinHeight = password.length >= 8 ? true: false;
    let hasUppercase = /[A-Z]/.test(password) ? true: false;
    let hasLowerCase = /[a-z]/.test(password) ? true: false;
    let hasDigit = /[0-9]/.test(password) ? true: false;
    let hasSymbol = /\W+/.test(password) ? true: false;

    return (hasMinHeight && hasUppercase && hasLowerCase && hasDigit && hasSymbol) ? `Senha forte`: `Senha fraca`;
}

console.log(passwordChecker('Eduardo')); // Senha fraca
console.log(passwordChecker('#Ragnar2038')); // Senha Forte
console.log(passwordChecker('90901799')); // Senha fraca