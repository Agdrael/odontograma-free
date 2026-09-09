import type { Odontogram } from "./types";

export function resetOdontogram(chart: Odontogram): Odontogram {
    const teeth = Object.fromEntries(
        Object.entries(chart.teeth).map(([toothId, tooth]) => [
            toothId,
            {
                ...tooth,
                status: "healthy"
            }
        ])
    ) as Odontogram["teeth"];

    return {
        ...chart,
        teeth
    };
}