export default async function criarTabela(){
  const formData = new FormData(document.getElementById('cadastro_tipo_evento'));

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
