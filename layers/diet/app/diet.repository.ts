import type { HttpClient } from "#shared/http/HttpClient";
import { api } from "#shared/http";
import ENDPOINTS from "./configs/endpoints";

class DietRepository {
    constructor(private client: HttpClient) {}

    signUp(body: Diet) {
        return this.client.post<string, Diet>(ENDPOINTS.signUp, body);
    }
}

export default new DietRepository(api);
