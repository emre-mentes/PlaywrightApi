/*
        Given
            https://petstore.swagger.io/v2/pet/313
        When
            Kullanıcı URL'e bir GET request gönderir
        Then
            HTTP Status Code 200 olmalı
        And
            Content Type "application/json" olmalı
        And
            "name" şu metni içermeli: "ELMAS",
        And
            "status" değeri "available" olmalı
        And
            "category" altındaki "name" değeri "CAT" olmalı
        And
            "tags" altındaki ilk datanin "name" değeri "string" olmalı
*/

import { test,expect } from '@playwright/test';
test('response body test', async ({ request }) => {

    const response = await request.get("https://petstore.swagger.io/v2/pet/313");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/json");

   const responseBody = await response.json();

   expect(responseBody.name).toContain("ELMAS");
   expect(responseBody.status).toBe("available");
   expect(responseBody.category.name).toBe("CAT");
   expect(responseBody.tags[0].name).toBe("string");
    
});