import criarTabela from './functions/cadastrar_tipo_evento.js';
import carregar_tipo_evento from "./functions/carregar_evento.js";
$(document).ready(function () {
  var postURL = "/addmore.php";
  var i = 1;


  $('#add').click(function () {
    i++;
    $('#dynamic_field').append('<tr id="row' + i + '" class="dynamic-added"><td><input type="text" name="atributos[]" placeholder="Atributos" class="form-control name_list" required /></td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></td></tr>');
  });


  $(document).on('click', '.btn_remove', function () {
    var button_id = $(this).attr("id");
    $('#row' + button_id + '').remove();
  });


  $('#cadastrar').click(function (e) {
    e.defaultprevented
    /*var atributos = $('input[name="atributos[]"]').map(function(){
        return $(this).val();
    }).get();
    $.each(atributos, (key,value) =>{
        console.log(value);
    });*/

    /*const campos = new URLSearchParams();

    for(const campo of formData){
        campos.append(campo[0], campo[1]);
    }*/


    criarTabela().then(sucesso => {
      $("#tipo_evento").empty();
      carregar_tipo_evento().then(sucesso => {
        var evento_seletivo_form = '<option class="bld" value="">Selecione uma forma de ingresso</option> ';

        $.each(sucesso, function (val) {
          if (sucesso !== undefined) {

            evento_seletivo_form += '<option value="' + sucesso[val].id + '">' + sucesso[val].descricao_evento + '</option>';

          }
          $("#tipo_evento").html(evento_seletivo_form);

        });

      })

    }).catch(err => {
      console.log(err)
    })




  });


});  
