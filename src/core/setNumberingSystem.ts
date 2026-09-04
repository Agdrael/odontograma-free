import type { NumberingSystem, Odontogram, ToothId} from "./types";
import { getToothNumber } from "./teeth";

export function setNumberingSystem(chart: Odontogram,
    numberingSystem: NumberingSystem
): Odontogram {
    const teeth = { ...chart.teeth };

    const toothIds = Object.keys(teeth) as ToothId[];

    for (const toothId of toothIds) {
        teeth[toothId] = {
            ...teeth[toothId],
            number: getToothNumber( toothId,numberingSystem)
        };
    }

    return {
        ...chart,
        numberingSystem,
        teeth
    };
}