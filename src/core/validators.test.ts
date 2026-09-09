import { describe, expect, it } from "vitest";
import { isValidNumberingSystem, isValidToothId, isValidToothStatus } from "./index";

describe("validators", () => {
    it("validates a correct tooth id", () => {
        expect(isValidToothId("UR8")).toBe(true);
    });

    it("rejects an invalid tooth id", () => {
        expect(isValidToothId("XX99")).toBe(false);
    });

    it("validates a correct tooth status", () => {
        expect(isValidToothStatus("caries")).toBe(true);
    });

    it("rejects an invalid tooth status", () => {
        expect(isValidToothStatus("broken")).toBe(false);
    });

    it("validates Universal numbering", () => {
        expect(isValidNumberingSystem("UNIVERSAL")).toBe(true);
    });

    it("validates FDI numbering", () => {
        expect(isValidNumberingSystem("FDI")).toBe(true);
    });

    it("rejects an invalid numbering system", () => {
        expect(isValidNumberingSystem("PALMER")).toBe(false);
    });
});