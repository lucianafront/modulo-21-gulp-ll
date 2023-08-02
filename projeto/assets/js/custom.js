// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   $('.owl-carousel').owlCarousel();

   let titulos = $('h6') // tag
   titulos.first().html("R$ 25,00")
   /*
    titulos.first().css(
      {
         'color': 'red',
         'background': '#ff0',

     }
      )
   */
   let menus = $('.nav-link')

   // menus.last().html('mudei o titulo')





   let itens = $('.featured-item') // class

   let destaques = $('#featured') // id

   console.log(titulos.first());

   // Configuração de produtos

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   $('.featured-item h4').dblclick(function () {

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });

   /*
    * Manipulação de eventos
    */


   $('.featured-item a').on('click', function (event) {

      event.preventDefault();

      alert('produto esgotado');


   })
   /*
   *  Callback
   *  entendendo ações que começam ao termino de outra
   */
   $(' .featured-item:nth(1)')
      .hide(500, function () {
         //este é o callback
         console.log($(this).find('h4').text() + 'esgotado')
      })
      .show(500, function () {
         console.log($(this).find('h4').text() + 'em estoque')

      })
   /*
   *Animações modulo 19.2
   */
   const duracao = 1000 // equivalente a 1 segundo

   $('.featured-item:nth(0) ')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function (e) {

      e.preventDefault()

      if ($('#email').val() != '') {

         $('#email').animate({
            opacity: "toggle",
            top: "-50"

         }, 500, function () {
            console.log($(this).val())
         })

      }
   });
   /*19.3
   * Ouvinte de eventos .nav-modal-open
   */

   $('.nav-modal-open').on('click', function (e) {

      e.preventDefault();

      let elem = $(this).attr('rel')


      $('.modal-body').html($('#' + elem).html())
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modalId'))

      myModal.show()
   })
   // mod.19 jQueryII-Parte 2.(validação de formulario)
   //TODO:vc po incrementar a validação,checar se o nome é valido ,+ 2caracteres,verificar se o email é valido com um "@" e "."



   function validate(elem) {

      if (elem.val() == '') {
         console.log('o campo de' + elem.attr('name') + 'é obrigatório');
         elem.addClass('invalid');

         return false;
      } else {
         elem.removeClass('invalid');

      }
   }
   $('body').on('submit', ' .modal-body .form', function (e) {

      e.preventDefault()

      const inputName = $('#nome ')
      const inputEmail = $('#e-mail ')

      validate(inputName)
      validate(inputEmail)

      if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
         console.log('verificar campos obrigatórios');
         return false;
      } else {
         $(this).submit();
      }
   })

   $('body').on('blur', '#nome', function () {
      validate($(this))
   })

   $('body').on('blur', '#email', function () {
      validate($(this))
   })
})
