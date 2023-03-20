const passwordChecker = (password) => {
    let lengthLimit = 8;
    let hasCapitalLetter = /[A-Z]/.test(password);
    let hasUpperLetter = /[a-z]/.test(password);
    let hasLowerCharacter = false;
    let hasDigit = false;
    let strangeCharacters = `!@#$%^&*()-_=+[{]}\|;:',<.>/?`;

    if (password.length < lengthLimit) {
        console.log('Senha muito curta');
        return false;
    }



}