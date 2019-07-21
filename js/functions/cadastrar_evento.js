export default async function cadastrar_evento(array){
    const formData = new FormData(document.getElementById('form_cadastro_evento'));
    formData.append('token', array[0]);
      const response = await fetch('http://localhost/slimapi/public/api/customers/cadastro_evento', {
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
  