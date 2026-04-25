export interface Usage {
    group: string;
    stepsSkipped: number;
    completion: number;
    id: string;
    success: boolean;
    timestamps: {
        init: number;
        success: number;
        total: number;
    };
}
