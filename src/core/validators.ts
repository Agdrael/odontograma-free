import type { NumberingSystem, Odontogram, ToothId, ToothStatus } from "./types";
import { getToothNumber,PERMANENT_TEETH } from "./teeth";

export function isValidToothId(value: string): value is ToothId {
    return PERMANENT_TEETH.some(tooth => tooth.id === value);
}

export function isValidToothStatus(value: string): value is ToothStatus {
    return [
        "healthy",
        "caries",
        "restoration",
        "crown",
        "missing",
        "extracted",
        "implant"
    ].includes(value);
}

export function isValidNumberingSystem(value: string): value is NumberingSystem {
    return value === "UNIVERSAL" || value === "FDI";
}

export function isValidOdontogram(value: unknown): value is Odontogram {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const chart = value as Record<string, unknown>;

    if (chart.dentition !== "permanent") {
        return false;
    }

    if (typeof chart.numberingSystem !== "string" || !isValidNumberingSystem(chart.numberingSystem)) {
        return false;
    }

    if (typeof chart.teeth !== "object" || chart.teeth === null) {
        return false;
    }

    const teeth = chart.teeth as Record<string, unknown>;

    for (const definition of PERMANENT_TEETH) {
        const tooth = teeth[definition.id];

        if (typeof tooth !== "object" || tooth === null) {
            return false;
        }

        const toothData = tooth as Record<string, unknown>;

        if (toothData.id !== definition.id) {
            return false;
        }

        if (
            typeof toothData.number !== "string" ||
            toothData.number !== getToothNumber(definition.id, chart.numberingSystem)
        ) {
            return false;
        }

        if (typeof toothData.status !== "string" || !isValidToothStatus(toothData.status)) {
            return false;
        }
    }

    return true;
}