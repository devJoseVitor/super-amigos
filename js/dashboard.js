const select = elemento => { return document.querySelector(elemento); }
const selectAll = elemento => { return document.querySelectorAll(elemento); }

const criarElemento = elemento => { return document.createElement(elemento)};
const criarTexto = texto => { return document.createTextNode(texto)};

const cadastradasContainer = select('.familias-cadastradas-container');

familias = localStorage.getItem('familias') ? JSON.parse(localStorage.getItem('familias')) : [];

const nomeAnjo = select('.nome-anjo');
nomeAnjo.innerText = localStorage.getItem('usuario_logado') ? localStorage.getItem('usuario_logado') : window.location.href = '/';

if(familias.length < 1){
   select('.sem-cadastros').classList.toggle('sc-hide');
}else{
   familias.forEach(familia => {
      const famItem = criarElemento('div');
      const famItemTitle = criarElemento('div');
      const famItemContent = criarElemento('div');
   
      const famH1 = criarElemento('h1');
      const famP = criarElemento('p');
   
      famItem.classList.add('familia-item');
      famItemTitle.classList.add('familia-item-title');
      famItemContent.classList.add('familia-item-content');
   
      famH1.appendChild(criarTexto(familia.familia));
      famP.appendChild(criarTexto(`${familia.responsavel} está responsável pela sua família. A renda familiar é de R$ ${familia.salario} e moram em ${familia.endereco}`));
   
      famItemTitle.appendChild(famH1);
      famItemContent.appendChild(famP);
   
      famItem.appendChild(famItemTitle);
      famItem.appendChild(famItemContent);
      
      famItem.onclick = () => {
         select('.text-sobre').innerText = familia.sobre;
         select('.sobre-blur').classList.toggle('sobre-blur-hide');
         select('.sobre').classList.toggle('sobre-closed');
      }

      cadastradasContainer.appendChild(famItem);
   });
}

const closeSobre = select('.close-sobre');

closeSobre.onclick = sobre => {
   select('.sobre-blur').classList.toggle('sobre-blur-hide');
   select('.sobre').classList.toggle('sobre-closed');
}

const logout = select('.nav-logout');

logout.onclick = () => {
   localStorage.removeItem('usuario_logado');
}
