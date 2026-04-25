export interface Usage {
    group: string;
    completion: number;
    id: string;
    success: boolean;
    timestamps: {
        init: number;
        success: number;
        total: number;
    };
}
