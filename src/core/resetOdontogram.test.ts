import { describe, expect, it } from "vitest";
import { createOdontogram, resetOdontogram, setToothStatus } from "./index";

describe("resetOdontogram", () => {
    it("resets all tooth statuses to healthy", () => {
        const chart = createOdontogram();

        const modifiedChart = setToothStatus(
            setToothStatus(chart, "UR8", "caries"),
            "UL1",
            "crown"
        );

        const resetChart = resetOdontogram(modifiedChart);

        expect(resetChart.teeth.UR8.status).toBe("healthy");
        expect(resetChart.teeth.UL1.status).toBe("healthy");
    });

    it("does not mutate the original odontogram", () => {
        const chart = createOdontogram();
        const modifiedChart = setToothStatus(chart, "UR8", "caries");
        const resetChart = resetOdontogram(modifiedChart);

        expect(modifiedChart.teeth.UR8.status).toBe("caries");
        expect(resetChart.teeth.UR8.status).toBe("healthy");
    });

    it("keeps the current numbering system", () => {
        const chart = createOdontogram({
            numberingSystem: "FDI"
        });

        const modifiedChart = setToothStatus(chart, "UR8", "caries");
        const resetChart = resetOdontogram(modifiedChart);

        expect(resetChart.numberingSystem).toBe("FDI");
        expect(resetChart.teeth.UR8.number).toBe("18");
        expect(resetChart.teeth.UR8.status).toBe("healthy");
    });
});