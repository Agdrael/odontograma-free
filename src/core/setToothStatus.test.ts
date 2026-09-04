import { describe, expect, it } from "vitest";
import { createOdontogram, setNumberingSystem, setToothStatus } from "./index";

describe("setToothStatus", () => {
    it("changes the status of a tooth", () => {
        const chart = createOdontogram();

        const updatedChart = setToothStatus(
            chart,
            "UR8",
            "caries"
        );

        expect(updatedChart.teeth.UR8.status)
            .toBe("caries");
    });

    it("does not mutate the original odontogram", () => {
        const chart = createOdontogram();

        const updatedChart = setToothStatus(
            chart,
            "UR8",
            "caries"
        );

        expect(chart.teeth.UR8.status)
            .toBe("healthy");

        expect(updatedChart.teeth.UR8.status)
            .toBe("caries");
    });

    it("keeps the tooth status when changing numbering system", () => {
        const chart = createOdontogram();

        const withCaries = setToothStatus(
            chart,
            "UR8",
            "caries"
        );

        const fdiChart = setNumberingSystem(
            withCaries,
            "FDI"
        );

        expect(fdiChart.teeth.UR8.id)
            .toBe("UR8");

        expect(fdiChart.teeth.UR8.number)
            .toBe("18");

        expect(fdiChart.teeth.UR8.status)
            .toBe("caries");
    });
});