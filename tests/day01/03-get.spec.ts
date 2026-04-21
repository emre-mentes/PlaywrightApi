/*
Given
    https://petstore.swagger.io/v2/pet/0
When
    Kullanıcı URL'e bir GET request gönderir
Then
    HTTP Status code 404 olmalı
And
    Status text "Not Found" olmalı
And
    Response body "Pet not found" içermeli
And
    Response body "TechProEd" içermemeli
And
    Server değeri "Jetty(9.2.9.v20150224)" olmalı
*/

import { test,expect } from '@playwright/test';

test('Negatif API testi', async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/0");

  expect(response.status()).toBe(404);
  expect(response.statusText()).toBe("Not Found");

  //response.text() methodu respose body bölümündeki datalari bize stringe cevirerek verir
  const responseBodyText: string = await response.text();

  expect(responseBodyText).toContain("Pet not found");
  expect(responseBodyText).not.toContain("TechProEd");

  //1.yol
  expect(response.headers().server).toBe("Jetty(9.2.9.v20150224)");

  //2 yol
  const headers= response.headers();
  expect(headers.server).toBe("Jetty(9.2.9.v20150224)");
  expect(headers["server"]).toBe("Jetty(9.2.9.v20150224)");


});