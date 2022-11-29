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







function ocultarEMostrarMenu(){
  var submenu = document.getElementById('sidebar');
  if(submenu.style.display == 'block'){
    submenu.style.display = 'none';
  }else{
    submenu.style.display = 'block';
  }
}

function ocultarEMostrarMenu2(){
  var submenu = document.getElementById('navbar');
  if(submenu.style.display == 'block'){
    submenu.style.display = 'none';
  }else{
    submenu.style.display = 'block';
  }
}









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

function myFunction2() {
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



function myFunction3() {
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



function myFunction4() {
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





function dropdown6() {
  document.getElementById("myDropdown6").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn6')) {
  var dropdown = document.getElementsByClassName("dropdown-content6");
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



  /*  tirar daquii */
/**
* Template Name: Arsha - v4.9.1
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()
