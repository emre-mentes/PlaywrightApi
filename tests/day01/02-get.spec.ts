import { test, expect } from "@playwright/test";
/*
        Given
            https://petstore.swagger.io/v2/pet/5
        When
            Kullanıcı URL'e bir GET request gönderir
        Then
            HTTP Status Code 200 olmalı
        And
            Content Type "application/json" olmalı
        And
            Status text "OK" olmalı
    */
test("Get request API test", async ({ request }) => {
    //1) send request and get response
    const response = await request.get("https://petstore.swagger.io/v2/pet/5");
    //2) do assertion
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/json");
    expect(response.statusText()).toBe("OK"); 
});