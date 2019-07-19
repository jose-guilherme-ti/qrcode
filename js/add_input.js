
    $(document).ready(function(){      
      var postURL = "/addmore.php";
      var i=1;  


      $('#add').click(function(){  
           i++;  
           $('#dynamic_field').append('<tr id="row'+i+'" class="dynamic-added"><td><input type="text" name="atributos[]" placeholder="Atributos" class="form-control name_list" required /></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></td></tr>');  
      });


      $(document).on('click', '.btn_remove', function(){  
           var button_id = $(this).attr("id");   
           $('#row'+button_id+'').remove();  
      });  


     $('#cadastrar').click(function(e){
        e.defaultprevented      
        var atributos = $('input[name="atributos[]"]').map(function(){
            return $(this).val();
        }).get();
        $.each(atributos, (key,value) =>{
            console.log(value);
        });
        /*const carregar_base_consultor = async () => {
            const response = await fetch('http://localhost/slimapi/public/api/customers/carregar_base_consultor');
            const myJson = await response.json(); //extract JSON from the http response
             return myJson;
            // do something with myJson
          }
        carregar_base_consultor().then((sucesso, error) =>{
            console.log(sucesso)
        })*/

        const formData = new FormData(document.getElementById('cadastro_tipo_evento'));

        /*const campos = new URLSearchParams();

        for(const campo of formData){
            campos.append(campo[0], campo[1]);
        }*/

        const criarTabela = async () => {
            const response = await fetch('http://localhost/slimapi/public/api/customers/criartabela', {
              method: 'POST',
              body: formData, // string or object
              /*headers: {
                'Content-Type': 'text/json'
              }*/
            });
            const myJson = await response.json(); //extract JSON from the http response
            return myJson;
            
            // do something with myJson
          }

        criarTabela().then( sucesso =>{
            console.log(sucesso)
        }).catch( err =>{
            console.log(err)
        })


        
           /* $.ajax({  
                url:postURL,  
                method:"POST",  
                data:$('#cadastro_tipo_evento').serialize(),
                type:'json',
                success:function(data)  
                {
                  	i=1;
                  	$('.dynamic-added').remove();
                  	$('#add_name')[0].reset();
    				        alert('Record Inserted Successfully.');
                }  
           });  */
      });


    });  
