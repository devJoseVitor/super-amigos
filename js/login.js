let ativo = true;

const btn = select('.btn-login');

const blur = select('.login-blur');
const pop = select('.login');

btn.onclick = () => {
  window.scrollTo(0,0);
  ativo = !ativo;

  if(!ativo){  
    blur.classList.remove('login-blur-hide');
    pop.classList.remove('login-closed');
    select('html').classList.toggle('unscrollable');
    return false;
  }

  return false;
}

const btnAnjo = select('.btn-anjo') ? select('.btn-anjo') : false;

if(btnAnjo)
btnAnjo.onclick = () => {
  window.scrollTo(0,0);
  ativo = !ativo;

  if(!ativo){  
    blur.classList.remove('login-blur-hide');
    pop.classList.remove('login-closed');
    select('html').classList.toggle('unscrollable');
    return false;
  }

  return false;
}

const close = select('.close-login');

close.onclick = e => {
  ativo = !ativo;
  blur.classList.add('login-blur-hide');
  pop.classList.add('login-closed');
  select('html').classList.toggle('unscrollable');
}

let anjos = [];

localStorage.removeItem('usuario_logado');

const logar = select('.btn-logar');

logar.onclick = () => {
  console.log('aaaa');
   const anjo = select('.input-anjo').value;
   if(anjo.trim().lenght < 1) return;

   anjos.push(anjo);
   localStorage.setItem('anjos', JSON.stringify(anjos));
   localStorage.setItem('usuario_logado', anjo);
   window.location.href = '/dashboard.html';
}