import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * k6 Load Test - Migrated from Artillery
 * Target: https://jsonplaceholder.typicode.com
 * 
 * Stages replicate the original Artillery phases:
 * - Warm up: 10s at 1 VU
 * - Ramp up: 20s ramping from 5 to 10 VUs
 */

// Test configuration
export const options = {
    stages: [
        // Warm up: 10 seconds with 1 virtual user
        { duration: '10s', target: 1 },
        // Ramp up: 20 seconds ramping from 5 to 10 virtual users
        { duration: '5s', target: 5 },
        { duration: '15s', target: 10 },
    ],

    // SLA Thresholds - Test fails if these conditions are not met
    thresholds: {
        // 95% of requests must complete below 500ms
        http_req_duration: ['p(95)<500'],
        // Error rate must be less than 1%
        http_req_failed: ['rate<0.01'],
    },
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Default function executed by each virtual user
export default function () {
    // Scenario 1: Get Posts
    const getResponse = http.get(`${BASE_URL}/posts`);

    check(getResponse, {
        'GET /posts - status is 200': (r) => r.status === 200,
        'GET /posts - response time < 500ms': (r) => r.timings.duration < 500,
    });

    // Small pause between requests
    sleep(1);

    // Scenario 2: Create Post
    const payload = JSON.stringify({
        title: 'Performance Test',
        body: 'Testing with k6',
        userId: 1,
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const postResponse = http.post(`${BASE_URL}/posts`, payload, params);

    check(postResponse, {
        'POST /posts - status is 201': (r) => r.status === 201,
        'POST /posts - response time < 500ms': (r) => r.timings.duration < 500,
    });

    // Small pause before next iteration
    sleep(1);
}
