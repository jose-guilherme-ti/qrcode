import { carregar_tipo_evento, carregar_evento_atributo } from "./functions/carregar_evento.js";
import cadastrar_evento  from "./functions/cadastrar_evento.js";
$(document).ready(function () {

  var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  var token = function() {
      return rand() + rand(); // to make it longer
  };

  var tokengerado;
  var tipo_evento;

  carregar_tipo_evento()
    .then(sucesso => {
      var evento_seletivo_form = '<option class="bld" value="">Selecione uma forma de ingresso</option> ';
      $.each(sucesso, function (val) {
          evento_seletivo_form += '<option value="' + sucesso[val].id + '">' + sucesso[val].descricao_evento + '</option>';
      });
      $("#id_tipo_evento").html(evento_seletivo_form);

    });

  $('#id_tipo_evento').on('change', function () {

    tokengerado = token();
    tipo_evento = $(this).val();

    carregar_evento_atributo(tipo_evento)
      .then(sucesso => {
        let atributos_carregados = "";
        $.each(sucesso, function (val) {
          if (sucesso != undefined ||  sucesso != null) {
            atributos_carregados += ' <div class="form-group"><label for="'+sucesso[val].campo_atributo+'" class="col-sm-2 control-label">'+sucesso[val].campo_atributo+'</label> <div class="col-sm-4"><input type="text" class="form-control" name="atributo_'+sucesso[val].id+'" placeholder="'+sucesso[val].campo_atributo+'"></div></div>'
          }
        })
        //$("#atributos_carregados").html('<div type="hidden" id="id_tipo_evento" name="id_tipo_evento" value="'+$(this).val()+'"></div><div type="hidden" id="token" name="token" value="'+tokengerado+'"></div>');
        $("#atributos_carregados").html(atributos_carregados);
      })

    
   
  })


  $('#cadastrar_evento').click(function(e){
    e.defaultprevented;
    var array_hidden = [tokengerado];
    cadastrar_evento(array_hidden).then(sucesso =>{

    })

    new QRCode(document.getElementById('qrcode'), {
      text:  tokengerado,
      width: 300,
      height: 300,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    })
  })




}); 