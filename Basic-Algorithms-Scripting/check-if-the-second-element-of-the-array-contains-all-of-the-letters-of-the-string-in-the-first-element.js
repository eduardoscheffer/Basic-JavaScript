function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();
    for (let i = 0; i < arr2.length; i++) {
      // indexOf retorna -1 se o valor não for encontrado.
      if (arr1.indexOf(arr2[i]) == -1) return false;
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));