const select = elemento => { return document.querySelector(elemento); }
const selectAll = elemento => { return document.querySelectorAll(elemento); }

const form = select('.form');

form.onsubmit = () => { return false; }

const salario = select('.input-salario');

salario.onkeydown = e => {
   if(e.key === 'Backspace' || e.key === 'Tab') return;
   if(isNaN(e.key)) return false;
}

let familias = [];

familias = localStorage.getItem('familias') ? JSON.parse(localStorage.getItem('familias')) : [];

const btnCadastrar = select('.btn-cadastrar');

btnCadastrar.onclick = () => {
   if(select('.input-familia').value.trim().length > 0 &&
   select('.input-responsavel').value.trim().length > 0 &&
   select('.input-endereco').value.trim().length > 0 &&
   select('.text-sobre').value.trim().length > 0 ){
      const familia = {
         familia : select('.input-familia').value,
         responsavel : select('.input-responsavel').value,
         salario : salario.value,
         endereco : select('.input-endereco').value,
         sobre : select('.text-sobre').value
      }

      familias.push(familia);
      localStorage.setItem('familias', JSON.stringify(familias));
      
      const toast = select('.cadastro-success');
      toast.classList.add('toast-success-show');
      setTimeout(() => {
         toast.classList.remove('toast-success-show');
      }, 2000);

      setTimeout(() => {
         select('.input-familia').value = null 
         select('.input-responsavel').value = null 
         salario.value = null
         select('.input-endereco').value = null 
         select('.text-sobre').value = null
      }, 100);
   }
}