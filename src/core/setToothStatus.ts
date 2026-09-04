import type { Odontogram, ToothId, ToothStatus } from "./types";

export function setToothStatus(chart: Odontogram, toothId: ToothId, status: ToothStatus): Odontogram {
    const tooth = chart.teeth[toothId];

    return {
        ...chart,
        teeth: {
            ...chart.teeth,
            [toothId]: {
                ...tooth,
                status
            }
        }
    };
}