var posts = [];

fetchCountries();
preencherTabela();

async function fetchCountries() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const json = await res.json();

  posts = json.map((post) => {
    const { userId, id, title, completed } = post;

    return {
      id,
      userId,
      title,
      completed,
    };
  });
  preencherTabela(posts);
}

function preencherTabela(posts) {
  var tabela = document.querySelector('.tabela');

  var testes = '<div>';

  posts.forEach((post) => {
    const { userId, id, title, completed } = post;

    var teste = `
  <table border="1">
      <tr>
          <td>userId</td>
          <td>id</td>
          <td>title</td>
          <td>body</td>
      </tr>
      <tr>
          <td>${userId}</td>
          <td>${id}</td>
          <td>${title}</td>
          <td>${completed}</td>
      </tr>
     
  </table>
  `;

    testes += teste;
  });
  testes += '</div>';
  tabela.innerHTML = testes;
}
