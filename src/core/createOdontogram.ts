import type { NumberingSystem, Odontogram, Tooth } from "./types";
import { PERMANENT_TEETH, getToothNumber } from "./teeth";

export interface CreateOdontogramOptions {
    numberingSystem?: NumberingSystem;
}

export function createOdontogram(options: CreateOdontogramOptions = {}): Odontogram {
    const numberingSystem = options.numberingSystem ?? "UNIVERSAL";

    const teeth = {} as Odontogram["teeth"];

    for (const definition of PERMANENT_TEETH) {
        const tooth: Tooth = {
            id: definition.id,
            number: getToothNumber(definition.id, numberingSystem),
            status: "healthy"
        };
        teeth[definition.id] = tooth;
    }

    return {
        dentition: "permanent",
        numberingSystem,
        teeth
    };
}