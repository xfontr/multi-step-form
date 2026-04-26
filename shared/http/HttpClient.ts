import type { ApiResponse } from "../types/ApiResponse";

export class HttpClient {
    private client: typeof $fetch;

    constructor(baseURL?: string) {
        this.client = $fetch.create({ baseURL });
    }

    get<T>(url: string) {
        return this.client<ApiResponse<T>>(url, {
            method: "GET",
        });
    }

    post<T, B extends BodyInit | object>(url: string, body?: B) {
        return this.client<ApiResponse<T>>(url, {
            method: "POST",
            body,
        });
    }
}
