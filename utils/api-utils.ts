import { APIRequestContext } from "@playwright/test";


/**
 * Belirtilen endpointe GET request gönderir ve API' nin response time'i return eder
 * @param request APIRequestContext
 * @param endpoint string
 * @returns responseTime
 */
export async function measureGetResponseTime(request: APIRequestContext, endpoint: string) {

  const startTime = Date.now();

  await request.get(endpoint);

  const endTime = Date.now();

  const responseTime = endTime - startTime;

  return responseTime;
}