import { describe, expect, it } from "vitest";

import { createOdontogram, setNumberingSystem } from "./index";

describe("setNumberingSystem", () => {
    it("changes the visible numbering form universal to FDI", () => {

        const chart = createOdontogram({
            numberingSystem: "UNIVERSAL"
        });

        const updatedChart = setNumberingSystem(
            chart,
            "FDI"
        );

        expect(updatedChart.numberingSystem)
            .toBe("FDI");

        expect(updatedChart.teeth.UR8.number)
            .toBe("18");

        expect(updatedChart.teeth.UL1.number)
            .toBe("21");

        expect(updatedChart.teeth.LL8.number)
            .toBe("38");

        expect(updatedChart.teeth.LR8.number)
            .toBe("48");
    });

    it("keeps the anatomical tooth id when changing numbering system", () => {
        const chart = createOdontogram();

        const updatedChart = setNumberingSystem(
            chart,
            "FDI"
        );

        expect(updatedChart.teeth.UR8.id)
            .toBe("UR8");

        expect(updatedChart.teeth.UL1.id)
            .toBe("UL1");
    });

    it("does not mutate the original odontogram", () => {
        const chart = createOdontogram({
            numberingSystem: "UNIVERSAL"
        });

        const updatedChart = setNumberingSystem(
            chart,
            "FDI"
        );

        expect(chart.numberingSystem)
            .toBe("UNIVERSAL");

        expect(chart.teeth.UR8.number)
            .toBe("1");

        expect(updatedChart.numberingSystem)
            .toBe("FDI");

        expect(updatedChart.teeth.UR8.number)
            .toBe("18");
    });

    it("can change from FDI back to Universal", () => {
        const chart = createOdontogram({
            numberingSystem: "FDI"
        });

        const updatedChart = setNumberingSystem(
            chart,
            "UNIVERSAL"
        );

        expect(updatedChart.numberingSystem)
            .toBe("UNIVERSAL");

        expect(updatedChart.teeth.UR8.number)
            .toBe("1");

        expect(updatedChart.teeth.UL1.number)
            .toBe("9");
    });
})