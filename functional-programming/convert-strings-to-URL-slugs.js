// Convert Strings to URL Slugs
function urlSlug(title) {
    return title
    .toLowerCase() // converte tudo pra loweCase;
    .trim() // remove os espaços em branco do começo e fim da string;
    .split(/\s+/) // that RegExp will match one or more white-space characters. // separa a string em uma array com elementos separados por espaços em branco da string;
    .join("-"); // junta a array em uma string separa por hífen;
  
  }
  
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone
  
  console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming