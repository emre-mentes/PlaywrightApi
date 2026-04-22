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
import { test, expect } from "@playwright/test";

test("toMatchObject() methodu kullanimi", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/313");

  const responseBody = await response.json();
  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("application/json");

  /*
toMatchObject() methodu bir objectin belirli bir kısmını doğrulamak icin kullanilan bir methodtur, sadece bizim belirttigmiz key-value larin doğru olup olmadigini kontrol eder,
objectin geri kalan bizim belirtmedigimiz kısımlariyla ilgilenmez, eslesme saglanirsa test gecer, belirttigimiz kısım ile ilgili en ufak bir farklilik varsa test kalir
*/
  expect(responseBody).toMatchObject({
    category: { id: 0, name: "CAT" },
    name: "ELMAS",
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: "available",
  });
});
