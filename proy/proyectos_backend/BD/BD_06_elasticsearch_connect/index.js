/*

ElasticSearch:

. BD documental
. Es un motor de búsqueda y análisis distribuido basado en Apache Lucene
. Se envian datos en forma de documentos JSON a Elasticsearch mediante la API
. Se puede usar la herramienta Kibana para visualizar los datos y crear paneles interactivos
. URL Kibana: http://192.168.0.2:5601/app/home#/


. DOC ElasticSearch: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html

. Se instala en proyecto: npm i @elastic/elasticsearch

. Indice: es un espacio donde se guardan documentos
. Crear un indice por:
  . Por kibana mediante Dev Tools ===> PUT /my-index
  . Por Programa                  ===> await client.indices.create({ index: 'my-index' })

. Para ver el indice desde Discover, hay que crear un patrón de indice en Kibana desde Stack Management / Index patterns

. Agregar un documento:   
  POST my-index/_doc 
  {"nome": "BR", "km2": 8515767}
  POST my-index/_doc 
  {"nome": "AR", "km2": 2780400}
  POST my-index/_doc 
  {"nome": "CH", "km2": 756102}
  POST my-index/_doc 
  {"nome": "UY", "km2": 176215}
  POST my-index/_doc 
  {"nome": "PY", "km2": 406752}

. Borrar un documento
  POST my-index/_delete_by_query
  {
    "query": {
      "match": {
        "_id": "cSOoY48BuFirOKx9hSl3"
      }
    }
  }
  
*/

const { Client } = require("@elastic/elasticsearch");

async function connectDB() {
  const client = new Client({
    node: "http://192.168.0.2:9200/",
  });

  /*
  GET my-index/_search
  {
    "query": {
      "match": {
        "_id": "ciPRY48BuFirOKx9Siml"
      }
    }
  }
  */
  const doc = await client.get({
    index: "my-index",
    id: "ciPRY48BuFirOKx9Siml",
  });

  console.log(doc);

  const result = await client.search(
    {
      index: "my-index",
      query: {
        match: { nome: "BR" },
      },
    },
    { meta: true }
  );

  console.log(result);
}

connectDB();
