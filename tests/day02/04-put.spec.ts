/*
        Given
            1) https://jsonplaceholder.typicode.com/todos/198
            2) {
                 "userId": 21,
                 "title": "Wash the dishes",
                 "completed": false
               }
        When
            Kullanıcı URL'e bir PUT request gönderir
        Then
           Status code 200 olmalı
           Response şu şekilde olmalı:
           {
                "userId": 21,
                "title": "Wash the dishes",
                "completed": false
                "id": 198
           }
     */

import { test, expect } from "@playwright/test";
test("PUT request", async ({ request }) => {
  const payload = {
    userId: 21,
    title: "Wash the dishes",
    completed: false,
  };

  const response = await request.put( "https://jsonplaceholder.typicode.com/todos/198",  {data: payload },
  );

  expect(response.status()).toBe(200);

  //1.yol
  const responseBody = await response.json();
  expect(responseBody.userId).toBe(21);
  expect(responseBody.title).toBe("Wash the dishes");
  expect(responseBody.completed).toBe(false);
  expect(responseBody.id).toBe(198);

  //2.yol
  expect(responseBody).toMatchObject({
    userId: 21,
    title: "Wash the dishes",
    completed: false,
  });
});