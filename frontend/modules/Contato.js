import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() { 
    this.events(); 
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', erro => {
      erro.preventDefault();
      this.validate(erro);
    });
  }

  validate(erro) {
    const el = erro.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    // Eleminação de erros
    const erros = document.querySelectorAll('.error-text');
    for (let div of erros) div.remove();

    // Verificação de erros
    if(!nomeInput.value) {
      // const p = document.createElement('p');
      // let errorMsg = document.createTextNode('Nome é campo obrigatório.');
      // p.appendChild(errorMsg);
      // p.classList.add('error-text');
      // p.style.color = 'red';
      // const spanError = el.querySelector('.span-error');
      // spanError.after(p);
      this.createError(el, 'Nome é campo obrigatório.');
      error = true;
    }

    if(emailInput.value && !validator.isEmail(emailInput.value)) {
      // const p = document.createElement('p');
      // let errorMsg = document.createTextNode('Email inválido.');
      // p.appendChild(errorMsg);
      // p.classList.add('error-text');
      // p.style.color = 'red';
      // const spanError = el.querySelector('.span-error');
      // spanError.after(p);
      this.createError(el, 'Email inválido.');
      error = true;
    }

    if(!emailInput.value && !telefoneInput.value) {
      // const p = document.createElement('p');
      // let errorMsg = document.createTextNode('Email ou telefone deve ser preenchido.');
      // p.appendChild(errorMsg);
      // p.classList.add('error-text');
      // p.style.color = 'red';
      // const spanError = el.querySelector('.span-error');
      // spanError.after(p);
      this.createError(el, 'Email ou telefone deve ser preenchido.');
      error = true;
    }
  
    if(!error) el.submit();
  }

  createError(element, msg) {
    const p = document.createElement('p');
    let errorMsg = document.createTextNode(msg);
    p.appendChild(errorMsg);
    p.classList.add('error-text');
    p.style.color = 'red';
    const spanError = element.querySelector('.span-error');
    spanError.after(p);
  }
}
