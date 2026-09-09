import { describe, expect, it } from "vitest";
import {
    createOdontogram,
    isValidNumberingSystem,
    isValidOdontogram,
    isValidToothId,
    isValidToothStatus
} from "./index";

describe("isValidOdontogram", () => {
    it("validates a correct odontogram", () => {
        const chart = createOdontogram();

        expect(isValidOdontogram(chart)).toBe(true);
    });

    it("rejects a null value", () => {
        expect(isValidOdontogram(null)).toBe(false);
    });

    it("rejects an invalid numbering system", () => {
        const chart = {
            ...createOdontogram(),
            numberingSystem: "PALMER"
        };

        expect(isValidOdontogram(chart)).toBe(false);
    });

    it("rejects an odontogram with a missing tooth", () => {
        const chart = createOdontogram();

        const { UR8, ...teethWithoutUR8 } = chart.teeth;

        const invalidChart = {
            ...chart,
            teeth: teethWithoutUR8
        };

        expect(isValidOdontogram(invalidChart)).toBe(false);
    });

    it("rejects an invalid tooth status", () => {
        const chart = createOdontogram();

        const invalidChart = {
            ...chart,
            teeth: {
                ...chart.teeth,
                UR8: {
                    ...chart.teeth.UR8,
                    status: "broken"
                }
            }
        };

        expect(isValidOdontogram(invalidChart)).toBe(false);
    });

    it("rejects an incorrect tooth number", () => {
        const chart = createOdontogram({
            numberingSystem: "FDI"
        });

        const invalidChart = {
            ...chart,
            teeth: {
                ...chart.teeth,
                UR8: {
                    ...chart.teeth.UR8,
                    number: "1"
                }
            }
        };

        expect(isValidOdontogram(invalidChart)).toBe(false);
    });
});