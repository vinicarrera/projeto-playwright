import { test, expect, request } from '@playwright/test';

test.describe('Testes de API (JSONPlaceholder)', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('deve listar um post específico (GET)', async () => {
        const apiContext = await request.newContext();
        const response = await apiContext.get(`${baseURL}/posts/1`);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
        expect(responseBody).toHaveProperty('title');
    });

    test('deve criar um post com sucesso (POST)', async () => {
        const apiContext = await request.newContext();
        const newPost = {
            title: 'Playwright Test',
            body: 'Automation is awesome',
            userId: 1
        };

        const response = await apiContext.post(`${baseURL}/posts`, {
            data: newPost
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody.title).toBe(newPost.title);
        expect(responseBody.body).toBe(newPost.body);
        expect(responseBody.userId).toBe(newPost.userId);
        expect(responseBody).toHaveProperty('id');
    });

    test('deve atualizar um post com sucesso (PUT)', async () => {
        const apiContext = await request.newContext();
        const updatedPost = {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1
        };

        const response = await apiContext.put(`${baseURL}/posts/1`, {
            data: updatedPost
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.title).toBe(updatedPost.title);
    });
});
