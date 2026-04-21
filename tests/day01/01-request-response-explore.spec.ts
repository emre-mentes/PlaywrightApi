/*
    1) Manual API testleri icin Postman kullanmaya devam edeceğiz
    2) Otomasyon API testleri icin playwright kullanacağız
    3) API testleri yaparken yapacağımz islem sundan ibarettir
        a) Send request and get response
        b) Do assertion
*/

import { test } from "@playwright/test";

test("request - response - explore", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/5");
  console.log(response);

  //json formatindaki response body javascript objecti olarak nasil alinir?
  //serverdan gelen response bodyi okur ve json formatindaki bodyi javascirpt objectine cevirir,
  //Böylece bu object üzeriden istedigimiz dataya nokta koyarak ulasabiliriz
  const responseBody = await response.json();
  console.log(responseBody);

  //response icinden status code nasil alinir?
  console.log(response.status()); //200
  console.log(response.statusText()); //OK
  //status code 2xx lü bir kod ise true return eder
  //status code 4xx lü bir kod ise false return eder
  console.log(response.ok()); //true
  //requestin gönderildigi end pointi return eder
  console.log(response.url()); //https://petstore.swagger.io/v2/pet/5

  //headers nasil alinir?
  console.log(response.headers());
  /*
  {
  date: 'Wed, 15 Apr 2026 18:18:48 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, DELETE, PUT',
  'access-control-allow-headers': 'Content-Type, api_key, Authorization',
  server: 'Jetty(9.2.9.v20150224)'
  }
  */
  //===========response headers tek tek erisim================================
  
  //bir objectin propertisine ulasmak icin birinci yol olarak nokta kullanabiliriz
  console.log("header server ==>", response.headers().server);
  console.log("header date ==>", response.headers().date);

  //bir objectin propertisine ulasmak icin ikinci yol olarak köseli parantez ile ulasabiliriz
  console.log("header content-type ==>", response.headers()["content-type"]);

});