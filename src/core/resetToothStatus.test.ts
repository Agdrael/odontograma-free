import { describe, expect, it } from "vitest";
import { createOdontogram, resetToothStatus, setToothStatus } from "./index";

describe("resetToothStatus", () => {
    it("resets a tooth status to healthy", () => {
        const chart = createOdontogram();
        const modifiedChart = setToothStatus(chart, "UR8", "caries");
        const resetChart = resetToothStatus(modifiedChart, "UR8");

        expect(resetChart.teeth.UR8.status).toBe("healthy");
    });

    it("does not mutate the original odontogram", () => {
        const chart = createOdontogram();
        const modifiedChart = setToothStatus(chart, "UR8", "caries");
        const resetChart = resetToothStatus(modifiedChart, "UR8");

        expect(modifiedChart.teeth.UR8.status).toBe("caries");
        expect(resetChart.teeth.UR8.status).toBe("healthy");
    });

    it("does not modify other teeth", () => {
        const chart = createOdontogram();
        const withChanges = setToothStatus(
            setToothStatus(chart, "UR8", "caries"),
            "UL1",
            "crown"
        );

        const resetChart = resetToothStatus(withChanges, "UR8");

        expect(resetChart.teeth.UR8.status).toBe("healthy");
        expect(resetChart.teeth.UL1.status).toBe("crown");
    });
});