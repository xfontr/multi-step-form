import { api, type HttpClient } from "#shared/http";
import ENDPOINTS from "./configs/endpoints";

class AnalyticsRepository {
    constructor(private client: HttpClient) {}

    publish(body: Usage) {
        return this.client.post<string, Usage>(ENDPOINTS.usage, body);
    }
}

export default new AnalyticsRepository(api);
