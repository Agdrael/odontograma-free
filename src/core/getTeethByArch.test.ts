import { describe, expect, it } from "vitest";

import { createOdontogram, getTeethByArch } from "./index";

describe("getTeethByArch", () => {
    it("returns the 16 upper teeth", () => {
        const chart = createOdontogram();

        const teeth = getTeethByArch(chart, "upper");

        expect(teeth).toHaveLength(16);
        expect(teeth[0].id).toBe("UR8");
        expect(teeth[15].id).toBe("UL8");
    });

    it("return the 16 lower teeth", () => {
        const chart = createOdontogram();

        const teeth = getTeethByArch(chart, "lower");

        expect(teeth).toHaveLength(16);
        expect(teeth[0].id).toBe("LL8");
        expect(teeth[15].id).toBe("LR8");
    });

    it("respects the selected numbering system", () => {
        const universal = createOdontogram({ numberingSystem: "UNIVERSAL" });

        const fdi = createOdontogram({ numberingSystem: "FDI" });

        const universalUpper = getTeethByArch(universal, "upper");
        const fdiUpper = getTeethByArch(fdi, "upper");

        expect(universalUpper[0].number).toBe("1");
        expect(fdiUpper[0].number).toBe("18");
    });
})