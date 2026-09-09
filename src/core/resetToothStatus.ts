import type { Odontogram,ToothId } from "./types";

export function resetToothStatus(chart: Odontogram,toothId: ToothId):Odontogram{
    
    const tooth = chart.teeth[toothId];

    return {
        ...chart,
        teeth:{
            ...chart.teeth,
            [toothId]:{
                ...tooth,
                status: "healthy"
            }
        }
    };
}