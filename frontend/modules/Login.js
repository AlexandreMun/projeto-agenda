import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    // const el = e.target;
    // const emailInput = el.querySelector('input[name="email"]');
    // const passwordInput = el.querySelector('input[name="password"]');
    // let error = false;

    // for(let errorText of this.form.querySelector('.error-text')) {
    //   errorText.remove();
    // }

    // if(!validator.isEmail(emailInput.value)) {
    //   this.createError(emailInput, 'E-mail inválido');
    //   // alert('E-mail inválido');
    //   error = true;
    // }
  
    // if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
    //   this.createError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
    //   // alert('Senha precisa ter entre 3 e 50 caracteres');
    //   error = true;
    // }
    

    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    // Eleminação de erros
    const erros = document.querySelectorAll('.error-text');
    for (let div of erros) div.remove();

    if(!validator.isEmail(emailInput.value)) {
      this.createError(emailInput, 'E-mail inválido');
      // alert('E-mail inválido');
      error = true;
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.createError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
      // alert('Senha precisa ter entre 3 e 50 caracteres');
      error = true;
    }

    if(!error) el.submit();
  }

  createError(field, msg) {
    const p = document.createElement('p');
    let errorMsg = document.createTextNode(msg);
    p.appendChild(errorMsg);
    p.classList.add('error-text');
    p.style.color = 'red';
    field.after(p);
    // const div = document.createElement('div');
    // div.innerHTML = msg;
    // div.classList.add('error-text');
    // div.style.color = 'red';
    // field.insertAdjacentElement('afterend', div);
  }
}