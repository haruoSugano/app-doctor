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


//validar senhas tela cadastro medico e paciente


function validarSenha(){
  var senha = formuser.passwordSenha.value;
  var rep_senha = formuser.passwordConfirmarSenha.value;
  if (senha != rep_senha) {
    alert('As senhas devem ser iguais!');
    formuser.senha.focus();
    return false;
  }
}







//script para mostrar senha (caixa de seleção da tela login)
function mostrarSenha() {
  var senha = document.getElementById("password");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}

//tela cadastrar medico e paciente (msenha)
function mostrarSenha2() {
  var senha = document.getElementById("passwordSenha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}


//tela cadastrar medico e paciente (confirmar senha)
function mostrarSenha3() {
  var senha = document.getElementById("passwordConfirmarSenha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}



/*
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
 */
/*
function mostrarSenhaDois() {
  var senha = document.getElementById("password");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}

function mostrarSenhaDois() {
  var senha = document.getElementById("eye-senha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
  }
}

 */

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
/*
function teste4() {
  let container = document.querySelector('div.confirmar-senha');
  let input = document.querySelector('input.input-senha');
  let icon = document.querySelector('img.eye');

  icon.addEventListener('click', function() {
    container.classList.toggle('visible');
  if(container.classList.contains('visible')) {
    icon.src = 'assets/resources/img/eye-off.svg';
    input.type = 'text';
  } else {
    icon.src = 'assets/resources/img/eye.svg';
    input.type = 'password';
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

document.querySelector('body').click(function(e){
  //Essa condição verifica se o clique foi diretamente na sua div
  if(e.target.id == "myDropdown1")
     return;
  //Essa condição verifica se o clique foi feito em algum elemento dentro      da sua div. Esse tem '#' porque é um seletor do jquery
  if(document.querySelector(e.target).closest('#imyDropdown1').length)
     return;

 //Aqui você pode colocar seu código

});






function dropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn1')) {
  var dropdowns = document.getElementsByClassName("dropdown-content1");
  var a;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn2')) {
  var dropdowns = document.getElementsByClassName("dropdown-content2");
  var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}



function dropdown3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



function dropdown4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn4')) {
  var dropdowns = document.getElementsByClassName("dropdown-content4");
  var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

/* function myFunction2() {
  $('#myDropdown1').toggleClass('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */


function dropdown5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn5')) {
  var dropdown = document.getElementsByClassName("dropdown-content5");
  var i;
for (i = 0; i < dropdown.length; i++) {
  var openDropdown = dropdown[i];
  if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}}





/*
*/

var dropdown = document.getElementById("myDropdown1");
  document.documentElement.onclick = function(event){
    if (event.target !== dropdown) {
        dropdown.style.display = 'none';
    }
}




/*   $scope.delete = function ( idx ) {
    var person_to_delete = $scope.persons[idx];

    API.DeletePerson({ id: person_to_delete.id }, function (success) {
      $scope.persons.splice(idx, 1);
    });
  };
 */


