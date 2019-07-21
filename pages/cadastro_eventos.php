<html>

<head>
  <title>QRCode</title>
  <link href="./../css/bootstrap.min.css" rel="stylesheet">
  <link href="./../css/style.css" rel="stylesheet">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  
  <script src="./../js/bootstrap.min.js"></script>
  <script type="module" src="./../js/carregar_fluxo.js"></script>
  <script type="module" src="./../js/add_input.js"></script>
  <script src="./../js/qrcode.min.js"></script>



</head>

<body>




  <br><br>

  <h1 style="text-align:center;"> CADASTRO DO EVENTO</h1>

  <br>


  <form class="form-horizontal" id='form_cadastro_evento'>


    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Tipo do Evento</label>
      <div class="col-sm-4">
        <select id="id_tipo_evento" name="id_tipo_evento" class="form-control">

        </select>
      </div>





      <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal">
        Cadastrar
      </button>
    </div>



    <!-- Button trigger modal -->

    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Código do Cliente</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="inputPassword3" placeholder="" name="codigo_cliente">
      </div>
    </div>


    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Data de Inicio do Evento</label>
      <div class="col-sm-4">
        <input type="date" class="form-control" id="inputPassword3" placeholder="" name="data_inicio_evento">
      </div>
    </div>

    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Data Final do Evento</label>
      <div class="col-sm-4">
        <input type="date" class="form-control" id="inputPassword3" placeholder="" name="data_final_evento">
      </div>
    </div>

    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Nome do Evento</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="inputPassword3" placeholder="" name="nome_evento">
      </div>
    </div>


    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Local do Evento</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="inputPassword3" placeholder="" name="local_evento">
      </div>
    </div>
    <div id="atributos_carregados">

    </div>




  </form>

  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button class="btn btn-default" id="cadastrar_evento">Cadastrar</button>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    <div id="qrcode"></div>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Cadastrar Tipo de Evento</h4>
        </div>
        <div class="modal-body">
          <form id="cadastro_tipo_evento">
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Código do Cliente</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="codigo_cliente" name="codigo_cliente" placeholder="">
              </div>
            </div>

            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Descrição do Evento</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="descricao_evento" name="descricao_evento" placeholder="">
              </div>
            </div>

            <div class="container">
              <div class="form-group">
                <div>
                  <table class="table" id="dynamic_field" border-top="0">
                    <tr>
                      <td class="col-sm-4">
                        <input type="text" name="atributos[]" placeholder="Atributos" class="form-control" required="" />
                      </td>

                      <td><button type="button" name="add" id="add" class="btn btn-success">+</button></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </form>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-default" id="cadastrar">Cadastrar</button>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>

        </div>
      </div>
    </div>
  </div>
</body>

</html>