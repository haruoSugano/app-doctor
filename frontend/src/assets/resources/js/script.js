function formataCEP(cep) {
  const elementoAlvo = cep
  const cepAtual = cep.value

  let cepAtualizado;

  cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/,
    function( regex, argumento1, argumento2) {
      return argumento1 + '-' + argumento2;
    })
  elementoAlvo.value = cepAtualizado;
}

function mascaraTelefone(event) {
      let tecla = event.key;
      let telefone = event.target.value.replace(/\D+/g, "");

      if (/^[0-9]$/i.test(tecla)) {
          telefone = telefone + tecla;
          let tamanho = telefone.length;

          if (tamanho >= 12) {
              return false;
          }

          if (tamanho > 10) {
              telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
          } else if (tamanho > 5) {
              telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
          } else if (tamanho > 2) {
              telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
          } else {
              telefone = telefone.replace(/^(\d*)/, "($1");
          }

          event.target.value = telefone;
      }

      if (!["Backspace", "Delete"].includes(tecla)) {
          return false;
      }
}
function mostrarSenha() {
  var senha = document.getElementById("password");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}

function mostrarSenhaDois() {
  let btn = document.querySelector('.fa-eye');
  btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
  });
}

/* function mostrarSenhaDois() {
  var senha = document.getElementById("eye-confirmar-senha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
} */

/* function mostrarSenhaDois{
  let btn = document.querySelector('.fa-eye');
  btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
} */




//script para ocultar/mostrar descrição do atestado -->
function mostrarDescricaoAtestado() {
  var btn = document.getElementById('btn-adicionar-atestado');
  var container = document.querySelector('.container-escondido');
  btn.addEventListener('click', function() {

    if(container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
  });
}

function limparForm() {
	document.getElementById('formulario').reset();
}








/* function ocultarEMostrarMenu(){
  var submenu = document.getElementById('sidebar');
  if(submenu.style.display == 'block'){
    submenu.style.display = 'none';
  }else{
    submenu.style.display = 'block';
  }
}
 */





