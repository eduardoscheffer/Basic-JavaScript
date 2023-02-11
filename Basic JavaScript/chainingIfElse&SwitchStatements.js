// Chaining IF...ELSE statements // Replacing with switch cases:

function testSize (num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
}

console.log(testSize(7)); // Small

// SWITCH statements:
var Animal = 'Girafa';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        alert('Esse animal irá para Arca de Noé');
        break;
    case 'Dinossauro':
    default:
        alert('Esse animal não vai.');
}

console.log(Animal) // alert "Esse animal irá para Arca de Noé";
