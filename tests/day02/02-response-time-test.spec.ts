/*
    Given
        https://petstore.swagger.io/v2/pet/5
    When
        Kullanıcı URL'e bir GET request gönderir
    Then
        HTTP Status Code 200 olmali
    And
        Response süresi ölçülmeli  
    And
        Cevap süresi 2000 ms'den kısa olmalı
*/
import { test, expect } from "@playwright/test";

test("response time test", async ({ request }) => {
  // Date.now(); methodu bize o anki zamani milisaniye cinsinden number olarak verir
  const startTime: number = Date.now();
  console.log("startTime==>>",startTime)

  //send request get response
  const response = await request.get("https://petstore.swagger.io/v2/pet/5");

  const endTime: number = Date.now();
  console.log("endTime==>>",endTime)

  const responseTime = endTime - startTime;
  console.log("responseTime==>>",responseTime)

  expect(responseTime).toBeLessThan(2000);

  expect(response.status()).toBe(200);
});