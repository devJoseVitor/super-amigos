/**
 * Referência do body e container do app em geral
 */
const html = document.querySelector('html');
const body = document.querySelector('body');
const app = document.querySelector('.app');

/**
 * Altura do elemento que vai ser suavizado e velocidade
 * de transição entre a última posição do scroll e a atual
 */
const height = app.getBoundingClientRect().height;
const velocidadeTransicao = .1;

/**
 * Posição da suavização do scroll
 */
let posicao = 0;

/**
 * Definindo o tamanho do body com o mesmo tamanho
 * do container do app
 */
body.style.height = html.style.height = `${Math.floor(height)}px`;

/**
 * Função para fazer a suavização do scroll
 * Pega o valor da posição atual do scroll do eixo Y,
 * subtraí com o valor da posição anterior e multiplica
 * pela velocidade, fazendo com que o valor diminua em X vezes,
 * então repete a execução da função até que o valor antigo (posicao)
 * coincida com o valor da nova posição (window.pageYOffset)
 */
const suavizarScroll = () => {
  posicao < 1 ? posicao = 0 : false;
  posicao += (window.pageYOffset - posicao) * velocidadeTransicao;
  app.style.transform = `translateY(-${posicao}px) `;
  requestAnimationFrame(suavizarScroll);
}

suavizarScroll();

window.onresize = () => {
  let height = app.getBoundingClientRect().height - 1;
  body.style.height = html.style.height = `${Math.floor(height)}px`;
}