export default async function carregar_tipo_evento(){
    const response = await fetch('http://localhost/slimapi/public/api/customers/carregar_tipo_evento');
    const myJson = await response.json(); //extract JSON from the http response
    return myJson;
    // do something with myJson
}

export async function carregar_evento_atributo(id){

   
   
    const response = await fetch('http://localhost/slimapi/public/api/customers/carregar_evento_atributo/'+ id);
    const myJson = await response.json(); //extract JSON from the http response
    return myJson;
    // do something with myJson
}